// Grammar Handbook App - Main JavaScript
(function() {
  'use strict';

  // ===========================
  // State Management
  // ===========================
  const state = {
    topics: grammarTopics || [],
    currentTopicId: null,
    filteredTopics: [],
    searchQuery: '',
    selectedCategory: '',
    currentLang: 'en'
  };

  const LANG_STORAGE_KEY = 'ep_lang';

  const uiStrings = {
    en: {
      appTitle: '📚 Grammar Handbook',
      appSubtitle: 'Your Interactive English Grammar Guide',
      searchPlaceholder: '🔍 Search topics...',
      searchAriaLabel: 'Search grammar topics',
      filterLabel: 'Filter by category:',
      allCategories: 'All Categories',
      emptyTitle: 'Welcome to Grammar Handbook! 👋',
      emptySubtitle: 'Select a topic from the list to start learning.',
      sectionSummary: 'Summary',
      sectionRules: 'Rules',
      sectionExamples: 'Examples',
      sectionMistakes: 'Common Mistakes',
      sectionQuiz: 'Quiz',
      sectionNotes: 'My Notes & Mistakes',
      notesTitle: 'Personal Notes',
      notesPlaceholder: 'Write your notes here...',
      saveNotes: '💾 Save Notes',
      mistakesTitle: 'My Mistakes Log',
      mistakesPlaceholder: 'Track mistakes you\'ve made with this topic...',
      saveMistakes: '💾 Save Mistakes',
      notesInfo: '💡 Your notes are saved locally in your browser',
      noTopics: 'No topics found',
      footerText: '© 2026 Grammar Handbook. Built with ❤️ for English learners.',
      quizCheckAnswer: 'Check Answer',
      quizCorrect: '✅ Correct!',
      quizTryAgain: '❌ Try Again Next Time',
      selectAnswerAlert: 'Please select an answer first!',
      notesSaved: 'Notes saved successfully! 💾',
      mistakesSaved: 'Mistakes log saved successfully! 💾',
      mistakesWrongLabel: 'Wrong',
      mistakesCorrectLabel: 'Correct'
    },
    fa: {
      appTitle: '📚 دفترچه دستور زبان',
      appSubtitle: 'راهنمای تعاملی دستور زبان انگلیسی',
      searchPlaceholder: '🔍 جستجوی موضوعات...',
      searchAriaLabel: 'جستجوی موضوعات دستور زبان',
      filterLabel: 'فیلتر بر اساس دسته‌بندی:',
      allCategories: 'همه دسته‌بندی‌ها',
      emptyTitle: 'به دفترچه دستور زبان خوش آمدید! 👋',
      emptySubtitle: 'برای شروع یادگیری یک موضوع را انتخاب کنید.',
      sectionSummary: 'خلاصه',
      sectionRules: 'قوانین',
      sectionExamples: 'مثال‌ها',
      sectionMistakes: 'اشتباهات رایج',
      sectionQuiz: 'آزمون',
      sectionNotes: 'یادداشت‌ها و اشتباهات من',
      notesTitle: 'یادداشت‌های شخصی',
      notesPlaceholder: 'یادداشت‌های خود را اینجا بنویسید...',
      saveNotes: '💾 ذخیره یادداشت‌ها',
      mistakesTitle: 'ثبت اشتباهات من',
      mistakesPlaceholder: 'اشتباهاتی که در این موضوع داشته‌اید را ثبت کنید...',
      saveMistakes: '💾 ذخیره اشتباهات',
      notesInfo: '💡 یادداشت‌های شما به صورت محلی در مرورگر ذخیره می‌شوند',
      noTopics: 'هیچ موضوعی یافت نشد',
      footerText: '© 2026 دفترچه دستور زبان. ساخته شده با ❤️ برای زبان‌آموزان انگلیسی.',
      quizCheckAnswer: 'بررسی پاسخ',
      quizCorrect: '✅ درست!',
      quizTryAgain: '❌ دفعه بعد دوباره تلاش کنید',
      selectAnswerAlert: 'لطفاً ابتدا یک پاسخ انتخاب کنید!',
      notesSaved: 'یادداشت‌ها با موفقیت ذخیره شد! 💾',
      mistakesSaved: 'ثبت اشتباهات با موفقیت ذخیره شد! 💾',
      mistakesWrongLabel: 'اشتباه',
      mistakesCorrectLabel: 'درست'
    }
  };

  function t(value, lang, fallback = 'en') {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (value[lang] !== undefined) {
        return value[lang];
      }
      if (value[fallback] !== undefined) {
        return value[fallback];
      }
      const firstValue = Object.values(value)[0];
      return firstValue !== undefined ? firstValue : '';
    }

    return value !== undefined && value !== null ? value : '';
  }

  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (value === undefined || value === null || value === '') {
      return [];
    }
    return [value];
  }

  function getUiString(key) {
    const langStrings = uiStrings[state.currentLang] || uiStrings.en;
    return (langStrings && langStrings[key]) || uiStrings.en[key] || '';
  }

  function collectSearchStrings(value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return Object.values(value).flatMap(collectSearchStrings);
    }

    if (Array.isArray(value)) {
      return value.flatMap(collectSearchStrings);
    }

    if (typeof value === 'string') {
      return [value];
    }

    return [];
  }

  // ===========================
  // DOM Elements
  // ===========================
  const elements = {
    searchInput: document.getElementById('searchInput'),
    categorySelect: document.getElementById('categorySelect'),
    topicsList: document.getElementById('topicsList'),
    topicDetail: document.getElementById('topicDetail'),
    topicContent: document.getElementById('topicContent'),
    topicTitle: document.getElementById('topicTitle'),
    topicCategory: document.getElementById('topicCategory'),
    topicTags: document.getElementById('topicTags'),
    summaryContent: document.getElementById('summaryContent'),
    rulesContent: document.getElementById('rulesContent'),
    examplesContent: document.getElementById('examplesContent'),
    mistakesContent: document.getElementById('mistakesContent'),
    quizContent: document.getElementById('quizContent'),
    notesTextarea: document.getElementById('notesTextarea'),
    mistakesTextarea: document.getElementById('mistakesTextarea'),
    saveNotesBtn: document.getElementById('saveNotesBtn'),
    saveMistakesBtn: document.getElementById('saveMistakesBtn'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    sidebar: document.getElementById('sidebar'),
    langButtons: document.querySelectorAll('[data-lang]'),
    appTitle: document.getElementById('appTitle'),
    appSubtitle: document.getElementById('appSubtitle'),
    categoryFilterLabel: document.getElementById('categoryFilterLabel'),
    emptyStateTitle: document.getElementById('emptyStateTitle'),
    emptyStateSubtitle: document.getElementById('emptyStateSubtitle'),
    sectionSummaryLabel: document.getElementById('sectionSummaryLabel'),
    sectionRulesLabel: document.getElementById('sectionRulesLabel'),
    sectionExamplesLabel: document.getElementById('sectionExamplesLabel'),
    sectionMistakesLabel: document.getElementById('sectionMistakesLabel'),
    sectionQuizLabel: document.getElementById('sectionQuizLabel'),
    sectionNotesLabel: document.getElementById('sectionNotesLabel'),
    notesTitle: document.getElementById('notesTitle'),
    mistakesTitle: document.getElementById('mistakesTitle'),
    notesInfo: document.getElementById('notesInfo'),
    appFooter: document.getElementById('appFooter')
  };

  // ===========================
  // Initialization
  // ===========================
  function init() {
    state.currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
    document.documentElement.lang = state.currentLang;
    document.documentElement.dir = state.currentLang === 'fa' ? 'rtl' : 'ltr';
    updateLangToggle();
    validateTopics();
    applyTranslations();
    populateCategories();
    renderTopicsList();
    attachEventListeners();
    handleHashRouting();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashRouting);
  }

  // ===========================
  // Category Management
  // ===========================
  function populateCategories() {
    elements.categorySelect.innerHTML = '';
    const allOption = document.createElement('option');
    allOption.value = '';
    allOption.textContent = getUiString('allCategories');
    elements.categorySelect.appendChild(allOption);

    const categories = [...new Set(state.topics
      .map(topic => t(topic.category, state.currentLang))
      .filter(Boolean))];

    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      elements.categorySelect.appendChild(option);
    });
  }

  // ===========================
  // Topics List Rendering
  // ===========================
  function renderTopicsList() {
    // Filter topics based on search and category
    state.filteredTopics = state.topics.filter(topic => {
      const searchPool = [
        ...collectSearchStrings(topic.title),
        ...collectSearchStrings(topic.tags),
        ...collectSearchStrings(topic.category)
      ];
      const query = state.searchQuery.toLowerCase();
      const matchesSearch = !state.searchQuery ||
        searchPool.some(value => value.toLowerCase().includes(query));

      const matchesCategory = !state.selectedCategory ||
        t(topic.category, state.currentLang) === state.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Render filtered topics
    elements.topicsList.innerHTML = '';
    
    if (state.filteredTopics.length === 0) {
      elements.topicsList.innerHTML = `<div style="padding: 1rem; text-align: center; color: #64748b;">${getUiString('noTopics')}</div>`;
      return;
    }

    state.filteredTopics.forEach(topic => {
      const topicItem = document.createElement('a');
      const topicTitle = t(topic.title, state.currentLang);
      const topicCategory = t(topic.category, state.currentLang);
      topicItem.href = `#${topic.id}`;
      topicItem.className = 'topic-item';
      topicItem.dataset.topicId = topic.id;
      
      if (topic.id === state.currentTopicId) {
        topicItem.classList.add('active');
      }
      
      topicItem.innerHTML = `
        <div class="topic-item-title">${topicTitle}</div>
        <div class="topic-item-category">${topicCategory}</div>
      `;
      
      elements.topicsList.appendChild(topicItem);
    });
  }

  // ===========================
  // Topic Detail Rendering
  // ===========================
  function renderTopicDetail(topicId) {
    const topic = state.topics.find(t => t.id === topicId);
    
    if (!topic) {
      showEmptyState();
      return;
    }

    state.currentTopicId = topicId;
    
    // Update active state in list
    document.querySelectorAll('.topic-item').forEach(item => {
      item.classList.toggle('active', item.dataset.topicId === topicId);
    });

    // Show content, hide empty state
    document.querySelector('.empty-state').style.display = 'none';
    elements.topicContent.style.display = 'block';

    // Populate header
    const currentLang = state.currentLang;
    elements.topicTitle.textContent = t(topic.title, currentLang);
    elements.topicCategory.textContent = t(topic.category, currentLang);
    
    // Populate tags
    const topicTags = toArray(t(topic.tags, currentLang));
    elements.topicTags.innerHTML = topicTags
      .map(tag => `<span class="tag">#${tag}</span>`)
      .join('');

    // Populate sections
    const sections = topic.sections || {};
    elements.summaryContent.textContent = t(sections.summary, currentLang);
    
    elements.rulesContent.innerHTML = toArray(t(sections.rules, currentLang))
      .map(rule => `<li>${rule}</li>`)
      .join('');
    
    elements.examplesContent.innerHTML = toArray(t(sections.examples, currentLang))
      .map(example => `<li>${example}</li>`)
      .join('');
    
    renderMistakes(toArray(t(sections.commonMistakes, currentLang)), currentLang);
    renderQuiz(toArray(t(sections.quiz, currentLang)), currentLang);
    loadUserNotes(topicId);

    // Close mobile menu after selection
    if (window.innerWidth < 768) {
      elements.sidebar.classList.remove('active');
    }

    // Scroll to top
    elements.topicDetail.scrollTop = 0;
  }

  // ===========================
  // Mistakes Rendering
  // ===========================
  function renderMistakes(mistakes, currentLang) {
    const wrongLabel = getUiString('mistakesWrongLabel');
    const correctLabel = getUiString('mistakesCorrectLabel');
    elements.mistakesContent.innerHTML = mistakes
      .filter(mistake => mistake && typeof mistake === 'object')
      .map(mistake => `
        <div class="mistake-item">
          <span class="mistake-wrong">❌ ${wrongLabel}: ${t(mistake.wrong, currentLang)}</span>
          <span class="mistake-correct">✅ ${correctLabel}: ${t(mistake.correct, currentLang)}</span>
          <p class="mistake-explanation">💡 ${t(mistake.explanation, currentLang)}</p>
        </div>
      `)
      .join('');
  }

  // ===========================
  // Quiz Rendering
  // ===========================
  function renderQuiz(quizQuestions, currentLang) {
    const quizCheckAnswerLabel = getUiString('quizCheckAnswer');
    elements.quizContent.innerHTML = quizQuestions
      .filter(question => question && typeof question === 'object')
      .map((q, index) => `
        <div class="quiz-question" data-question-index="${index}">
          <div class="quiz-question-text">Q${index + 1}: ${t(q.question, currentLang)}</div>
          <div class="quiz-options">
            ${toArray(t(q.options, currentLang)).map((option, optIndex) => `
              <div class="quiz-option" data-option-index="${optIndex}">
                ${String.fromCharCode(65 + optIndex)}. ${option}
              </div>
            `).join('')}
          </div>
          <button class="btn btn-primary quiz-submit" data-question-index="${index}">
            ${quizCheckAnswerLabel}
          </button>
          <div class="quiz-explanation">
            ${t(q.explanation, currentLang)}
          </div>
        </div>
      `)
      .join('');

    // Attach quiz event listeners
    attachQuizListeners();
  }

  // ===========================
  // Quiz Interaction
  // ===========================
  function attachQuizListeners() {
    const quizQuestions = elements.quizContent.querySelectorAll('.quiz-question');
    
    quizQuestions.forEach(questionEl => {
      const options = questionEl.querySelectorAll('.quiz-option');
      const submitBtn = questionEl.querySelector('.quiz-submit');
      const explanation = questionEl.querySelector('.quiz-explanation');
      const questionIndex = parseInt(questionEl.dataset.questionIndex);
      const topic = state.topics.find(t => t.id === state.currentTopicId);
      const quizData = toArray(t((topic.sections || {}).quiz, state.currentLang))[questionIndex];

      if (!quizData) {
        return;
      }
      
      let selectedOption = null;

      options.forEach(option => {
        option.addEventListener('click', () => {
          options.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
          selectedOption = parseInt(option.dataset.optionIndex);
        });
      });

      submitBtn.addEventListener('click', () => {
        if (selectedOption === null) {
          alert(getUiString('selectAnswerAlert'));
          return;
        }

        options.forEach((option, index) => {
          option.style.pointerEvents = 'none';
          if (index === quizData.correct) {
            option.classList.add('correct');
          } else if (index === selectedOption && selectedOption !== quizData.correct) {
            option.classList.add('incorrect');
          }
        });

        explanation.classList.add('show');
        submitBtn.disabled = true;
        submitBtn.textContent = selectedOption === quizData.correct
          ? getUiString('quizCorrect')
          : getUiString('quizTryAgain');
      });
    });
  }

  // ===========================
  // Local Storage - Notes
  // ===========================
  function loadUserNotes(topicId) {
    const notes = localStorage.getItem(`notes-${topicId}`) || '';
    const mistakes = localStorage.getItem(`mistakes-${topicId}`) || '';
    
    elements.notesTextarea.value = notes;
    elements.mistakesTextarea.value = mistakes;
  }

  function saveUserNotes(topicId) {
    const notes = elements.notesTextarea.value;
    localStorage.setItem(`notes-${topicId}`, notes);
    showNotification(getUiString('notesSaved'));
  }

  function saveUserMistakes(topicId) {
    const mistakes = elements.mistakesTextarea.value;
    localStorage.setItem(`mistakes-${topicId}`, mistakes);
    showNotification(getUiString('mistakesSaved'));
  }

  function showNotification(message) {
    const notification = document.createElement('div');
    const isRtl = document.documentElement.dir === 'rtl';
    notification.setAttribute('data-testid', 'toast');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      ${isRtl ? 'left: 20px;' : 'right: 20px;'}
      background: #10b981;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // ===========================
  // Accordion Functionality
  // ===========================
  function setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        
        // Toggle current accordion
        header.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('active');
        
        // Update toggle icon
        const toggle = header.querySelector('.accordion-toggle');
        toggle.textContent = isExpanded ? '+' : '−';
      });
    });
  }

  // ===========================
  // Hash Routing
  // ===========================
  function handleHashRouting() {
    const hash = window.location.hash.slice(1); // Remove #
    
    if (hash) {
      renderTopicDetail(hash);
    } else if (state.topics.length > 0) {
      // Default to first topic if no hash
      const firstTopicId = state.topics[0].id;
      window.location.hash = firstTopicId;
    }
  }

  // ===========================
  // Event Listeners
  // ===========================
  function attachEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderTopicsList();
    });

    // Category filter
    elements.categorySelect.addEventListener('change', (e) => {
      state.selectedCategory = e.target.value;
      renderTopicsList();
    });

    // Language toggle
    elements.langButtons.forEach(button => {
      button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
      });
    });

    // Save notes buttons
    elements.saveNotesBtn.addEventListener('click', () => {
      if (state.currentTopicId) {
        saveUserNotes(state.currentTopicId);
      }
    });

    elements.saveMistakesBtn.addEventListener('click', () => {
      if (state.currentTopicId) {
        saveUserMistakes(state.currentTopicId);
      }
    });

    // Mobile menu toggle
    elements.mobileMenuToggle.addEventListener('click', () => {
      elements.sidebar.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        if (!elements.sidebar.contains(e.target) && 
            !elements.mobileMenuToggle.contains(e.target) &&
            elements.sidebar.classList.contains('active')) {
          elements.sidebar.classList.remove('active');
        }
      }
    });

    // Accordion setup
    setupAccordion();
  }

  function setLanguage(lang) {
    if (!lang || lang === state.currentLang) {
      return;
    }

    state.currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    state.selectedCategory = '';
    elements.categorySelect.value = '';
    applyTranslations();
    populateCategories();
    renderTopicsList();

    if (state.currentTopicId) {
      renderTopicDetail(state.currentTopicId);
    }

    updateLangToggle();
  }

  function updateLangToggle() {
    elements.langButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.lang === state.currentLang);
    });
  }

  function applyTranslations() {
    elements.appTitle.textContent = getUiString('appTitle');
    elements.appSubtitle.textContent = getUiString('appSubtitle');
    elements.searchInput.placeholder = getUiString('searchPlaceholder');
    elements.searchInput.setAttribute('aria-label', getUiString('searchAriaLabel'));
    elements.categoryFilterLabel.textContent = getUiString('filterLabel');
    elements.emptyStateTitle.textContent = getUiString('emptyTitle');
    elements.emptyStateSubtitle.textContent = getUiString('emptySubtitle');
    elements.sectionSummaryLabel.textContent = getUiString('sectionSummary');
    elements.sectionRulesLabel.textContent = getUiString('sectionRules');
    elements.sectionExamplesLabel.textContent = getUiString('sectionExamples');
    elements.sectionMistakesLabel.textContent = getUiString('sectionMistakes');
    elements.sectionQuizLabel.textContent = getUiString('sectionQuiz');
    elements.sectionNotesLabel.textContent = getUiString('sectionNotes');
    elements.notesTitle.textContent = getUiString('notesTitle');
    elements.notesTextarea.placeholder = getUiString('notesPlaceholder');
    elements.saveNotesBtn.textContent = getUiString('saveNotes');
    elements.mistakesTitle.textContent = getUiString('mistakesTitle');
    elements.mistakesTextarea.placeholder = getUiString('mistakesPlaceholder');
    elements.saveMistakesBtn.textContent = getUiString('saveMistakes');
    elements.notesInfo.textContent = getUiString('notesInfo');
    elements.appFooter.textContent = getUiString('footerText');
  }

  function validateTopics() {
    const requiredSections = ['summary', 'rules', 'examples', 'commonMistakes', 'quiz'];

    state.topics.forEach((topic, index) => {
      const missing = [];

      if (!topic.id) {
        missing.push('id');
      }
      if (!topic.title) {
        missing.push('title');
      }
      if (!topic.category) {
        missing.push('category');
      }
      if (!topic.tags) {
        missing.push('tags');
      }
      if (!topic.sections) {
        missing.push('sections');
      } else {
        requiredSections.forEach(section => {
          if (!topic.sections[section]) {
            missing.push(`sections.${section}`);
          }
        });
      }

      if (missing.length > 0) {
        const label = topic.id || `index ${index}`;
        console.warn(`Topic ${label} is missing required fields: ${missing.join(', ')}`);
      }
    });
  }

  // ===========================
  // Empty State
  // ===========================
  function showEmptyState() {
    document.querySelector('.empty-state').style.display = 'block';
    elements.topicContent.style.display = 'none';
  }

  // ===========================
  // Animations CSS
  // ===========================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ===========================
  // Start the App
  // ===========================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
