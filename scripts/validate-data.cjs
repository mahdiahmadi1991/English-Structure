const fs = require('fs');
const path = require('path');
const INDEX_PATH = path.join(__dirname, '..', 'data', 'topics-index.json');
const LEVELS_DIR = path.join(__dirname, '..', 'data', 'levels');

const errors = [];
const LEVELS = [0, 1, 2, 3, 4, 5, 6];

function addError(pathLabel) {
  errors.push(pathLabel);
}

function isLocalizedObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function resolveLocalized(value, pathLabel) {
  if (isLocalizedObject(value)) {
    if (!Object.prototype.hasOwnProperty.call(value, 'en')) {
      addError(`${pathLabel}.en`);
    }
    if (!Object.prototype.hasOwnProperty.call(value, 'fa')) {
      addError(`${pathLabel}.fa`);
    }
    return value;
  }

  return value;
}

function ensurePlainString(value, pathLabel) {
  if (typeof value !== 'string' || value.trim() === '') {
    addError(pathLabel);
  }
}

function ensureNonEmptyString(value, pathLabel) {
  const resolved = resolveLocalized(value, pathLabel);
  if (isLocalizedObject(resolved)) {
    ['en', 'fa'].forEach((lang) => {
      const localized = resolved[lang];
      if (typeof localized !== 'string' || localized.trim() === '') {
        addError(`${pathLabel}.${lang}`);
      }
    });
    return;
  }
  ensurePlainString(resolved, pathLabel);
}

function ensureStringArray(value, pathLabel) {
  const resolved = resolveLocalized(value, pathLabel);
  if (isLocalizedObject(resolved)) {
    ['en', 'fa'].forEach((lang) => {
      const localized = resolved[lang];
      if (!Array.isArray(localized)) {
        addError(`${pathLabel}.${lang}`);
        return;
      }
      if (localized.length === 0) {
        addError(`${pathLabel}.${lang}`);
      }
      localized.forEach((item, index) => {
        if (typeof item !== 'string' || item.trim() === '') {
          addError(`${pathLabel}.${lang}[${index}]`);
        }
      });
    });
    return;
  }
  if (!Array.isArray(resolved)) {
    addError(pathLabel);
    return;
  }
  if (resolved.length === 0) {
    addError(pathLabel);
  }
  resolved.forEach((item, index) => {
    if (typeof item !== 'string' || item.trim() === '') {
      addError(`${pathLabel}[${index}]`);
    }
  });
}

function ensureMistakesArray(value, pathLabel) {
  const resolved = resolveLocalized(value, pathLabel);
  if (isLocalizedObject(resolved)) {
    ['en', 'fa'].forEach((lang) => {
      const localized = resolved[lang];
      if (!Array.isArray(localized)) {
        addError(`${pathLabel}.${lang}`);
        return;
      }
      localized.forEach((mistake, index) => {
        if (!mistake || typeof mistake !== 'object') {
          addError(`${pathLabel}.${lang}[${index}]`);
          return;
        }
        ensureNonEmptyString(mistake.wrong, `${pathLabel}.${lang}[${index}].wrong`);
        ensureNonEmptyString(mistake.correct, `${pathLabel}.${lang}[${index}].correct`);
        ensureNonEmptyString(mistake.explanation, `${pathLabel}.${lang}[${index}].explanation`);
      });
    });
    return;
  }
  if (!Array.isArray(resolved)) {
    addError(pathLabel);
    return;
  }
  resolved.forEach((mistake, index) => {
    if (!mistake || typeof mistake !== 'object') {
      addError(`${pathLabel}[${index}]`);
      return;
    }
    ensureNonEmptyString(mistake.wrong, `${pathLabel}[${index}].wrong`);
    ensureNonEmptyString(mistake.correct, `${pathLabel}[${index}].correct`);
    ensureNonEmptyString(mistake.explanation, `${pathLabel}[${index}].explanation`);
  });
}

