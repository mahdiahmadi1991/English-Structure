const { grammarTopics } = require('../data/grammar-topics.js');

const errors = [];
const warnings = [];

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

function isLocalizedObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function resolveLocalized(value, path) {
  if (isLocalizedObject(value)) {
    if (!Object.prototype.hasOwnProperty.call(value, 'en')) {
      addError(`${path} is missing required 'en' value.`);
      return undefined;
    }
    if (!Object.prototype.hasOwnProperty.call(value, 'fa')) {
      addWarning(`${path} is missing optional 'fa' value.`);
    }
    return value.en;
  }

  return value;
}

function ensureNonEmptyString(value, path) {
  const resolved = resolveLocalized(value, path, 'string');
  if (typeof resolved !== 'string' || resolved.trim() === '') {
    addError(`${path} must be a non-empty string.`);
  }
}

function ensureStringArray(value, path) {
  const resolved = resolveLocalized(value, path, 'array');
  if (!Array.isArray(resolved)) {
    addError(`${path} must be an array.`);
    return;
  }
  if (resolved.length === 0) {
    addError(`${path} must contain at least one item.`);
  }
  resolved.forEach((item, index) => {
    if (typeof item !== 'string' || item.trim() === '') {
      addError(`${path}[${index}] must be a non-empty string.`);
    }
  });
}

function ensureMistakesArray(value, path) {
  const resolved = resolveLocalized(value, path, 'array');
  if (!Array.isArray(resolved)) {
    addError(`${path} must be an array.`);
    return;
  }
  resolved.forEach((mistake, index) => {
    if (!mistake || typeof mistake !== 'object') {
      addError(`${path}[${index}] must be an object.`);
      return;
    }
    ensureNonEmptyString(mistake.wrong, `${path}[${index}].wrong`);
    ensureNonEmptyString(mistake.correct, `${path}[${index}].correct`);
    ensureNonEmptyString(mistake.explanation, `${path}[${index}].explanation`);
  });
}

function ensureQuizArray(value, path) {
  const resolved = resolveLocalized(value, path, 'array');
  if (!Array.isArray(resolved)) {
    addError(`${path} must be an array.`);
    return;
  }
  resolved.forEach((quiz, index) => {
    if (!quiz || typeof quiz !== 'object') {
      addError(`${path}[${index}] must be an object.`);
      return;
    }
    ensureNonEmptyString(quiz.question, `${path}[${index}].question`);
    if (!Array.isArray(quiz.options) || quiz.options.length < 2) {
      addError(`${path}[${index}].options must be an array with at least 2 items.`);
    } else {
      quiz.options.forEach((option, optionIndex) => {
        if (typeof option !== 'string' || option.trim() === '') {
          addError(`${path}[${index}].options[${optionIndex}] must be a non-empty string.`);
        }
      });
    }
    if (!Number.isInteger(quiz.correct)) {
      addError(`${path}[${index}].correct must be an integer.`);
    } else if (Array.isArray(quiz.options) && (quiz.correct < 0 || quiz.correct >= quiz.options.length)) {
      addError(`${path}[${index}].correct must be between 0 and ${quiz.options.length - 1}.`);
    }
  });
}

function validateTopic(topic, index, ids) {
  if (!topic || typeof topic !== 'object') {
    addError(`Topic at index ${index} must be an object.`);
    return;
  }

  if (typeof topic.id !== 'string' || topic.id.trim() === '') {
    addError(`Topic at index ${index} has an invalid id.`);
  } else if (ids.has(topic.id)) {
    addError(`Duplicate topic id detected: ${topic.id}`);
  } else {
    ids.add(topic.id);
  }

  ensureNonEmptyString(topic.title, `topics[${index}].title`);
  ensureNonEmptyString(topic.category, `topics[${index}].category`);
  ensureStringArray(topic.tags, `topics[${index}].tags`);

  if (!topic.sections || typeof topic.sections !== 'object') {
    addError(`topics[${index}].sections must be an object.`);
    return;
  }

  ensureNonEmptyString(topic.sections.summary, `topics[${index}].sections.summary`);
  ensureStringArray(topic.sections.rules, `topics[${index}].sections.rules`);
  ensureStringArray(topic.sections.examples, `topics[${index}].sections.examples`);
  ensureMistakesArray(topic.sections.commonMistakes, `topics[${index}].sections.commonMistakes`);
  ensureQuizArray(topic.sections.quiz, `topics[${index}].sections.quiz`);
}

function validateTopics(topics) {
  if (!Array.isArray(topics)) {
    addError('grammarTopics must be an array.');
    return;
  }

  const ids = new Set();
  topics.forEach((topic, index) => validateTopic(topic, index, ids));
}

validateTopics(grammarTopics);

console.log('Grammar topics validation report');
console.log(`Topics checked: ${Array.isArray(grammarTopics) ? grammarTopics.length : 0}`);

if (warnings.length) {
  console.log('\nWarnings:');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length) {
  console.log('\nErrors:');
  errors.forEach((error) => console.log(`- ${error}`));
  process.exit(1);
} else {
  console.log('\nNo errors found.');
}
