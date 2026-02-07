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

2. Serve it with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Open http://localhost:8000 in your browser.

> **Important:** Do not open `index.html` via `file://` URLs. Fetch requests for JSON data are blocked by browsers without an HTTP server.

That's it! No build process or dependencies required.

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
      "label": { "en": "Absolute Beginner (Foundations)", "fa": "مقدماتی مطلق (پایهها)" },
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
listed fall back to the `defaultLevel` (currently set to 1) or inferred keywords
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

## 🎨 Customization

### Adding New Topics

1. Add or update a topic in the appropriate `data/levels/level-*.json` file.
2. Run `node scripts/split-topics-by-level.cjs` to refresh `data/topics-index.json`.
3. Refresh the page to see your changes.

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
- ✅ No npm packages
- ✅ No build tools
- ✅ No transpilation
- ✅ No bundling

Just open `index.html` and start learning!

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! To add grammar topics:

1. Fork the repository
2. Add your topics to `data/grammar-topics.js`
3. Test thoroughly
4. Submit a pull request

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Happy Learning! 🎓**