function ensureQuizArray(value, pathLabel) {
  const resolved = resolveLocalized(value, pathLabel);
  if (isLocalizedObject(resolved)) {
    ['en', 'fa'].forEach((lang) => {
      const localized = resolved[lang];
      if (!Array.isArray(localized)) {
        addError(`${pathLabel}.${lang}`);
        return;
      }
      localized.forEach((quiz, index) => {
        if (!quiz || typeof quiz !== 'object') {
          addError(`${pathLabel}.${lang}[${index}]`);
          return;
        }
        ensureNonEmptyString(quiz.question, `${pathLabel}.${lang}[${index}].question`);
        if (!Array.isArray(quiz.options) || quiz.options.length < 2) {
          addError(`${pathLabel}.${lang}[${index}].options`);
        } else {
          quiz.options.forEach((option, optionIndex) => {
            if (typeof option !== 'string' || option.trim() === '') {
              addError(`${pathLabel}.${lang}[${index}].options[${optionIndex}]`);
            }
          });
        }
        if (!Number.isInteger(quiz.correct)) {
          addError(`${pathLabel}.${lang}[${index}].correct`);
        } else if (Array.isArray(quiz.options) && (quiz.correct < 0 || quiz.correct >= quiz.options.length)) {
          addError(`${pathLabel}.${lang}[${index}].correct`);
        }
      });
    });
    return;
  }
  if (!Array.isArray(resolved)) {
    addError(pathLabel);
    return;
  }
  resolved.forEach((quiz, index) => {
    if (!quiz || typeof quiz !== 'object') {
      addError(`${pathLabel}[${index}]`);
      return;
    }
    ensureNonEmptyString(quiz.question, `${pathLabel}[${index}].question`);
    if (!Array.isArray(quiz.options) || quiz.options.length < 2) {
      addError(`${pathLabel}[${index}].options`);
    } else {
      quiz.options.forEach((option, optionIndex) => {
        if (typeof option !== 'string' || option.trim() === '') {
          addError(`${pathLabel}[${index}].options[${optionIndex}]`);
        }
      });
    }
    if (!Number.isInteger(quiz.correct)) {
      addError(`${pathLabel}[${index}].correct`);
    } else if (Array.isArray(quiz.options) && (quiz.correct < 0 || quiz.correct >= quiz.options.length)) {
      addError(`${pathLabel}[${index}].correct`);
    }
  });
}

function validateIndex(indexData) {
  if (!Array.isArray(indexData)) {
    addError('data/topics-index.json');
    return new Map();
  }

  const ids = new Map();
  indexData.forEach((topic, index) => {
    if (!topic || typeof topic !== 'object') {
      addError(`topicsIndex[${index}]`);
      return;
    }
    ensurePlainString(topic.id, `topicsIndex[${index}].id`);
    ensureNonEmptyString(topic.title, `topicsIndex[${index}].title`);
    ensureNonEmptyString(topic.category, `topicsIndex[${index}].category`);
    ensureStringArray(topic.tags, `topicsIndex[${index}].tags`);
    if (!Number.isInteger(topic.level)) {
      addError(`topicsIndex[${index}].level`);
    } else if (topic.level < 0 || topic.level > 6) {
      addError(`topicsIndex[${index}].level`);
    }
    if (topic.order !== undefined && !Number.isInteger(topic.order)) {
      addError(`topicsIndex[${index}].order`);
    }

    if (topic.id) {
      if (ids.has(topic.id)) {
        addError(`topicsIndex[${index}].id`);
      } else {
        ids.set(topic.id, topic);
      }
    }
  });

  return ids;
}

