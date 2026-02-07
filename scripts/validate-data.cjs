const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.join(__dirname, '..');
const INDEX_PATH = path.join(ROOT_DIR, 'data', 'topics-index.json');
const LEVEL_MAP_PATH = path.join(ROOT_DIR, 'data', 'level-map.json');

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

function ensureLocalizedLabel(value, pathLabel) {
  if (!isLocalizedObject(value)) {
    addError(pathLabel);
    return;
  }
  ['en', 'fa'].forEach((lang) => {
    const localized = value[lang];
    if (typeof localized !== 'string' || localized.trim() === '') {
      addError(`${pathLabel}.${lang}`);
    }
  });
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

function collectStrings(value) {
  if (Array.isArray(value)) {
    return value.flatMap(collectStrings);
  }
  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectStrings);
  }
  if (typeof value === 'string') {
    return [value];
  }
  return [];
}

function inferLevel(topic) {
  const values = [
    ...collectStrings(topic.title),
    ...collectStrings(topic.category),
    ...collectStrings(topic.tags)
  ];
  const haystack = values.join(' ').toLowerCase();
  if (/\bfluency\b/.test(haystack) || /\bmastery\b/.test(haystack)) {
    return 6;
  }
  if (/\badvanced\b/.test(haystack)) {
    return 5;
  }
  if (/upper-?intermediate/.test(haystack)) {
    return 4;
  }
  if (/pre-?intermediate/.test(haystack)) {
    return 2;
  }
  if (/\bintermediate\b/.test(haystack)) {
    return 3;
  }
  if (/\bbeginner\b/.test(haystack)) {
    return 1;
  }
  if (/\bbasic\b/.test(haystack) || /\bbasics\b/.test(haystack) || /\bintro\b/.test(haystack) ||
      /foundations?/.test(haystack) || /absolute beginner/.test(haystack)) {
    return 0;
  }
  return null;
}

function readJsonFile(filePath, errorLabel) {
  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(contents);
  } catch {
    if (errorLabel) {
      addError(errorLabel);
    }
    return null;
  }
}

function validateIndex(indexData) {
  if (!indexData || typeof indexData !== 'object' || Array.isArray(indexData)) {
    addError('data/topics-index.json');
    return { indexById: new Map(), levelsByNumber: new Map(), topics: [], counts: null };
  }

  if (!Number.isInteger(indexData.schemaVersion)) {
    addError('topicsIndex.schemaVersion');
  }

  const levels = Array.isArray(indexData.levels) ? indexData.levels : [];
  const topics = Array.isArray(indexData.topics) ? indexData.topics : [];
  if (!Array.isArray(indexData.levels)) {
    addError('topicsIndex.levels');
  }
  if (!Array.isArray(indexData.topics)) {
    addError('topicsIndex.topics');
  }

  const levelsByNumber = new Map();
  levels.forEach((levelMeta, index) => {
    const levelPath = `topicsIndex.levels[${index}]`;
    if (!levelMeta || typeof levelMeta !== 'object') {
      addError(levelPath);
      return;
    }
    if (!Number.isInteger(levelMeta.level)) {
      addError(`${levelPath}.level`);
    } else if (levelMeta.level < 0 || levelMeta.level > 6) {
      addError(`${levelPath}.level`);
    } else if (levelsByNumber.has(levelMeta.level)) {
      addError(`${levelPath}.level`);
    } else {
      levelsByNumber.set(levelMeta.level, levelMeta);
    }
    ensurePlainString(levelMeta.key, `${levelPath}.key`);
    ensureLocalizedLabel(levelMeta.label, `${levelPath}.label`);
    if (levelMeta.description !== undefined) {
      ensureNonEmptyString(levelMeta.description, `${levelPath}.description`);
    }
    ensurePlainString(levelMeta.file, `${levelPath}.file`);
    if (typeof levelMeta.file === 'string' && levelMeta.file.trim()) {
      const resolvedPath = path.join(ROOT_DIR, levelMeta.file);
      if (!fs.existsSync(resolvedPath)) {
        addError(`${levelPath}.file`);
      }
    }
  });

  LEVELS.forEach((level) => {
    if (!levelsByNumber.has(level)) {
      addError(`topicsIndex.levels[level-${level}]`);
    }
  });

  const ids = new Map();
  topics.forEach((topic, index) => {
    const topicPath = `topicsIndex.topics[${index}]`;
    if (!topic || typeof topic !== 'object') {
      addError(topicPath);
      return;
    }
    ensurePlainString(topic.id, `${topicPath}.id`);
    ensureNonEmptyString(topic.title, `${topicPath}.title`);
    ensureNonEmptyString(topic.category, `${topicPath}.category`);
    ensureStringArray(topic.tags, `${topicPath}.tags`);
    if (!Number.isInteger(topic.level)) {
      addError(`${topicPath}.level`);
    } else if (topic.level < 0 || topic.level > 6) {
      addError(`${topicPath}.level`);
    } else if (!levelsByNumber.has(topic.level)) {
      addError(`${topicPath}.level`);
    }
    if (topic.order !== undefined && !Number.isInteger(topic.order)) {
      addError(`${topicPath}.order`);
    }

    if (topic.id) {
      if (ids.has(topic.id)) {
        addError(`${topicPath}.id`);
      } else {
        ids.set(topic.id, topic);
      }
    }
  });

  return { indexById: ids, levelsByNumber, topics, counts: indexData.counts ?? null };
}

