const fs = require('fs');
const path = require('path');

const LEVELS = [0, 1, 2, 3, 4, 5, 6];
const ROOT_DIR = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const SOURCE_TOPICS_DIR = path.join(DATA_DIR, 'topics');
const SOURCE_LEVELS_DIR = path.join(DATA_DIR, 'levels');
const LEVELS_DIR = path.join(DATA_DIR, 'levels');
const LEGACY_TOPICS_DIR = path.join(DATA_DIR, 'topics');
const INDEX_PATH = path.join(DATA_DIR, 'topics-index.json');
const INDEX_JS_PATH = path.join(DATA_DIR, 'topics-index.js');
const LEVEL_MAP_PATH = path.join(DATA_DIR, 'level-map.json');

const LEVEL_METADATA = [
  {
    level: 0,
    key: 'level-0',
    label: { en: 'Absolute Beginner (Foundations)', fa: 'مقدماتی مطلق (پایهها)' },
    file: 'data/levels/level-0.json'
  },
  {
    level: 1,
    key: 'level-1',
    label: { en: 'Beginner', fa: 'مبتدی' },
    file: 'data/levels/level-1.json'
  },
  {
    level: 2,
    key: 'level-2',
    label: { en: 'Pre-Intermediate', fa: 'پیشمتوسط' },
    file: 'data/levels/level-2.json'
  },
  {
    level: 3,
    key: 'level-3',
    label: { en: 'Intermediate', fa: 'متوسط' },
    file: 'data/levels/level-3.json'
  },
  {
    level: 4,
    key: 'level-4',
    label: { en: 'Upper-Intermediate', fa: 'بالاتر از متوسط' },
    file: 'data/levels/level-4.json'
  },
  {
    level: 5,
    key: 'level-5',
    label: { en: 'Advanced', fa: 'پیشرفته' },
    file: 'data/levels/level-5.json'
  },
  {
    level: 6,
    key: 'level-6',
    label: { en: 'Fluency-Oriented Mastery', fa: 'تسلط کاربردی' },
    file: 'data/levels/level-6.json'
  }
];

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

function readJson(filePath, fallback) {
  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(contents);
  } catch (error) {
    if (fallback !== undefined) {
      return fallback;
    }
    throw error;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function normalizeLevel(level) {
  if (!Number.isInteger(level)) {
    return null;
  }
  if (level < 0 || level > 6) {
    return null;
  }
  return level;
}

function buildLevelMap(mapData) {
  const defaultLevel = normalizeLevel(mapData?.defaultLevel) ?? 0;
  const levelLists = mapData?.levels && typeof mapData.levels === 'object'
    ? mapData.levels
    : mapData;
  const idToLevel = new Map();
  const duplicates = new Set();

  LEVELS.forEach((level) => {
    const ids = Array.isArray(levelLists?.[level]) ? levelLists[level] : [];
    ids.forEach((id) => {
      if (!id) {
        return;
      }
      if (idToLevel.has(id)) {
        duplicates.add(id);
      }
      idToLevel.set(id, level);
    });
  });

  return { idToLevel, defaultLevel, duplicates };
}

function collectTopics(sourceDir) {
  const topics = [];
  const topicsById = new Map();

  LEVELS.forEach((level) => {
    const filePath = path.join(sourceDir, `level-${level}.json`);
    if (!fs.existsSync(filePath)) {
      return;
    }
    const data = readJson(filePath, []);
    if (!Array.isArray(data)) {
      return;
    }
    data.forEach((topic) => {
      if (!topic || typeof topic !== 'object' || !topic.id) {
        return;
      }
      if (topicsById.has(topic.id)) {
        return;
      }
      topicsById.set(topic.id, topic);
      topics.push(topic);
    });
  });

  return topics;
}

function buildIndexTopics(topics) {
  return topics.map((topic) => {
    const entry = {
      id: topic.id,
      level: topic.level,
      title: topic.title,
      category: topic.category,
      tags: topic.tags
    };

    if (Number.isInteger(topic.order)) {
      entry.order = topic.order;
    }

    return entry;
  });
}

function summarizeCounts(levelBuckets) {
  const counts = {
    total: 0,
    levels: {}
  };

  LEVELS.forEach((level) => {
    const bucket = levelBuckets[level] || [];
    counts.levels[level] = bucket.length;
    counts.total += bucket.length;
  });

  return counts;
}

function splitTopicsByLevel() {
  const sourceDir = fs.existsSync(SOURCE_TOPICS_DIR) ? SOURCE_TOPICS_DIR : SOURCE_LEVELS_DIR;
  const mapData = readJson(LEVEL_MAP_PATH, {});
  const { idToLevel, defaultLevel, duplicates } = buildLevelMap(mapData);

  const topics = collectTopics(sourceDir);
  const levelBuckets = LEVELS.reduce((acc, level) => {
    acc[level] = [];
    return acc;
  }, {});

  const ambiguous = [];
  topics.forEach((topic) => {
    const mappedLevel = idToLevel.get(topic.id);
    const inferredLevel = inferLevel(topic);
    const existingLevel = normalizeLevel(topic.level);
    const fallbackLevel = existingLevel === 0 ? null : existingLevel;
    const nextLevel = normalizeLevel(mappedLevel) ??
      normalizeLevel(inferredLevel) ??
      fallbackLevel ??
      defaultLevel;
    if (mappedLevel === undefined && inferredLevel === null && fallbackLevel === null) {
      ambiguous.push(topic.id);
    }
    topic.level = nextLevel;
    levelBuckets[nextLevel].push(topic);
  });

  const counts = summarizeCounts(levelBuckets);
  const indexTopics = buildIndexTopics(topics);
  const indexData = {
    schemaVersion: 1,
    levels: LEVEL_METADATA,
    topics: indexTopics,
    counts
  };

  if (!fs.existsSync(LEVELS_DIR)) {
    fs.mkdirSync(LEVELS_DIR, { recursive: true });
  }
  LEVELS.forEach((level) => {
    const filePath = path.join(LEVELS_DIR, `level-${level}.json`);
    writeJson(filePath, levelBuckets[level]);
  });

  if (fs.existsSync(LEGACY_TOPICS_DIR)) {
    LEVELS.forEach((level) => {
      const filePath = path.join(LEGACY_TOPICS_DIR, `level-${level}.json`);
      writeJson(filePath, levelBuckets[level]);
    });
  }

  writeJson(INDEX_PATH, indexData);
  const indexJsContents = `const topicsIndex = ${JSON.stringify(indexData, null, 2)};\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = { topicsIndex };\n}\n`;
  fs.writeFileSync(INDEX_JS_PATH, indexJsContents);

  console.log(`Topics processed: ${indexTopics.length}`);
  LEVELS.forEach((level) => {
    console.log(`Level ${level}: ${counts.levels[level]} topics`);
  });

  if (duplicates.size) {
    console.warn(`Duplicate level assignments found for: ${Array.from(duplicates).join(', ')}`);
  }
  if (ambiguous.length) {
    console.warn(`Warning: ${ambiguous.length} topics ambiguous; defaulted to level ${defaultLevel}.`);
  }
}

if (require.main === module) {
  splitTopicsByLevel();
}

module.exports = { splitTopicsByLevel };