function validateTopic(topic, index, level, indexById) {
  const topicPath = `levels/level-${level}[${index}]`;
  if (!topic || typeof topic !== 'object') {
    addError(topicPath);
    return;
  }

  ensurePlainString(topic.id, `${topicPath}.id`);
  if (topic.id && !indexById.has(topic.id)) {
    addError(`${topicPath}.id`);
  }

  if (!Number.isInteger(topic.level)) {
    addError(`${topicPath}.level`);
  } else if (topic.level !== level) {
    addError(`${topicPath}.level`);
  }

  if (!topic.sections || typeof topic.sections !== 'object') {
    addError(`${topicPath}.sections`);
    return;
  }

  const requiredSections = ['summary', 'rules', 'examples', 'commonMistakes', 'quiz'];
  requiredSections.forEach((section) => {
    if (!Object.prototype.hasOwnProperty.call(topic.sections, section)) {
      addError(`${topicPath}.sections.${section}`);
    }
  });

  ensureNonEmptyString(topic.title, `${topicPath}.title`);
  ensureNonEmptyString(topic.category, `${topicPath}.category`);
  ensureStringArray(topic.tags, `${topicPath}.tags`);
  ensureNonEmptyString(topic.sections.summary, `${topicPath}.sections.summary`);
  ensureStringArray(topic.sections.rules, `${topicPath}.sections.rules`);
  ensureStringArray(topic.sections.examples, `${topicPath}.sections.examples`);
  ensureMistakesArray(topic.sections.commonMistakes, `${topicPath}.sections.commonMistakes`);
  ensureQuizArray(topic.sections.quiz, `${topicPath}.sections.quiz`);

  const enforceStrict = topic.strict === true || (Number.isInteger(topic.level) && topic.level >= 1);
  if (enforceStrict) {
    const examples = resolveLocalized(topic.sections.examples, `${topicPath}.sections.examples`);
    const mistakes = resolveLocalized(topic.sections.commonMistakes, `${topicPath}.sections.commonMistakes`);
    const quiz = resolveLocalized(topic.sections.quiz, `${topicPath}.sections.quiz`);
    ['en', 'fa'].forEach((lang) => {
      if (isLocalizedObject(examples) && Array.isArray(examples[lang]) && examples[lang].length < 8) {
        addError(`${topicPath}.sections.examples.${lang}`);
      }
      if (isLocalizedObject(mistakes) && Array.isArray(mistakes[lang]) && mistakes[lang].length < 3) {
        addError(`${topicPath}.sections.commonMistakes.${lang}`);
      }
      if (isLocalizedObject(quiz) && Array.isArray(quiz[lang]) && quiz[lang].length < 4) {
        addError(`${topicPath}.sections.quiz.${lang}`);
      }
    });
  }
}

function readLevelFile(level) {
  const filePath = path.join(LEVELS_DIR, `level-${level}.json`);
  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(contents);
  } catch {
    addError(`data/levels/level-${level}.json`);
    return null;
  }
}

function readIndexFile() {
  try {
    const contents = fs.readFileSync(INDEX_PATH, 'utf8');
    return JSON.parse(contents);
  } catch {
    addError('data/topics-index.json');
    return null;
  }
}

const topicsIndex = readIndexFile();
const indexById = validateIndex(topicsIndex);
const seenIds = new Set();

LEVELS.forEach((level) => {
  const topics = readLevelFile(level);
  if (!Array.isArray(topics)) {
    return;
  }

  topics.forEach((topic, index) => {
    validateTopic(topic, index, level, indexById);
    if (topic && topic.id) {
      if (seenIds.has(topic.id)) {
        addError(`levels/level-${level}[${index}].id`);
      } else {
        seenIds.add(topic.id);
      }
    }
  });
});

if (Array.isArray(topicsIndex)) {
  topicsIndex.forEach((topic, index) => {
    if (topic && topic.id && !seenIds.has(topic.id)) {
      addError(`topicsIndex[${index}].id`);
    }
  });
}

console.log(`Topics checked: ${Array.isArray(topicsIndex) ? topicsIndex.length : 0}`);
console.log(`Level files checked: ${LEVELS.length}`);

if (errors.length) {
  console.log('\nErrors:');
  errors.forEach((error) => console.log(`- ${error}`));
  process.exit(1);
} else {
  console.log('\nNo errors found.');
}