function validateTopic(topic, index, level, indexById) {
  const topicPath = `levels/level-${level}[${index}]`;
  if (!topic || typeof topic !== 'object') {
    addError(topicPath);
    return;
  }

  ensurePlainString(topic.id, `${topicPath}.id`);
  const indexEntry = topic.id ? indexById.get(topic.id) : null;
  if (topic.id && !indexEntry) {
    addError(`${topicPath}.id`);
  }

  if (!Number.isInteger(topic.level)) {
    addError(`${topicPath}.level`);
  } else if (topic.level !== level) {
    addError(`${topicPath}.level`);
  } else if (indexEntry && indexEntry.level !== topic.level) {
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

  const enforceStrict = topic.strict === true;
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

function readLevelFile(filePath, level) {
  const resolved = path.join(ROOT_DIR, filePath);
  const data = readJsonFile(resolved, `data/levels/level-${level}.json`);
  return data;
}

function readIndexFile() {
  return readJsonFile(INDEX_PATH, 'data/topics-index.json');
}

function warnAboutUnmappedTopics(topics) {
  const mapData = readJsonFile(LEVEL_MAP_PATH);
  if (!mapData || !topics.length) {
    return;
  }

  const defaultLevel = Number.isInteger(mapData.defaultLevel) ? mapData.defaultLevel : 0;
  const levelLists = mapData.levels && typeof mapData.levels === 'object'
    ? mapData.levels
    : mapData;
  const mappedIds = new Set();
  LEVELS.forEach((level) => {
    const ids = Array.isArray(levelLists?.[level]) ? levelLists[level] : [];
    ids.forEach((id) => mappedIds.add(id));
  });

  const unmapped = topics.filter((topic) => topic?.id && !mappedIds.has(topic.id));
  const ambiguous = unmapped.filter((topic) => inferLevel(topic) === null);
  if (ambiguous.length) {
    const sample = ambiguous.slice(0, 5).map((topic) => topic.id).join(', ');
    console.warn(`Warning: ${ambiguous.length} topics are ambiguous; defaulted to level ${defaultLevel}.`);
    if (sample) {
      console.warn(`Examples: ${sample}`);
    }
  }
}

function validateLevelMap(topics) {
  const mapData = readJsonFile(LEVEL_MAP_PATH, 'data/level-map.json');
  if (!mapData || !topics.length) {
    return;
  }

  const levelLists = mapData.levels && typeof mapData.levels === 'object'
    ? mapData.levels
    : mapData;
  const mappedIds = new Set();
  const duplicates = new Set();

  LEVELS.forEach((level) => {
    const ids = Array.isArray(levelLists?.[level]) ? levelLists[level] : [];
    ids.forEach((id) => {
      if (!id) {
        return;
      }
      if (mappedIds.has(id)) {
        duplicates.add(id);
      }
      mappedIds.add(id);
    });
  });

  if (duplicates.size) {
    const sample = Array.from(duplicates).slice(0, 10).join(', ');
    addError(`levelMap.duplicates: ${sample}`);
  }

  const topicIds = new Set(topics.map((topic) => topic?.id).filter(Boolean));
  const missing = Array.from(topicIds).filter((id) => !mappedIds.has(id));
  if (missing.length) {
    const sample = missing.slice(0, 15).join(', ');
    const suffix = missing.length > 15 ? ` (+${missing.length - 15} more)` : '';
    addError(`levelMap.missingIds: ${sample}${suffix}`);
  }

  const extra = Array.from(mappedIds).filter((id) => !topicIds.has(id));
  if (extra.length) {
    const sample = extra.slice(0, 10).join(', ');
    const suffix = extra.length > 10 ? ` (+${extra.length - 10} more)` : '';
    addError(`levelMap.unknownIds: ${sample}${suffix}`);
  }
}

function validateCounts(counts, topics) {
  if (!counts || typeof counts !== 'object') {
    return;
  }
  if (!Number.isInteger(counts.total)) {
    addError('topicsIndex.counts.total');
  } else if (counts.total !== topics.length) {
    addError('topicsIndex.counts.total');
  }

  if (counts.levels && typeof counts.levels === 'object') {
    LEVELS.forEach((level) => {
      const levelCount = counts.levels[level];
      if (!Number.isInteger(levelCount)) {
        addError(`topicsIndex.counts.levels.${level}`);
        return;
      }
      const actualCount = topics.filter((topic) => topic.level === level).length;
      if (levelCount !== actualCount) {
        addError(`topicsIndex.counts.levels.${level}`);
      }
    });
  }
}

function validateDistribution(topics) {
  if (!Array.isArray(topics) || topics.length === 0) {
    return;
  }
  const total = topics.length;
  const counts = LEVELS.reduce((acc, level) => {
    acc[level] = topics.filter((topic) => topic.level === level).length;
    return acc;
  }, {});

  LEVELS.forEach((level) => {
    const levelCount = counts[level];
    if (total >= 20 && levelCount === 0) {
      addError(`topicsIndex.distribution.emptyLevel.${level}`);
    }
    if (total > 0 && levelCount / total > 0.7) {
      addError(`topicsIndex.distribution.skewedLevel.${level}`);
    }
  });
}

const topicsIndex = readIndexFile();
const { indexById, levelsByNumber, topics, counts } = validateIndex(topicsIndex);
const seenIds = new Set();

LEVELS.forEach((level) => {
  const levelMeta = levelsByNumber.get(level);
  const filePath = levelMeta?.file || path.join('data', 'levels', `level-${level}.json`);
  const levelTopics = readLevelFile(filePath, level);
  if (!Array.isArray(levelTopics)) {
    return;
  }

  levelTopics.forEach((topic, index) => {
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

topics.forEach((topic, index) => {
  if (topic && topic.id && !seenIds.has(topic.id)) {
    addError(`topicsIndex.topics[${index}].id`);
  }
});

warnAboutUnmappedTopics(topics);
validateLevelMap(topics);
validateCounts(counts, topics);
validateDistribution(topics);

console.log(`Topics checked: ${topics.length}`);
console.log(`Level files checked: ${LEVELS.length}`);

if (errors.length) {
  console.log('\nErrors:');
  errors.forEach((error) => console.log(`- ${error}`));
  process.exit(1);
} else {
  console.log('\nNo errors found.');
}
