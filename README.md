# 📚 Grammar Handbook - English Structure

An interactive, mobile-first static web application for learning English grammar. This handbook provides comprehensive grammar topics with examples, rules, common mistakes, and interactive quizzes.

## ✨ Features

- **📱 Mobile-First Responsive Design**: Works seamlessly on all devices
- **🔍 Searchable Topics**: Quick search functionality to find grammar topics
- **📂 Category Filtering**: Filter topics by grammar categories
- **🎯 Interactive Quizzes**: Test your knowledge with built-in quizzes
- **📝 Personal Notes**: Save your own notes and mistakes for each topic (stored locally)
- **🔗 Hash Routing**: Direct links to specific topics using URL fragments
- **🎨 Accordion Interface**: Clean, organized content sections:
  - Summary
  - Rules
  - Examples
  - Common Mistakes
  - Quiz
  - My Notes & Mistakes

## 🚀 Getting Started

### Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/mahdiahmadi1991/English-Structure.git
   cd English-Structure
   ```

2. Install dependencies and start the local dev server:
   ```bash
   npm ci
   npm run dev
   ```

3. Open http://localhost:4173 in your browser.

> **Important:** Do not open `index.html` via `file://` URLs. Fetch requests for JSON data are blocked by browsers without an HTTP server. Run `npm run dev` instead.

That's it! No build process or dependencies required.

### Changing the Dev Server Port

The app and tests assume port 4173. If you change it:

1. Update the dev script in [package.json](package.json): change `-p 4173`.
2. Update `use.baseURL` and `webServer.command` in [playwright.config.js](playwright.config.js).
3. Re-run tests: `npm run test:e2e`.

## 📁 Project Structure

```
English-Structure/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styling (mobile-first responsive)
├── scripts/
│   └── app.js             # Application logic (vanilla JavaScript)
├── data/
│   ├── topics-index.json  # Lightweight topics metadata + level definitions
│   └── levels/            # Full topic content split by level
└── README.md              # This file
```

## 📝 Data Structure

The app reads a lightweight index from `data/topics-index.json`, then lazily loads
full topic content from the level files in `data/levels/`.

`data/topics-index.json`:

```json
{
  "schemaVersion": 1,
  "levels": [
    {
      "level": 0,
      "key": "level-0",
      "label": { "en": "Absolute Beginner", "fa": "الفبا و پایهی جمله" },
      "file": "data/levels/level-0.json"
    }
  ],
  "topics": [
    {
      "id": "present-simple",
      "level": 0,
      "title": { "en": "Present Simple Tense", "fa": "زمان حال ساده" },
      "category": { "en": "Tenses", "fa": "زمان" },
      "tags": { "en": ["basic"], "fa": ["پایه"] }
    }
  ]
}
```

Level assignments come from `data/level-map.json`. Topics that are not explicitly
listed fall back to the `defaultLevel` (currently set to 2) or inferred keywords
when generating the index. Add `"strict": true` to a topic to enable stricter
validation requirements for examples, mistakes, and quiz counts.

Each grammar topic in the level files follows this structure:

```javascript
{
  id: 'unique-topic-id',           // Used for hash routing
  title: 'Topic Title',            // Display name
  category: 'Category Name',       // For filtering
  tags: ['tag1', 'tag2'],         // Searchable tags
  lang: 'en',                      // Language code
  sections: {
    summary: 'Brief overview...',
    rules: ['Rule 1', 'Rule 2'],
    examples: ['Example 1', 'Example 2'],
    commonMistakes: [
      {
        wrong: 'Incorrect usage',
        correct: 'Correct usage',
        explanation: 'Why it matters'
      }
    ],
    quiz: [
      {
        question: 'Fill in the blank: She ___ (go) to school.',
        options: ['go', 'goes', 'going', 'gone'],
        correct: 1,                  // Index of correct answer
        explanation: 'Explanation of the answer'
      }
    ]
  }
}
```

### Data Schema (concise)

- Localized fields can be plain values or bilingual objects `{ en: ..., fa: ... }`.
- Localized fields: `levels[].label`, `topics[].title`, `topics[].category`, `topics[].tags`, and `sections.*`.

Example (bilingual):

