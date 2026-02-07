const fs = require('fs');
const path = require('path');

const LEVELS = [0, 1, 2, 3, 4, 5, 6];
const ROOT_DIR = path.join(__dirname, '..');
const MAP_PATH = path.join(ROOT_DIR, 'data', 'level-map.json');
const LEVELS_DIR = path.join(ROOT_DIR, 'data', 'levels');
const LEGACY_TOPICS_DIR = path.join(ROOT_DIR, 'data', 'topics');
const INDEX_PATH = path.join(ROOT_DIR, 'data', 'topics-index.json');
const INDEX_JS_PATH = path.join(ROOT_DIR, 'data', 'topics-index.js');

function readJson(filePath, fallback) {
  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(contents);
  } catch (error) {
    console.warn(`Failed to read ${filePath}: ${error.message}`);
    return fallback;
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

const mapData = readJson(MAP_PATH, null);
if (!mapData) {
  process.exit(1);
}

const defaultLevel = normalizeLevel(mapData.defaultLevel) ?? 0;
const levelLists = mapData.levels && typeof mapData.levels === 'object'
  ? mapData.levels
  : mapData;

const idToLevel = new Map();
LEVELS.forEach((level) => {
  const ids = Array.isArray(levelLists?.[level]) ? levelLists[level] : [];
  ids.forEach((id) => {
    if (!id) {
      return;
    }
    if (idToLevel.has(id)) {
      console.warn(`Duplicate level mapping for ${id}; using level ${level}.`);
    }
    idToLevel.set(id, level);
  });
});

const sourceDir = fs.existsSync(LEVELS_DIR) ? LEVELS_DIR : LEGACY_TOPICS_DIR;
const targetDirs = [LEVELS_DIR, LEGACY_TOPICS_DIR];
targetDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const topics = [];
const topicsById = new Map();
LEVELS.forEach((level) => {
  const filePath = path.join(sourceDir, `level-${level}.json`);
  if (!fs.existsSync(filePath)) {
    return;
  }
  const data = readJson(filePath, []);
  if (!Array.isArray(data)) {
    console.warn(`Expected array in ${filePath}.`);
    return;
  }
  data.forEach((topic) => {
    if (!topic || typeof topic !== 'object') {
      return;
    }
    if (!topic.id) {
      return;
    }
    if (topicsById.has(topic.id)) {
      console.warn(`Duplicate topic id across levels: ${topic.id}`);
      return;
    }
    topicsById.set(topic.id, topic);
    topics.push(topic);
  });
});

const levelBuckets = LEVELS.reduce((acc, level) => {
  acc[level] = [];
  return acc;
}, {});

const indexEntries = topics.map((topic) => {
  const mappedLevel = idToLevel.get(topic.id);
  const nextLevel = normalizeLevel(mappedLevel) ?? defaultLevel;
  if (mappedLevel === undefined) {
    console.warn(`Missing level mapping for ${topic.id}; defaulting to ${nextLevel}.`);
  }
  if (topic.level !== nextLevel) {
    topic.level = nextLevel;
  }
  levelBuckets[nextLevel].push(topic);

  const entry = {
    id: topic.id,
    title: topic.title,
    category: topic.category,
    tags: topic.tags,
    level: topic.level
  };

  if (Number.isInteger(topic.order)) {
    entry.order = topic.order;
  }

  return entry;
});

LEVELS.forEach((level) => {
  targetDirs.forEach((dir) => {
    const filePath = path.join(dir, `level-${level}.json`);
    writeJson(filePath, levelBuckets[level]);
  });
});

writeJson(INDEX_PATH, indexEntries);

const indexJsContents = `const topicsIndex = ${JSON.stringify(indexEntries, null, 2)};\n\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = { topicsIndex };\n}\n`;
fs.writeFileSync(INDEX_JS_PATH, indexJsContents);

console.log('Level mapping applied.');
