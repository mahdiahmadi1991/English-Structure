// Grammar Topics Data
const grammarTopics = [
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    category: 'Tenses',
    tags: ['basic', 'present', 'beginner'],
    lang: 'en',
    sections: {
      summary: 'The present simple tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.',
      rules: [
        'Use base form of verb for I, you, we, they',
        'Add -s/-es to verb for he, she, it',
        'Use "do/does" for questions and negatives',
        'Regular habits use present simple (e.g., "I wake up at 7 AM")'
      ],
      examples: [
        'I work in a bank. (fact)',
        'She plays tennis every weekend. (habit)',
        'Water boils at 100°C. (general truth)',
        'The train leaves at 9:00 AM. (fixed arrangement)'
      ],
      commonMistakes: [
        {
          wrong: 'He go to school.',
          correct: 'He goes to school.',
          explanation: 'Third person singular (he, she, it) requires -s/-es ending'
        },
        {
          wrong: 'Does she goes to work?',
          correct: 'Does she go to work?',
          explanation: 'With auxiliary "does", use base form of the verb'
        }
      ],
      quiz: [
        {
          question: 'She ___ (go) to the gym every day.',
          options: ['go', 'goes', 'going', 'gone'],
          correct: 1,
          explanation: 'Third person singular (she) requires -es ending'
        },
        {
          question: 'They ___ (not/like) coffee.',
          options: ['doesn\'t like', 'don\'t like', 'not like', 'aren\'t like'],
          correct: 1,
          explanation: 'Use "don\'t" with plural subjects (they)'
        }
      ]
    }
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous Tense',
    category: 'Tenses',
    tags: ['basic', 'present', 'beginner'],
    lang: 'en',
    sections: {
      summary: 'The present continuous (progressive) tense describes actions happening now or temporary situations.',
      rules: [
        'Form: subject + am/is/are + verb-ing',
        'Use for actions happening right now',
        'Use for temporary situations',
        'Use for future arrangements with time expressions'
      ],
      examples: [
        'I am studying English now. (action happening now)',
        'She is living in Paris this year. (temporary situation)',
        'They are meeting tomorrow at 3 PM. (future arrangement)',
        'It is raining outside. (happening now)'
      ],
      commonMistakes: [
        {
          wrong: 'I am knowing the answer.',
          correct: 'I know the answer.',
          explanation: 'Stative verbs (know, like, want) are not normally used in continuous form'
        },
        {
          wrong: 'He working now.',
          correct: 'He is working now.',
          explanation: 'Must use am/is/are before the -ing form'
        }
      ],
      quiz: [
        {
          question: 'Look! It ___ (rain).',
          options: ['rains', 'is raining', 'rain', 'raining'],
          correct: 1,
          explanation: 'Use present continuous for actions happening right now'
        },
        {
          question: 'We ___ (have) dinner tomorrow at 7 PM.',
          options: ['have', 'are having', 'having', 'has'],
          correct: 1,
          explanation: 'Present continuous can express future arrangements'
        }
      ]
    }
  },
  {
    id: 'past-simple',
    title: 'Past Simple Tense',
    category: 'Tenses',
    tags: ['basic', 'past', 'beginner'],
    lang: 'en',
    sections: {
      summary: 'The past simple tense is used to describe completed actions in the past.',
      rules: [
        'Regular verbs: add -ed to base form',
        'Irregular verbs: use specific past form',
        'Use "did" for questions and negatives',
        'Time expressions: yesterday, last week, ago, in 2010'
      ],
      examples: [
        'I visited London last year. (completed action)',
        'She studied French for five years. (completed duration)',
        'They didn\'t come to the party. (negative)',
        'Did you see that movie? (question)'
      ],
      commonMistakes: [
        {
          wrong: 'I didn\'t went there.',
          correct: 'I didn\'t go there.',
          explanation: 'After "did/didn\'t", use base form of verb'
        },
        {
          wrong: 'She goed to school.',
          correct: 'She went to school.',
          explanation: 'Go is irregular; past form is "went", not "goed"'
        }
      ],
      quiz: [
        {
          question: 'She ___ (buy) a new car last month.',
          options: ['buys', 'bought', 'buying', 'buyed'],
          correct: 1,
          explanation: 'Buy is irregular; past form is "bought"'
        },
        {
          question: 'Did you ___ (see) John yesterday?',
          options: ['saw', 'see', 'seeing', 'seen'],
          correct: 1,
          explanation: 'After "did", use base form of verb'
        }
      ]
    }
  },
  {
    id: 'articles',
    title: 'Articles (a, an, the)',
    category: 'Grammar Basics',
    tags: ['articles', 'determiners', 'intermediate'],
    lang: 'en',
    sections: {
      summary: 'Articles are words that define nouns as specific or unspecific. English has two types: definite (the) and indefinite (a/an).',
      rules: [
        'Use "a" before consonant sounds',
        'Use "an" before vowel sounds',
        'Use "the" for specific nouns or when something is mentioned again',
        'No article for plural/uncountable nouns in general statements'
      ],
      examples: [
        'I saw a dog. The dog was brown. (first mention → specific)',
        'She is an engineer. (job/profession)',
        'The sun rises in the east. (unique things)',
        'I like coffee. (general - no article with uncountable)'
      ],
      commonMistakes: [
        {
          wrong: 'I am an student.',
          correct: 'I am a student.',
          explanation: 'Student starts with consonant sound /st/, use "a"'
        },
        {
          wrong: 'She goes to the school.',
          correct: 'She goes to school.',
          explanation: 'No article when referring to the general purpose (education)'
        }
      ],
      quiz: [
        {
          question: 'She is ___ honest person.',
          options: ['a', 'an', 'the', 'no article'],
          correct: 1,
          explanation: 'Honest starts with vowel sound /ɒ/, use "an"'
        },
        {
          question: 'I love ___ music.',
          options: ['a', 'an', 'the', 'no article'],
          correct: 3,
          explanation: 'General statements with uncountable nouns need no article'
        }
      ]
    }
  },
  {
    id: 'prepositions',
    title: 'Prepositions of Time and Place',
    category: 'Grammar Basics',
    tags: ['prepositions', 'intermediate'],
    lang: 'en',
    sections: {
      summary: 'Prepositions show relationships between nouns and other words. The most common are in, on, at.',
      rules: [
        'Time: at (specific times), on (days/dates), in (months/years/periods)',
        'Place: at (specific points), on (surfaces), in (enclosed spaces)',
        'at: at 3 PM, at night, at home, at the door',
        'on: on Monday, on the table, on the wall',
        'in: in May, in 2020, in the morning, in the room'
      ],
      examples: [
        'I wake up at 7 AM. (specific time)',
        'The meeting is on Monday. (day)',
        'She was born in 1990. (year)',
        'The book is on the table. (surface)',
        'He lives in New York. (city/enclosed space)'
      ],
      commonMistakes: [
        {
          wrong: 'I will see you in Monday.',
          correct: 'I will see you on Monday.',
          explanation: 'Use "on" with days of the week'
        },
        {
          wrong: 'The class starts at the morning.',
          correct: 'The class starts in the morning.',
          explanation: 'Use "in" with parts of the day (except "at night")'
        }
      ],
      quiz: [
        {
          question: 'The party is ___ Saturday night.',
          options: ['at', 'on', 'in', 'by'],
          correct: 1,
          explanation: 'Use "on" with specific days and nights of the week'
        },
        {
          question: 'She arrived ___ 5 o\'clock.',
          options: ['at', 'on', 'in', 'by'],
          correct: 0,
          explanation: 'Use "at" with specific clock times'
        }
      ]
    }
  },
  {
    id: 'conditionals',
    title: 'Conditional Sentences (If Clauses)',
    category: 'Advanced Grammar',
    tags: ['conditionals', 'advanced'],
    lang: 'en',
    sections: {
      summary: 'Conditional sentences express hypothetical situations and their consequences.',
      rules: [
        'Zero conditional: If + present, present (general truths)',
        'First conditional: If + present, will + base (real future possibility)',
        'Second conditional: If + past simple, would + base (unreal present)',
        'Third conditional: If + past perfect, would have + past participle (unreal past)'
      ],
      examples: [
        'If you heat water to 100°C, it boils. (zero - scientific fact)',
        'If it rains tomorrow, I will stay home. (first - possible future)',
        'If I had a million dollars, I would travel the world. (second - unreal present)',
        'If I had studied harder, I would have passed. (third - unreal past)'
      ],
      commonMistakes: [
        {
          wrong: 'If I will see him, I will tell him.',
          correct: 'If I see him, I will tell him.',
          explanation: 'First conditional: use present simple in if-clause, not "will"'
        },
        {
          wrong: 'If I would be rich, I would buy a house.',
          correct: 'If I were rich, I would buy a house.',
          explanation: 'Second conditional: use past simple in if-clause, not "would"'
        }
      ],
      quiz: [
        {
          question: 'If she ___ (study) harder, she will pass the exam.',
          options: ['studies', 'will study', 'studied', 'would study'],
          correct: 0,
          explanation: 'First conditional: present simple in if-clause'
        },
        {
          question: 'If I ___ (be) you, I would apologize.',
          options: ['am', 'was', 'were', 'would be'],
          correct: 2,
          explanation: 'Second conditional: use "were" for all persons in formal English'
        }
      ]
    }
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    category: 'Advanced Grammar',
    tags: ['passive', 'voice', 'advanced'],
    lang: 'en',
    sections: {
      summary: 'The passive voice emphasizes the action or receiver rather than the doer.',
      rules: [
        'Form: be + past participle',
        'Use when doer is unknown, unimportant, or obvious',
        'Can be used in all tenses',
        'Add "by" to mention the doer (if necessary)'
      ],
      examples: [
        'The car was stolen last night. (doer unknown)',
        'English is spoken in many countries. (doer obvious)',
        'The letter will be sent tomorrow. (focus on action)',
        'The Mona Lisa was painted by Leonardo da Vinci. (famous doer mentioned)'
      ],
      commonMistakes: [
        {
          wrong: 'The book was wrote in 1850.',
          correct: 'The book was written in 1850.',
          explanation: 'Use past participle (written), not past simple (wrote)'
        },
        {
          wrong: 'The house is building now.',
          correct: 'The house is being built now.',
          explanation: 'Present continuous passive: is/are being + past participle'
        }
      ],
      quiz: [
        {
          question: 'The cake ___ (bake) by my mother.',
          options: ['bakes', 'is baking', 'was baked', 'baked'],
          correct: 2,
          explanation: 'Past passive: was/were + past participle'
        },
        {
          question: 'A new hospital ___ (build) in our town next year.',
          options: ['builds', 'will build', 'will be built', 'is building'],
          correct: 2,
          explanation: 'Future passive: will be + past participle'
        }
      ]
    }
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs (can, should, must)',
    category: 'Grammar Basics',
    tags: ['modals', 'intermediate'],
    lang: 'en',
    sections: {
      summary: 'Modal verbs express ability, permission, obligation, advice, or possibility.',
      rules: [
        'Can/could: ability, permission, possibility',
        'Should/ought to: advice, recommendation',
        'Must/have to: obligation, necessity',
        'May/might: permission, possibility',
        'Modal + base form (no "to" except ought to)'
      ],
      examples: [
        'I can swim. (ability)',
        'You should see a doctor. (advice)',
        'We must arrive on time. (obligation)',
        'It might rain tomorrow. (possibility)'
      ],
      commonMistakes: [
        {
          wrong: 'He can to speak English.',
          correct: 'He can speak English.',
          explanation: 'Modal verbs are followed by base form without "to"'
        },
        {
          wrong: 'She musts study harder.',
          correct: 'She must study harder.',
          explanation: 'Modal verbs don\'t add -s in third person'
        }
      ],
      quiz: [
        {
          question: 'You ___ eat so much sugar. It\'s unhealthy.',
          options: ['mustn\'t', 'shouldn\'t', 'can\'t', 'don\'t have to'],
          correct: 1,
          explanation: 'Should/shouldn\'t is used for advice'
        },
        {
          question: 'I ___ finish this project by Friday.',
          options: ['must', 'should', 'might', 'would'],
          correct: 0,
          explanation: 'Must expresses strong obligation'
        }
      ]
    }
  }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = grammarTopics;
}