```json
{
  "id": "present-simple",
  "level": 1,
  "title": { "en": "Present Simple", "fa": "حال ساده" },
  "category": { "en": "Tenses", "fa": "زمان" },
  "tags": { "en": ["basic"], "fa": ["پایه"] },
  "sections": {
    "summary": { "en": "Use for routines.", "fa": "برای عادات." },
    "rules": { "en": ["Add -s for he/she/it"], "fa": ["افزودن -s برای سوم‌شخص"] },
    "examples": { "en": ["She walks."], "fa": ["او راه می‌رود."] },
    "commonMistakes": {
      "en": [{ "wrong": "She walk.", "correct": "She walks.", "explanation": "Third person -s" }],
      "fa": [{ "wrong": "She walk.", "correct": "She walks.", "explanation": "-s سوم‌شخص" }]
    },
    "quiz": {
      "en": [{ "question": "He __ (work)", "options": ["work","works"], "correct": 1, "explanation": "-s" }],
      "fa": [{ "question": "He __ (work)", "options": ["work","works"], "correct": 1, "explanation": "-s" }]
    }
  }
}
```

Notes (FA/EN): Provide both `en` and `fa` where applicable; the validator enforces presence and counts. برای فیلدهای قابل‌محلی‌سازی، هر دو زبان `en` و `fa` را وارد کنید.

## 🎨 Customization

### Adding New Topics

1. Add or update a topic in the appropriate `data/topics/level-*.json` file.
  - Alternatively, add the topic `id` to `data/level-map.json` under a level to remap.
2. Rebuild data (splits per-level files and refreshes index):

  ```bash
  npm run build:data
  ```

3. Validate content (schema, EN/FA, counts, mapping coverage):

  ```bash
  npm run validate:data
  ```

4. Start dev server and verify topic via hash route:

  ```bash
  npm run dev
  # open http://localhost:4173/#<topic-id>
  ```

5. (Optional) Run end‑to‑end tests:

  ```bash
  npm run test:e2e
  ```

### Styling

All styles are in `styles/main.css`. The CSS uses:
- CSS variables for easy theming (see `:root` section)
- Mobile-first responsive design
- Flexbox for layouts
- Smooth transitions and animations

### Colors

Update the color scheme by modifying CSS variables in `styles/main.css`:

```css
:root {
  --primary-color: #2563eb;       /* Main brand color */
  --primary-hover: #1d4ed8;       /* Hover state */
  --secondary-color: #10b981;     /* Success/accent color */
  /* ... more variables */
}
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox, CSS Grid, and CSS Variables
- **Vanilla JavaScript**: No frameworks or libraries
- **LocalStorage API**: For saving user notes
- **Hash Routing**: For direct topic linking

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- Hamburger menu for topic navigation
- Touch-friendly interface
- Optimized for small screens
- Fast and lightweight (no dependencies)

## 💾 Data Persistence

User notes and mistakes are saved using the browser's LocalStorage:
- Data persists across browser sessions
- Stored locally (no server required)
- Organized by topic ID
- Can be cleared through browser settings

## 🚫 No Build Process

This is a static web application with:
- ✅ No bundling
- ✅ No transpilation
- ✅ No server-side runtime

Use `npm run dev` for a local static server (required for browser fetch), then open the app in your browser.

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! To add grammar topics or improve data/UI:

1. Fork the repository and create a feature branch.
2. Edit topics in `data/topics/level-*.json` (or update `data/level-map.json` to move levels).
3. Rebuild and validate data:

  ```bash
  npm run build:data
  npm run validate:data
  ```

4. Run locally and verify (EN/FA, filters, routing):

  ```bash
  npm run dev
  # open http://localhost:4173/#<topic-id>
  ```

5. (Optional) Run end‑to‑end tests:

  ```bash
  npm run test:e2e
  ```

6. Submit a pull request with a clear description of changes.

### Lightweight Pre‑Commit Check (optional)

You can wire a local Git hook to run validation and lint before commits.

1. Ensure a combined check script exists (see `package.json` → `scripts.check`).
2. Create `.git/hooks/pre-commit` and make it executable with:

```sh
#!/usr/bin/env sh
npm run check || exit 1
```

This runs data validation and linting on each commit. برای جلوگیری از خطاها، می‌توانید این قلاب را فعال کنید.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Happy Learning! 🎓**
