# AI Coding Agent Guide — English-Structure

Concise, actionable rules to make you productive in this repo. Focus on how this project actually works; avoid generic advice.

## Big Picture
- Static, data‑driven web app (vanilla JS + CSS) served locally via `http-server` on port 4173.
- App boot: `scripts/app.js` fetches `data/topics-index.json`, then lazily loads per‑level files in `data/levels/level-*.json` on demand.
- Navigation is hash‑based (`/#<topic-id>`). Selecting a topic updates the URL and renders detail sections.
- Bilingual UI (EN/FA) with RTL/LTR switching. All user‑visible strings should support both languages.

## Run / Test / Lint
- Dev server: `npm ci` then `npm run dev` → open http://localhost:4173
  - Do not open `index.html` with `file://` (fetch to JSON will fail).
- E2E: `npm run test:e2e` (Playwright auto‑starts the server per `playwright.config.js`).
  - Tests assert zero console/page errors; avoid introducing `console.error` in client code.
- Lint: `npm run lint` / `npm run lint:fix` (see `eslint.config.js`).

## Data Model & Files
- Index: `data/topics-index.json` contains:
  - `schemaVersion`, `levels` metadata (level, key, bilingual `label`, `file` path), and `topics` (lightweight metadata only).
  - `topics[].order` (optional) — when set, the UI uses it to sort the left list before fallback to original order.
- Full content lives in per‑level files: `data/levels/level-0.json` … `level-6.json`.
  - Topic shape (bilingual allowed): `id`, `level`, `title`, `category`, `tags`, `sections: { summary, rules[], examples[], commonMistakes[], quiz[] }`.
  - For localized fields, prefer objects like `{ en: string|[], fa: string|[] }`. The app falls back to `en` then first value.
- Level mapping: `data/level-map.json` assigns `id → level`. Unmapped topics default to `defaultLevel` (2) or inferred by keywords.

## Data Workflows
- Rebuild index + split per level: `npm run build:data` (runs `scripts/split-topics-by-level.cjs`). Generates/overwrites:
  - `data/levels/level-*.json`
  - `data/topics-index.json` and `data/topics-index.js`
- Validate content: `npm run validate:data` (strict schema checks, EN/FA presence, counts, distribution, duplicates, mapping coverage).
  - Set `topic.strict = true` to require minimum counts (examples ≥ 8, mistakes ≥ 3, quiz ≥ 4 per language).
- Apply the level map only: `npm run apply:levels` (delegates to the same splitter).

## UI / Rendering Conventions
- DOM contracts (changing these breaks tests and rendering):
  - Sidebar/list: `#searchInput`, `#categorySelect`, `#levelSelect`, `.topic-item`, `.topic-item-title`, `.topic-item-category`.
  - Detail: `#topicTitle`, `#summaryContent`, `#rulesContent`, `#examplesContent`, `#mistakesContent`, `#quizContent`.
  - Language toggle: `[data-lang="en"]`, `[data-lang="fa"]` → updates `<html lang>` and `dir`.
- Client logic highlights:
  - `loadTopicsIndex()` → inits `state.topics` and `state.levels` from index.
  - `ensureTopicLoaded(id)` → lazy‑loads that topic’s level JSON if needed.
  - Search filters across localized `title`, `tags`, `category`; category/level filters are exact‑match in the current language.
  - Topic list sort honors `topic.order` (ascending) when present.
- Safety: HTML is escaped (`escapeHtml`) and matches are highlighted via `<mark>`. When injecting markup, reuse existing render helpers.

## Testing Expectations (Playwright)
- Config: headless, `baseURL` http://localhost:4173; webServer uses `http-server` on port 4173 and reuses it locally.
- Tests depend on the selectors above and on hash routing. Keep IDs/classes stable or update tests accordingly.
- Tests fail on console or `pageerror`; prefer `console.warn` + friendly UI over throwing in the browser path.

## Common Tasks
- Add a topic:
  1) Edit `data/levels/level-<n>.json` (ensure bilingual fields) or add ID to `data/level-map.json`.
  2) `npm run build:data` then `npm run validate:data`.
  3) Run `npm run dev` and verify via `/#<topic-id>`.
- Reorder a topic in the sidebar: set `order` on that topic’s index entry (via splitter input) and rebuild.
- Change level of a topic: update `data/level-map.json` then `npm run apply:levels` (or `build:data`).

## Files To Read First
- `index.html` → element structure/IDs and accordion layout.
- `scripts/app.js` → state, i18n strings, fetch + rendering, quiz logic, localStorage for notes/mistakes.
- `scripts/split-topics-by-level.cjs` / `scripts/validate-data.cjs` → data generation/validation rules.
- `playwright.config.js` / `tests/e2e.spec.js` → server startup, critical selectors, user flows.

Gotchas: keep EN/FA values for all localized fields; don’t serve via `file://`; port changes require updating `playwright.config.js` and `package.json`.
