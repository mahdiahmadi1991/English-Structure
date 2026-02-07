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
    selectedCategory: ''
  };

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
    sidebar: document.getElementById('sidebar')
  };

  // ===========================
  // Initialization
  // ===========================
  function init() {
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
    const categories = [...new Set(state.topics.map(topic => topic.category))];
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
      const matchesSearch = !state.searchQuery || 
        topic.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        topic.tags.some(tag => tag.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
        topic.category.toLowerCase().includes(state.searchQuery.toLowerCase());
      
      const matchesCategory = !state.selectedCategory || 
        topic.category === state.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Render filtered topics
    elements.topicsList.innerHTML = '';
    
    if (state.filteredTopics.length === 0) {
      elements.topicsList.innerHTML = '<div style="padding: 1rem; text-align: center; color: #64748b;">No topics found</div>';
      return;
    }

    state.filteredTopics.forEach(topic => {
      const topicItem = document.createElement('a');
      topicItem.href = `#${topic.id}`;
      topicItem.className = 'topic-item';
      topicItem.dataset.topicId = topic.id;
      
      if (topic.id === state.currentTopicId) {
        topicItem.classList.add('active');
      }
      
      topicItem.innerHTML = `
        <div class="topic-item-title">${topic.title}</div>
        <div class="topic-item-category">${topic.category}</div>
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
    elements.topicTitle.textContent = topic.title;
    elements.topicCategory.textContent = topic.category;
    
    // Populate tags
    elements.topicTags.innerHTML = topic.tags
      .map(tag => `<span class="tag">#${tag}</span>`)
      .join('');

    // Populate sections
    elements.summaryContent.textContent = topic.sections.summary;
    
    elements.rulesContent.innerHTML = topic.sections.rules
      .map(rule => `<li>${rule}</li>`)
      .join('');
    
    elements.examplesContent.innerHTML = topic.sections.examples
      .map(example => `<li>${example}</li>`)
      .join('');
    
    renderMistakes(topic.sections.commonMistakes);
    renderQuiz(topic.sections.quiz);
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
  function renderMistakes(mistakes) {
    elements.mistakesContent.innerHTML = mistakes
      .map(mistake => `
        <div class="mistake-item">
          <span class="mistake-wrong">❌ Wrong: ${mistake.wrong}</span>
          <span class="mistake-correct">✅ Correct: ${mistake.correct}</span>
          <p class="mistake-explanation">💡 ${mistake.explanation}</p>
        </div>
      `)
      .join('');
  }

  // ===========================
  // Quiz Rendering
  // ===========================
  function renderQuiz(quizQuestions) {
    elements.quizContent.innerHTML = quizQuestions
      .map((q, index) => `
        <div class="quiz-question" data-question-index="${index}">
          <div class="quiz-question-text">Q${index + 1}: ${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((option, optIndex) => `
              <div class="quiz-option" data-option-index="${optIndex}">
                ${String.fromCharCode(65 + optIndex)}. ${option}
              </div>
            `).join('')}
          </div>
          <button class="btn btn-primary quiz-submit" data-question-index="${index}">
            Check Answer
          </button>
          <div class="quiz-explanation">
            ${q.explanation}
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
      const quizData = topic.sections.quiz[questionIndex];
      
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
          alert('Please select an answer first!');
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
        submitBtn.textContent = selectedOption === quizData.correct ? '✅ Correct!' : '❌ Try Again Next Time';
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
    showNotification('Notes saved successfully! 💾');
  }

  function saveUserMistakes(topicId) {
    const mistakes = elements.mistakesTextarea.value;
    localStorage.setItem(`mistakes-${topicId}`, mistakes);
    showNotification('Mistakes log saved successfully! 💾');
  }

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
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
