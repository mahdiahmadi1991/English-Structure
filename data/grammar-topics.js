// Grammar Topics Data
const grammarTopics = [
  {
    id: 'present-simple',
    title: {
      en: 'Present Simple Tense',
      fa: 'زمان حال ساده'
    },
    category: {
      en: 'Tenses',
      fa: 'زمان'
    },
    tags: {
      en: ['basic', 'present', 'beginner'],
      fa: ['پایه', 'حال', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'The present simple tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.',
        fa: 'زمان حال ساده برای توصیف عادات، وضعیت‌های ثابت، حقایق عمومی و ترتیبات ثابت استفاده می‌شود.'
      },
      rules: {
        en: [
          'Use base form of verb for I, you, we, they',
          'Add -s/-es to verb for he, she, it',
          'Use "do/does" for questions and negatives',
          'Regular habits use present simple (e.g., "I wake up at 7 AM")'
        ],
        fa: [
          'از شکل پایه فعل برای I، you، we، they استفاده کنید',
          'به فعل برای he، she، it -s/-es اضافه کنید',
          'برای سوالات و جملات منفی از "do/does" استفاده کنید',
          'عادات معمولی از زمان حال ساده استفاده می‌کنند (مثلاً "I wake up at 7 AM")'
        ]
      },
      examples: {
        en: [
          'I work in a bank. (fact)',
          'She plays tennis every weekend. (habit)',
          'Water boils at 100°C. (general truth)',
          'The train leaves at 9:00 AM. (fixed arrangement)'
        ],
        fa: [
          'من در یک بانک کار می‌کنم. (واقعیت)',
          'او هر آخر هفته تنیس بازی می‌کند. (عادت)',
          'آب در 100 درجه سانتی‌گراد می‌جوشد. (حقیقت عمومی)',
          'قطار در ساعت 9:00 صبح حرکت می‌کند. (ترتیب ثابت)'
        ]
      },
      commonMistakes: {
        en: [
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
        fa: [
          {
            wrong: 'He go to school every day.',
            correct: 'He goes to school every day.',
            explanation: 'در سوم شخص مفرد (he/she/it) باید به فعل -s یا -es اضافه شود.'
          },
          {
            wrong: 'Does she goes to work?',
            correct: 'Does she go to work?',
            explanation: 'بعد از "does" باید شکل پایه فعل بیاید و -s حذف شود.'
          }
        ]
      },
      quiz: {
        en: [
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
        ],
        fa: [
          {
            question: 'جای خالی را پر کنید: She ___ to the gym every day.',
            options: ['go', 'goes', 'going', 'gone'],
            correct: 1,
            explanation: 'برای سوم شخص مفرد (she) باید -s/-es اضافه شود.'
          },
          {
            question: 'کدام گزینه درست است؟ They ___ coffee.',
            options: ["don't like", "doesn't like", 'not like', "aren't like"],
            correct: 0,
            explanation: 'برای فاعل جمع (they) از "don\'t" استفاده می‌شود.'
          }
        ]
      }
    }
  },
  {
    id: 'possessive-s',
    title: {
      en: 'Possessive \'s',
      fa: 'مالکیت با \'s'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['possessive', 'apostrophe', 'ownership'],
      fa: ['مالکیت', 'آپاستروف', 'تملک']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use \'s to show who owns something. It comes after the person or animal.',
        fa: 'برای نشان دادن مالکیت از \'s استفاده می‌شود و بعد از صاحب می‌آید.'
      },
      rules: {
        en: [
          'Use \'s with singular owners',
          'Use \' after plural nouns ending in -s',
          'Irregular plurals take \'s (children\'s)',
          'Place \'s right after the owner',
          'Do not use \'s with my/your/his/her'
        ],
        fa: [
          'برای مالک مفرد از \'s استفاده کنید',
          'برای جمعی که به -s ختم می‌شود فقط \' بگذارید',
          'جمع‌های بی‌قاعده \'s می‌گیرند (children\'s)',
          '\'s را بلافاصله بعد از صاحب می‌آوریم',
          'با my/your/his/her از \'s استفاده نمی‌شود'
        ]
      },
      examples: {
        en: [
          'Sara\'s bag is blue. (singular)',
          'The boys\' room is big. (plural -s)',
          'Children\'s toys are on the floor. (irregular plural)',
          'My brother\'s car is new. (owner + noun)'
        ],
        fa: [
          'کیف سارا آبی است. (مفرد)',
          'اتاق پسرها بزرگ است. (جمع با -s)',
          'اسباب‌بازی‌های بچه‌ها روی زمین است. (جمع بی‌قاعده)',
          'ماشین برادرم نو است. (صاحب + اسم)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'Sara bag is blue.',
            correct: 'Sara\'s bag is blue.',
            explanation: 'Use \'s after a singular owner.'
          },
          {
            wrong: 'The childrens\' toys are here.',
            correct: 'The children\'s toys are here.',
            explanation: 'Irregular plural takes \'s.'
          }
        ],
        fa: [
          {
            wrong: 'Sara bag is blue.',
            correct: 'Sara\'s bag is blue.',
            explanation: 'برای مالک مفرد باید \'s اضافه شود.'
          },
          {
            wrong: 'The childrens\' toys are here.',
            correct: 'The children\'s toys are here.',
            explanation: 'جمع بی‌قاعده \'s می‌گیرد.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'This is ___ bike.',
            options: ['Ali\'s', 'Ali', 'Alis\'', 'Alies'],
            correct: 0,
            explanation: 'Use \'s for a singular owner.'
          },
          {
            question: 'The girls___ bags are on the table.',
            options: ['s', '\'', '\'s', 'es'],
            correct: 1,
            explanation: 'Plural nouns ending in s take only \'.'
          }
        ],
        fa: [
          {
            question: 'This is ___ bike.',
            options: ['Ali\'s', 'Ali', 'Alis\'', 'Alies'],
            correct: 0,
            explanation: 'برای مالک مفرد از \'s استفاده می‌شود.'
          },
          {
            question: 'The girls___ bags are on the table.',
            options: ['s', '\'', '\'s', 'es'],
            correct: 1,
            explanation: 'اسم جمع با -s فقط \' می‌گیرد.'
          }
        ]
      }
    }
  },
  {
    id: 'plurals',
    title: {
      en: 'Plurals (Regular & Irregular)',
      fa: 'جمع‌ها (قاعده‌دار و بی‌قاعده)'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['plural', 'regular', 'irregular'],
      fa: ['جمع', 'قاعده‌دار', 'بی‌قاعده']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Most nouns add -s or -es to become plural, but some have irregular forms.',
        fa: 'بیشتر اسم‌ها با -s یا -es جمع می‌شوند، اما بعضی بی‌قاعده هستند.'
      },
      rules: {
        en: [
          'Add -s to most nouns',
          'Add -es to nouns ending in s, x, ch, sh',
          'Change y to ies after a consonant',
          'Some nouns change form (man → men)',
          'Some nouns stay the same (sheep → sheep)'
        ],
        fa: [
          'بیشتر اسم‌ها با -s جمع می‌شوند',
          'اسم‌های ending in s, x, ch, sh با -es جمع می‌شوند',
          'بعد از حرف بی‌صدا y به ies تبدیل می‌شود',
          'برخی اسم‌ها شکلشان عوض می‌شود (man → men)',
          'برخی اسم‌ها ثابت می‌مانند (sheep → sheep)'
        ]
      },
      examples: {
        en: [
          'book → books (regular)',
          'bus → buses (-es)',
          'city → cities (y → ies)',
          'child → children (irregular)'
        ],
        fa: [
          'book → books (قاعده‌دار)',
          'bus → buses (-es)',
          'city → cities (y → ies)',
          'child → children (بی‌قاعده)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'two childs',
            correct: 'two children',
            explanation: 'Child has an irregular plural form.'
          },
          {
            wrong: 'boxs',
            correct: 'boxes',
            explanation: 'Add -es to nouns ending in x.'
          }
        ],
        fa: [
          {
            wrong: 'two childs',
            correct: 'two children',
            explanation: 'جمع child بی‌قاعده است.'
          },
          {
            wrong: 'boxs',
            correct: 'boxes',
            explanation: 'اسم‌های ending in x با -es جمع می‌شوند.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the correct plural of “baby”.',
            options: ['babys', 'babies', 'babyes', 'babyses'],
            correct: 1,
            explanation: 'Y changes to ies after a consonant.'
          },
          {
            question: 'The plural of “man” is ___.',
            options: ['mans', 'mens', 'men', 'manes'],
            correct: 2,
            explanation: 'Man has an irregular plural.'
          }
        ],
        fa: [
          {
            question: 'جمع درست “baby” کدام است؟',
            options: ['babys', 'babies', 'babyes', 'babyses'],
            correct: 1,
            explanation: 'بعد از حرف بی‌صدا y به ies تبدیل می‌شود.'
          },
          {
            question: 'جمع “man” کدام است؟',
            options: ['mans', 'mens', 'men', 'manes'],
            correct: 2,
            explanation: 'Man جمع بی‌قاعده دارد.'
          }
        ]
      }
    }
  },
  {
    id: 'countable-uncountable',
    title: {
      en: 'Countable vs Uncountable Nouns',
      fa: 'اسم‌های قابل شمارش و غیرقابل شمارش'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['countable', 'uncountable', 'nouns'],
      fa: ['قابل شمارش', 'غیرقابل شمارش', 'اسم']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Countable nouns can be counted; uncountable nouns cannot and usually have no plural.',
        fa: 'اسم‌های قابل شمارش قابل شمارش‌اند؛ غیرقابل شمارش معمولاً جمع ندارند.'
      },
      rules: {
        en: [
          'Countable nouns have singular and plural forms',
          'Use a/an with singular countable nouns',
          'Uncountable nouns do not use a/an',
          'Use much with uncountable, many with countable',
          'Some nouns are always uncountable (water, rice)'
        ],
        fa: [
          'اسم‌های قابل شمارش مفرد و جمع دارند',
          'با اسم قابل شمارش مفرد از a/an استفاده می‌شود',
          'اسم‌های غیرقابل شمارش با a/an نمی‌آیند',
          'برای غیرقابل شمارش از much و برای قابل شمارش از many استفاده کنید',
          'برخی اسم‌ها همیشه غیرقابل شمارش‌اند (water, rice)'
        ]
      },
      examples: {
        en: [
          'one apple → two apples (countable)',
          'one chair → many chairs (countable)',
          'some water (uncountable)',
          'much rice (uncountable)'
        ],
        fa: [
          'یک سیب → دو سیب (قابل شمارش)',
          'یک صندلی → صندلی‌های زیاد (قابل شمارش)',
          'مقداری آب (غیرقابل شمارش)',
          'برنج زیاد (غیرقابل شمارش)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'an information',
            correct: 'some information',
            explanation: 'Information is uncountable.'
          },
          {
            wrong: 'many milk',
            correct: 'much milk',
            explanation: 'Use much with uncountable nouns.'
          }
        ],
        fa: [
          {
            wrong: 'an information',
            correct: 'some information',
            explanation: 'Information غیرقابل شمارش است.'
          },
          {
            wrong: 'many milk',
            correct: 'much milk',
            explanation: 'برای غیرقابل شمارش از much استفاده کنید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the uncountable noun.',
            options: ['chair', 'water', 'apple', 'student'],
            correct: 1,
            explanation: 'Water is uncountable.'
          },
          {
            question: 'Choose the correct phrase.',
            options: ['a rice', 'many rice', 'much rice', 'two rice'],
            correct: 2,
            explanation: 'Use much with uncountable nouns.'
          }
        ],
        fa: [
          {
            question: 'کدام اسم غیرقابل شمارش است؟',
            options: ['chair', 'water', 'apple', 'student'],
            correct: 1,
            explanation: 'Water غیرقابل شمارش است.'
          },
          {
            question: 'کدام عبارت درست است؟',
            options: ['a rice', 'many rice', 'much rice', 'two rice'],
            correct: 2,
            explanation: 'برای غیرقابل شمارش از much استفاده می‌شود.'
          }
        ]
      }
    }
  },
  {
    id: 'quantifiers-some-any-much-many',
    title: {
      en: 'Quantifiers (some/any, much/many, a lot of)',
      fa: 'کمیت‌ها (some/any, much/many, a lot of)'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['quantifiers', 'some-any', 'much-many'],
      fa: ['کمیت', 'some/any', 'much/many']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Quantifiers tell us how much or how many. Some is common in positive sentences, any in questions or negatives.',
        fa: 'کمیت‌ها مقدار یا تعداد را نشان می‌دهند؛ some در جمله مثبت و any در سوال/منفی رایج است.'
      },
      rules: {
        en: [
          'Use some in positive sentences',
          'Use any in questions and negatives',
          'Use much with uncountable nouns',
          'Use many with countable nouns',
          'A lot of works with both countable and uncountable nouns'
        ],
        fa: [
          'در جمله مثبت از some استفاده کنید',
          'در سوال و منفی از any استفاده کنید',
          'برای غیرقابل شمارش از much استفاده کنید',
          'برای قابل شمارش از many استفاده کنید',
          'A lot of هم برای قابل شمارش و هم غیرقابل شمارش کاربرد دارد'
        ]
      },
      examples: {
        en: [
          'I have some friends. (positive)',
          'Do you have any bread? (question)',
          'There isn\'t much time. (uncountable)',
          'She has many books. (countable)'
        ],
        fa: [
          'من چند دوست دارم. (مثبت)',
          'آیا نان دارید؟ (سوال)',
          'زمان زیادی نداریم. (غیرقابل شمارش)',
          'او کتاب‌های زیادی دارد. (قابل شمارش)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'I don\'t have some money.',
            correct: 'I don\'t have any money.',
            explanation: 'Use any in negatives.'
          },
          {
            wrong: 'How much apples do you have?',
            correct: 'How many apples do you have?',
            explanation: 'Use many with countable nouns.'
          }
        ],
        fa: [
          {
            wrong: 'I don\'t have some money.',
            correct: 'I don\'t have any money.',
            explanation: 'در منفی از any استفاده می‌شود.'
          },
          {
            wrong: 'How much apples do you have?',
            correct: 'How many apples do you have?',
            explanation: 'برای قابل شمارش از many استفاده کنید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'We don\'t have ___ milk.',
            options: ['some', 'any', 'many', 'a lot'],
            correct: 1,
            explanation: 'Use any in negative sentences.'
          },
          {
            question: 'She has ___ homework today.',
            options: ['much', 'many', 'some', 'few'],
            correct: 0,
            explanation: 'Homework is uncountable, so use much.'
          }
        ],
        fa: [
          {
            question: 'We don\'t have ___ milk.',
            options: ['some', 'any', 'many', 'a lot'],
            correct: 1,
            explanation: 'در منفی از any استفاده می‌شود.'
          },
          {
            question: 'She has ___ homework today.',
            options: ['much', 'many', 'some', 'few'],
            correct: 0,
            explanation: 'Homework غیرقابل شمارش است، پس much.'
          }
        ]
      }
    }
  },
  {
    id: 'how-much-how-many',
    title: {
      en: 'How Much / How Many',
      fa: 'How Much / How Many'
    },
    category: {
      en: 'Questions',
      fa: 'سوال‌ها'
    },
    tags: {
      en: ['how-much', 'how-many', 'questions'],
      fa: ['how much', 'how many', 'سوال']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use how much for uncountable nouns and how many for countable nouns.',
        fa: 'برای غیرقابل شمارش از how much و برای قابل شمارش از how many استفاده می‌شود.'
      },
      rules: {
        en: [
          'How much + uncountable noun',
          'How many + countable noun (plural)',
          'Use is/are depending on the noun',
          'Common in questions about quantity',
          'Answers can use numbers or quantifiers'
        ],
        fa: [
          'How much + اسم غیرقابل شمارش',
          'How many + اسم قابل شمارش (جمع)',
          'از is/are بر اساس اسم استفاده کنید',
          'برای سوال درباره مقدار/تعداد کاربرد دارد',
          'پاسخ می‌تواند عدد یا کمیت باشد'
        ]
      },
      examples: {
        en: [
          'How much water do you need? (uncountable)',
          'How many students are here? (countable)',
          'How much sugar is in the tea?',
          'How many books do you have?'
        ],
        fa: [
          'چه مقدار آب نیاز داری؟ (غیرقابل شمارش)',
          'چند دانش‌آموز اینجا هستند؟ (قابل شمارش)',
          'چه مقدار شکر در چای است؟',
          'چند کتاب داری؟'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'How much apples are there?',
            correct: 'How many apples are there?',
            explanation: 'Use how many with countable nouns.'
          },
          {
            wrong: 'How many water do you drink?',
            correct: 'How much water do you drink?',
            explanation: 'Water is uncountable.'
          }
        ],
        fa: [
          {
            wrong: 'How much apples are there?',
            correct: 'How many apples are there?',
            explanation: 'برای قابل شمارش از how many استفاده می‌شود.'
          },
          {
            wrong: 'How many water do you drink?',
            correct: 'How much water do you drink?',
            explanation: 'Water غیرقابل شمارش است.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: '___ money do you have?',
            options: ['How much', 'How many', 'How long', 'How old'],
            correct: 0,
            explanation: 'Money is uncountable.'
          },
          {
            question: '___ chairs are in the room?',
            options: ['How much', 'How many', 'How far', 'How often'],
            correct: 1,
            explanation: 'Chairs are countable.'
          }
        ],
        fa: [
          {
            question: '___ money do you have?',
            options: ['How much', 'How many', 'How long', 'How old'],
            correct: 0,
            explanation: 'Money غیرقابل شمارش است.'
          },
          {
            question: '___ chairs are in the room?',
            options: ['How much', 'How many', 'How far', 'How often'],
            correct: 1,
            explanation: 'Chairs قابل شمارش هستند.'
          }
        ]
      }
    }
  },
  {
    id: 'adverbs-of-frequency',
    title: {
      en: 'Adverbs of Frequency',
      fa: 'قیدهای تکرار'
    },
    category: {
      en: 'Adverbs',
      fa: 'قیدها'
    },
    tags: {
      en: ['frequency', 'adverbs', 'routine'],
      fa: ['تکرار', 'قید', 'روتین']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Adverbs of frequency show how often something happens, like always, usually, or never.',
        fa: 'قیدهای تکرار نشان می‌دهند یک کار چند وقت یک‌بار انجام می‌شود؛ مثل always یا never.'
      },
      rules: {
        en: [
          'Common adverbs: always, usually, often, sometimes, rarely, never',
          'Place them before the main verb',
          'Place them after the verb to be',
          'Use them with routines and habits',
          'In questions, put them after the subject'
        ],
        fa: [
          'قیدهای رایج: always, usually, often, sometimes, rarely, never',
          'قبل از فعل اصلی می‌آیند',
          'بعد از فعل to be می‌آیند',
          'برای عادات و روتین استفاده می‌شوند',
          'در سوال بعد از فاعل می‌آیند'
        ]
      },
      examples: {
        en: [
          'I always drink tea. (always)',
          'She usually gets up early. (usually)',
          'They are often late. (after be)',
          'He never eats fast food. (never)'
        ],
        fa: [
          'من همیشه چای می‌نوشم. (always)',
          'او معمولاً زود بیدار می‌شود. (usually)',
          'آنها اغلب دیر هستند. (بعد از be)',
          'او هرگز فست‌فود نمی‌خورد. (never)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'She gets usually up early.',
            correct: 'She usually gets up early.',
            explanation: 'Place the adverb before the main verb.'
          },
          {
            wrong: 'They often are late.',
            correct: 'They are often late.',
            explanation: 'Place the adverb after the verb to be.'
          }
        ],
        fa: [
          {
            wrong: 'She gets usually up early.',
            correct: 'She usually gets up early.',
            explanation: 'قید تکرار قبل از فعل اصلی می‌آید.'
          },
          {
            wrong: 'They often are late.',
            correct: 'They are often late.',
            explanation: 'قید بعد از فعل to be می‌آید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the correct sentence.',
            options: ['He goes always to bed early.', 'He always goes to bed early.', 'He goes to bed always early.', 'Always he goes to bed early.'],
            correct: 1,
            explanation: 'Adverb comes before the main verb.'
          },
          {
            question: 'Where does the adverb go? "They are ___ happy."',
            options: ['always', 'always are', 'are always', 'never are'],
            correct: 0,
            explanation: 'After verb to be: They are always happy.'
          }
        ],
        fa: [
          {
            question: 'کدام جمله درست است؟',
            options: ['He goes always to bed early.', 'He always goes to bed early.', 'He goes to bed always early.', 'Always he goes to bed early.'],
            correct: 1,
            explanation: 'قید تکرار قبل از فعل اصلی می‌آید.'
          },
          {
            question: 'جای قید درست را انتخاب کنید: "They are ___ happy."',
            options: ['always', 'always are', 'are always', 'never are'],
            correct: 0,
            explanation: 'بعد از فعل to be می‌آید: They are always happy.'
          }
        ]
      }
    }
  },
  {
    id: 'articles-intro',
    title: {
      en: 'Articles: A / An / The (Intro)',
      fa: 'حروف تعریف: A / An / The (مقدمه)'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['articles', 'a-an-the', 'beginner'],
      fa: ['حروف تعریف', 'a/an/the', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Articles come before nouns. Use a/an for general things and the for specific ones.',
        fa: 'حروف تعریف قبل از اسم می‌آیند؛ برای چیزهای کلی از a/an و برای چیزهای مشخص از the استفاده می‌شود.'
      },
      rules: {
        en: [
          'Use a before consonant sounds',
          'Use an before vowel sounds',
          'Use the when both speaker and listener know the noun',
          'Do not use a/an with plural nouns',
          'Do not use a/an with uncountable nouns'
        ],
        fa: [
          'قبل از صدای همخوان از a استفاده کنید',
          'قبل از صدای واکه از an استفاده کنید',
          'وقتی اسم مشخص است از the استفاده کنید',
          'با اسم‌های جمع از a/an استفاده نمی‌شود',
          'با اسم‌های غیرقابل شمارش از a/an استفاده نمی‌شود'
        ]
      },
      examples: {
        en: [
          'I have a book. (general)',
          'She eats an apple. (vowel sound)',
          'The book is on the table. (specific)',
          'We need water. (uncountable)'
        ],
        fa: [
          'من یک کتاب دارم. (کلی)',
          'او یک سیب می‌خورد. (صدای واکه)',
          'کتاب روی میز است. (مشخص)',
          'ما به آب نیاز داریم. (غیرقابل شمارش)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'She is teacher.',
            correct: 'She is a teacher.',
            explanation: 'Use a/an with singular countable nouns.'
          },
          {
            wrong: 'I bought an book.',
            correct: 'I bought a book.',
            explanation: 'Use a before consonant sounds like /b/.'
          }
        ],
        fa: [
          {
            wrong: 'She is teacher.',
            correct: 'She is a teacher.',
            explanation: 'با اسم مفرد قابل شمارش باید a/an بیاید.'
          },
          {
            wrong: 'I bought an book.',
            correct: 'I bought a book.',
            explanation: 'قبل از صدای همخوان مثل /b/ از a استفاده می‌شود.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'She has ___ umbrella.',
            options: ['a', 'an', 'the', 'no article'],
            correct: 1,
            explanation: 'Umbrella starts with a vowel sound.'
          },
          {
            question: '___ sun is bright today.',
            options: ['A', 'An', 'The', 'No article'],
            correct: 2,
            explanation: 'The sun is specific and unique.'
          }
        ],
        fa: [
          {
            question: 'She has ___ umbrella.',
            options: ['a', 'an', 'the', 'no article'],
            correct: 1,
            explanation: 'Umbrella با صدای واکه شروع می‌شود.'
          },
          {
            question: '___ sun is bright today.',
            options: ['A', 'An', 'The', 'No article'],
            correct: 2,
            explanation: 'خورشید مشخص و یکتا است؛ the لازم است.'
          }
        ]
      }
    }
  },
  {
    id: 'demonstratives',
    title: {
      en: 'Demonstratives (This/That/These/Those)',
      fa: 'اشاره‌گرها (This/That/These/Those)'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['demonstratives', 'this-that', 'beginner'],
      fa: ['اشاره‌گر', 'this/that', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use demonstratives to point to people or things near or far, singular or plural.',
        fa: 'برای اشاره به افراد یا اشیای نزدیک/دور و مفرد/جمع از اشاره‌گرها استفاده می‌شود.'
      },
      rules: {
        en: [
          'This = near + singular',
          'That = far + singular',
          'These = near + plural',
          'Those = far + plural',
          'Demonstratives come before nouns'
        ],
        fa: [
          'This = نزدیک + مفرد',
          'That = دور + مفرد',
          'These = نزدیک + جمع',
          'Those = دور + جمع',
          'اشاره‌گرها قبل از اسم می‌آیند'
        ]
      },
      examples: {
        en: [
          'This book is interesting. (near)',
          'That car is fast. (far)',
          'These apples are fresh. (near plural)',
          'Those shoes are expensive. (far plural)'
        ],
        fa: [
          'این کتاب جالب است. (نزدیک)',
          'آن ماشین سریع است. (دور)',
          'این سیب‌ها تازه‌اند. (جمع نزدیک)',
          'آن کفش‌ها گران هستند. (جمع دور)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'This apples are sweet.',
            correct: 'These apples are sweet.',
            explanation: 'Use these with plural nouns.'
          },
          {
            wrong: 'Those book is mine.',
            correct: 'That book is mine.',
            explanation: 'Use that with singular nouns.'
          }
        ],
        fa: [
          {
            wrong: 'This apples are sweet.',
            correct: 'These apples are sweet.',
            explanation: 'برای اسم جمع از these استفاده می‌شود.'
          },
          {
            wrong: 'Those book is mine.',
            correct: 'That book is mine.',
            explanation: 'برای اسم مفرد از that استفاده می‌شود.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: '___ is my phone here. (near, singular)',
            options: ['This', 'That', 'These', 'Those'],
            correct: 0,
            explanation: 'This is used for near, singular.'
          },
          {
            question: '___ houses are big. (far, plural)',
            options: ['This', 'That', 'These', 'Those'],
            correct: 3,
            explanation: 'Those is used for far, plural.'
          }
        ],
        fa: [
          {
            question: '___ is my phone here. (near, singular)',
            options: ['This', 'That', 'These', 'Those'],
            correct: 0,
            explanation: 'برای نزدیک و مفرد از this استفاده می‌شود.'
          },
          {
            question: '___ houses are big. (far, plural)',
            options: ['This', 'That', 'These', 'Those'],
            correct: 3,
            explanation: 'برای دور و جمع از those استفاده می‌شود.'
          }
        ]
      }
    }
  },
  {
    id: 'personal-pronouns',
    title: {
      en: 'Personal Pronouns (Subject/Object)',
      fa: 'ضمیرهای شخصی (فاعل/مفعول)'
    },
    category: {
      en: 'Pronouns',
      fa: 'ضمیرها'
    },
    tags: {
      en: ['pronouns', 'subject', 'object'],
      fa: ['ضمیر', 'فاعل', 'مفعول']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Personal pronouns replace names. Subject pronouns do the action; object pronouns receive it.',
        fa: 'ضمیرهای شخصی جای اسم می‌آیند؛ ضمیر فاعلی عمل را انجام می‌دهد و ضمیر مفعولی عمل را دریافت می‌کند.'
      },
      rules: {
        en: [
          'Subject pronouns: I, you, he, she, it, we, they',
          'Object pronouns: me, you, him, her, it, us, them',
          'Use subject pronouns before verbs',
          'Use object pronouns after verbs or prepositions',
          'Do not use object forms as subjects'
        ],
        fa: [
          'ضمیر فاعلی: I, you, he, she, it, we, they',
          'ضمیر مفعولی: me, you, him, her, it, us, them',
          'ضمیر فاعلی قبل از فعل می‌آید',
          'ضمیر مفعولی بعد از فعل یا حرف اضافه می‌آید',
          'از ضمیر مفعولی به جای فاعل استفاده نکنید'
        ]
      },
      examples: {
        en: [
          'He is my friend. (subject)',
          'I see him. (object)',
          'They help us. (object)',
          'She talks to me. (object)'
        ],
        fa: [
          'او دوست من است. (فاعل)',
          'من او را می‌بینم. (مفعول)',
          'آنها به ما کمک می‌کنند. (مفعول)',
          'او با من صحبت می‌کند. (مفعول)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'Him is my brother.',
            correct: 'He is my brother.',
            explanation: 'Use subject pronouns before the verb.'
          },
          {
            wrong: 'She likes I.',
            correct: 'She likes me.',
            explanation: 'Use object pronouns after verbs.'
          }
        ],
        fa: [
          {
            wrong: 'Him is my brother.',
            correct: 'He is my brother.',
            explanation: 'قبل از فعل باید ضمیر فاعلی بیاید.'
          },
          {
            wrong: 'She likes I.',
            correct: 'She likes me.',
            explanation: 'بعد از فعل باید ضمیر مفعولی بیاید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: '___ am a student.',
            options: ['Me', 'I', 'Him', 'Us'],
            correct: 1,
            explanation: 'I is a subject pronoun.'
          },
          {
            question: 'She calls ___.',
            options: ['he', 'I', 'me', 'they'],
            correct: 2,
            explanation: 'Me is an object pronoun.'
          }
        ],
        fa: [
          {
            question: '___ am a student.',
            options: ['Me', 'I', 'Him', 'Us'],
            correct: 1,
            explanation: 'I ضمیر فاعلی است.'
          },
          {
            question: 'She calls ___.',
            options: ['he', 'I', 'me', 'they'],
            correct: 2,
            explanation: 'Me ضمیر مفعولی است.'
          }
        ]
      }
    }
  },
  {
    id: 'possessive-adjectives',
    title: {
      en: 'Possessive Adjectives (my/your/his...)',
      fa: 'صفت‌های ملکی (my/your/his...)'
    },
    category: {
      en: 'Pronouns',
      fa: 'ضمیرها'
    },
    tags: {
      en: ['possessive', 'my-your', 'beginner'],
      fa: ['ملکی', 'my/your', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Possessive adjectives show ownership and come before nouns.',
        fa: 'صفت‌های ملکی مالکیت را نشان می‌دهند و قبل از اسم می‌آیند.'
      },
      rules: {
        en: [
          'Use my, your, his, her, its, our, their',
          'Place them before the noun',
          'Do not use articles with possessive adjectives',
          'Its is for things/animals; their is for plural',
          'Possessive adjectives do not change for plural nouns'
        ],
        fa: [
          'از my, your, his, her, its, our, their استفاده کنید',
          'این صفت‌ها قبل از اسم می‌آیند',
          'با صفت ملکی از a/an/the استفاده نکنید',
          'Its برای اشیا/حیوانات و their برای جمع است',
          'صفت‌های ملکی با جمع شدن اسم تغییر نمی‌کنند'
        ]
      },
      examples: {
        en: [
          'This is my book. (ownership)',
          'Her bag is red. (her)',
          'Our class starts at 9. (our)',
          'Their house is big. (their)'
        ],
        fa: [
          'این کتاب من است. (مالکیت)',
          'کیف او قرمز است. (her)',
          'کلاس ما ساعت ۹ شروع می‌شود. (our)',
          'خانه آنها بزرگ است. (their)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'This is the my book.',
            correct: 'This is my book.',
            explanation: 'Do not use the with possessive adjectives.'
          },
          {
            wrong: 'She likes her the car.',
            correct: 'She likes her car.',
            explanation: 'Possessive adjectives go directly before nouns.'
          }
        ],
        fa: [
          {
            wrong: 'This is the my book.',
            correct: 'This is my book.',
            explanation: 'با صفت ملکی the استفاده نمی‌شود.'
          },
          {
            wrong: 'She likes her the car.',
            correct: 'She likes her car.',
            explanation: 'صفت ملکی باید درست قبل از اسم بیاید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'We love ___ teacher.',
            options: ['we', 'our', 'us', 'ours'],
            correct: 1,
            explanation: 'Our is the possessive adjective.'
          },
          {
            question: '___ phone is new. (belonging to him)',
            options: ['He', 'Him', 'His', 'Her'],
            correct: 2,
            explanation: 'His shows ownership for he.'
          }
        ],
        fa: [
          {
            question: 'We love ___ teacher.',
            options: ['we', 'our', 'us', 'ours'],
            correct: 1,
            explanation: 'Our صفت ملکی است.'
          },
          {
            question: '___ phone is new. (belonging to him)',
            options: ['He', 'Him', 'His', 'Her'],
            correct: 2,
            explanation: 'His مالکیت را برای he نشان می‌دهد.'
          }
        ]
      }
    }
  },
  {
    id: 'imperatives',
    title: {
      en: 'Imperatives (Commands)',
      fa: 'امری‌ها (دستورها)'
    },
    category: {
      en: 'Sentence Structure',
      fa: 'ساختار جمله'
    },
    tags: {
      en: ['imperative', 'commands', 'beginner'],
      fa: ['امری', 'دستور', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Imperatives are used to give commands, instructions, or requests.',
        fa: 'امری‌ها برای دستور دادن، راهنما دادن یا درخواست استفاده می‌شوند.'
      },
      rules: {
        en: [
          'Use the base verb without a subject',
          'Add please to make it polite',
          'Negative imperative: Do not + base verb',
          'Use it for instructions and directions',
          'You is understood, not written'
        ],
        fa: [
          'از شکل پایه فعل بدون فاعل استفاده کنید',
          'برای مؤدبانه شدن از please استفاده کنید',
          'امری منفی: Do not + فعل پایه',
          'برای دستور و راهنما استفاده می‌شود',
          'فاعل you به طور ضمنی وجود دارد'
        ]
      },
      examples: {
        en: [
          'Open the door. (command)',
          'Please sit down. (polite)',
          'Do not touch that. (negative)',
          'Turn left at the corner. (instruction)'
        ],
        fa: [
          'در را باز کن. (دستور)',
          'لطفاً بنشین. (مودبانه)',
          'به آن دست نزن. (منفی)',
          'سرِ چهارراه به چپ بپیچ. (راهنما)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'You open the door.',
            correct: 'Open the door.',
            explanation: 'Imperatives do not use a subject.'
          },
          {
            wrong: 'Don\'t to touch it.',
            correct: 'Don\'t touch it.',
            explanation: 'After don\'t, use the base verb.'
          }
        ],
        fa: [
          {
            wrong: 'You open the door.',
            correct: 'Open the door.',
            explanation: 'در امری فاعل نوشته نمی‌شود.'
          },
          {
            wrong: 'Don\'t to touch it.',
            correct: 'Don\'t touch it.',
            explanation: 'بعد از don\'t از فعل پایه استفاده می‌شود.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the imperative sentence.',
            options: ['You are late.', 'Open the window.', 'She opens the window.', 'I open the window.'],
            correct: 1,
            explanation: 'Imperatives use the base verb without subject.'
          },
          {
            question: 'Negative imperative:',
            options: ['Don\'t be late.', 'Not be late.', 'No be late.', 'Do not late.'],
            correct: 0,
            explanation: 'Use Don\'t + base verb.'
          }
        ],
        fa: [
          {
            question: 'کدام جمله امری است؟',
            options: ['You are late.', 'Open the window.', 'She opens the window.', 'I open the window.'],
            correct: 1,
            explanation: 'امری با فعل پایه و بدون فاعل می‌آید.'
          },
          {
            question: 'امری منفی کدام است؟',
            options: ['Don\'t be late.', 'Not be late.', 'No be late.', 'Do not late.'],
            correct: 0,
            explanation: 'ساختار درست: Don\'t + فعل پایه.'
          }
        ]
      }
    }
  },
  {
    id: 'basic-prepositions-in-on-at',
    title: {
      en: 'Basic Prepositions (in/on/at)',
      fa: 'حروف اضافه پایه (in/on/at)'
    },
    category: {
      en: 'Prepositions',
      fa: 'حروف اضافه'
    },
    tags: {
      en: ['prepositions', 'in-on-at', 'beginner'],
      fa: ['حروف اضافه', 'in/on/at', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use in, on, and at to talk about time and place in simple sentences.',
        fa: 'برای زمان و مکان در جملات ساده از in، on و at استفاده می‌شود.'
      },
      rules: {
        en: [
          'In for months, years, and long periods',
          'On for days and dates',
          'At for specific times',
          'In for enclosed places (in a room)',
          'On for surfaces; at for points (at the door)'
        ],
        fa: [
          'in برای ماه‌ها، سال‌ها و دوره‌های طولانی',
          'on برای روزها و تاریخ‌ها',
          'at برای زمان مشخص',
          'in برای مکان‌های بسته (in a room)',
          'on برای سطح و at برای نقطه (at the door)'
        ]
      },
      examples: {
        en: [
          'We meet at 7 o\'clock. (time)',
          'She was born in 2010. (year)',
          'The class is on Monday. (day)',
          'The keys are on the table. (surface)'
        ],
        fa: [
          'ما ساعت ۷ ملاقات می‌کنیم. (زمان)',
          'او در سال ۲۰۱۰ به دنیا آمد. (سال)',
          'کلاس روز دوشنبه است. (روز)',
          'کلیدها روی میز هستند. (سطح)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'I meet you in 5 o\'clock.',
            correct: 'I meet you at 5 o\'clock.',
            explanation: 'Use at for specific times.'
          },
          {
            wrong: 'She studies on 2012.',
            correct: 'She studies in 2012.',
            explanation: 'Use in for years.'
          }
        ],
        fa: [
          {
            wrong: 'I meet you in 5 o\'clock.',
            correct: 'I meet you at 5 o\'clock.',
            explanation: 'برای زمان مشخص از at استفاده می‌شود.'
          },
          {
            wrong: 'She studies on 2012.',
            correct: 'She studies in 2012.',
            explanation: 'برای سال از in استفاده می‌شود.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the correct preposition: I work ___ Monday.',
            options: ['in', 'on', 'at', 'to'],
            correct: 1,
            explanation: 'Use on with days.'
          },
          {
            question: 'Choose the correct preposition: The meeting is ___ 3 PM.',
            options: ['in', 'on', 'at', 'from'],
            correct: 2,
            explanation: 'Use at with specific times.'
          }
        ],
        fa: [
          {
            question: 'حرف اضافه درست را انتخاب کنید: I work ___ Monday.',
            options: ['in', 'on', 'at', 'to'],
            correct: 1,
            explanation: 'برای روز از on استفاده می‌شود.'
          },
          {
            question: 'حرف اضافه درست را انتخاب کنید: The meeting is ___ 3 PM.',
            options: ['in', 'on', 'at', 'from'],
            correct: 2,
            explanation: 'برای زمان مشخص از at استفاده می‌شود.'
          }
        ]
      }
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
  },
  {
    id: 'parts-of-speech',
    title: {
      en: 'Parts of Speech',
      fa: 'نقش‌های کلمات'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['basic', 'parts-of-speech', 'beginner'],
      fa: ['پایه', 'نقش‌های کلمات', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Words have different jobs in a sentence, such as naming things, showing actions, or describing.',
        fa: 'کلمات در جمله نقش‌های متفاوتی دارند؛ مانند نام‌گذاری، انجام عمل یا توصیف.'
      },
      rules: {
        en: [
          'Nouns name people, places, or things',
          'Verbs show actions or states',
          'Adjectives describe nouns',
          'Adverbs describe verbs or adjectives',
          'Pronouns replace nouns'
        ],
        fa: [
          'اسم‌ها افراد، مکان‌ها یا چیزها را نام می‌برند',
          'افعال عمل یا حالت را نشان می‌دهند',
          'صفت‌ها اسم‌ها را توصیف می‌کنند',
          'قیدها فعل یا صفت را توصیف می‌کنند',
          'ضمیرها به جای اسم می‌آیند'
        ]
      },
      examples: {
        en: [
          'Ali is a student. (noun)',
          'She runs fast. (verb)',
          'It is a red bag. (adjective)',
          'He speaks clearly. (adverb)'
        ],
        fa: [
          'علی یک دانش‌آموز است. (اسم)',
          'او سریع می‌دود. (فعل)',
          'این یک کیف قرمز است. (صفت)',
          'او واضح صحبت می‌کند. (قید)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'He good play football.',
            correct: 'He plays football well.',
            explanation: 'Use an adverb (well) to describe the verb, not an adjective (good).'
          },
          {
            wrong: 'She is teacher.',
            correct: 'She is a teacher.',
            explanation: 'Use an article before a singular countable noun.'
          }
        ],
        fa: [
          {
            wrong: 'He good play football.',
            correct: 'He plays football well.',
            explanation: 'برای توصیف فعل باید از قید (well) استفاده شود، نه صفت (good).'
          },
          {
            wrong: 'She is teacher.',
            correct: 'She is a teacher.',
            explanation: 'قبل از اسم مفرد قابل شمارش از a/an استفاده می‌شود.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the noun in the sentence: The cat sleeps.',
            options: ['The', 'cat', 'sleeps', 'fast'],
            correct: 1,
            explanation: 'Cat is the noun (a thing).'
          },
          {
            question: 'Which word is an adjective? The small house is blue.',
            options: ['small', 'house', 'is', 'blue'],
            correct: 0,
            explanation: 'Small describes the noun house.'
          }
        ],
        fa: [
          {
            question: 'اسم را انتخاب کنید: The cat sleeps.',
            options: ['The', 'cat', 'sleeps', 'fast'],
            correct: 1,
            explanation: 'Cat یک اسم است (چیز).'
          },
          {
            question: 'کدام کلمه صفت است؟ The small house is blue.',
            options: ['small', 'house', 'is', 'blue'],
            correct: 0,
            explanation: 'Small اسم house را توصیف می‌کند.'
          }
        ]
      }
    }
  },
  {
    id: 'sentence-basics',
    title: {
      en: 'Sentence Basics (S + V + O)',
      fa: 'مبانی جمله (فاعل + فعل + مفعول)'
    },
    category: {
      en: 'Sentence Structure',
      fa: 'ساختار جمله'
    },
    tags: {
      en: ['subject', 'verb', 'object', 'order'],
      fa: ['فاعل', 'فعل', 'مفعول', 'ترتیب']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Basic English sentences often follow Subject + Verb + Object order.',
        fa: 'جملات ساده انگلیسی معمولاً ترتیب فاعل + فعل + مفعول دارند.'
      },
      rules: {
        en: [
          'Subject tells who or what the sentence is about',
          'Verb shows the action or state',
          'Object receives the action',
          'English word order is usually S + V + O',
          'Time/place can come at the end'
        ],
        fa: [
          'فاعل نشان می‌دهد درباره چه کسی یا چه چیزی است',
          'فعل عمل یا حالت را نشان می‌دهد',
          'مفعول عمل را دریافت می‌کند',
          'ترتیب رایج انگلیسی فاعل + فعل + مفعول است',
          'زمان/مکان معمولاً در پایان می‌آید'
        ]
      },
      examples: {
        en: [
          'Sara eats an apple. (S+V+O)',
          'They play football. (S+V+O)',
          'I read books at night. (time at end)',
          'The teacher explains the lesson. (S+V+O)'
        ],
        fa: [
          'سارا یک سیب می‌خورد. (فاعل+فعل+مفعول)',
          'آنها فوتبال بازی می‌کنند. (فاعل+فعل+مفعول)',
          'من شب‌ها کتاب می‌خوانم. (زمان در پایان)',
          'معلم درس را توضیح می‌دهد. (فاعل+فعل+مفعول)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'Eats Sara an apple.',
            correct: 'Sara eats an apple.',
            explanation: 'English sentences usually start with the subject.'
          },
          {
            wrong: 'I to school go.',
            correct: 'I go to school.',
            explanation: 'Keep the verb after the subject in basic sentences.'
          }
        ],
        fa: [
          {
            wrong: 'Eats Sara an apple.',
            correct: 'Sara eats an apple.',
            explanation: 'در انگلیسی معمولاً جمله با فاعل شروع می‌شود.'
          },
          {
            wrong: 'I to school go.',
            correct: 'I go to school.',
            explanation: 'در جملات ساده، فعل بعد از فاعل می‌آید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the correct order: (eat / I / breakfast).',
            options: ['I eat breakfast.', 'Eat I breakfast.', 'Breakfast eat I.', 'I breakfast eat.'],
            correct: 0,
            explanation: 'Subject + verb + object is the correct order.'
          },
          {
            question: 'Which word is the subject? "The boy kicks the ball."',
            options: ['boy', 'kicks', 'ball', 'the'],
            correct: 0,
            explanation: 'Boy is the subject.'
          }
        ],
        fa: [
          {
            question: 'ترتیب درست را انتخاب کنید: (eat / I / breakfast).',
            options: ['I eat breakfast.', 'Eat I breakfast.', 'Breakfast eat I.', 'I breakfast eat.'],
            correct: 0,
            explanation: 'ترتیب درست فاعل + فعل + مفعول است.'
          },
          {
            question: 'در جمله "The boy kicks the ball" فاعل کدام است؟',
            options: ['boy', 'kicks', 'ball', 'the'],
            correct: 0,
            explanation: 'Boy نقش فاعل دارد.'
          }
        ]
      }
    }
  },
  {
    id: 'capitalization-punctuation-basics',
    title: {
      en: 'Capitalization & Punctuation Basics',
      fa: 'مبانی حروف بزرگ و نشانه‌گذاری'
    },
    category: {
      en: 'Writing Basics',
      fa: 'مبانی نوشتن'
    },
    tags: {
      en: ['capitalization', 'punctuation', 'writing'],
      fa: ['حروف بزرگ', 'نشانه‌گذاری', 'نوشتن']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use capital letters and punctuation to make sentences clear and correct.',
        fa: 'برای وضوح و درستی جمله‌ها از حروف بزرگ و نشانه‌گذاری استفاده کنید.'
      },
      rules: {
        en: [
          'Start a sentence with a capital letter',
          'Use a period for statements',
          'Use a question mark for questions',
          'Capitalize names and places',
          'Use commas to separate items in a list'
        ],
        fa: [
          'جمله را با حرف بزرگ شروع کنید',
          'برای جمله خبری از نقطه استفاده کنید',
          'برای سوال از علامت سوال استفاده کنید',
          'نام افراد و مکان‌ها را با حرف بزرگ بنویسید',
          'برای جدا کردن موارد در فهرست از ویرگول استفاده کنید'
        ]
      },
      examples: {
        en: [
          'My name is Ali. (capital + period)',
          'Do you like tea? (question mark)',
          'Sara, Tom, and Nina are friends. (commas)',
          'We live in Tehran. (proper noun)'
        ],
        fa: [
          'نام من علی است. (حرف بزرگ + نقطه)',
          'آیا چای دوست داری؟ (علامت سوال)',
          'سارا، تام و نینا دوست هستند. (ویرگول)',
          'ما در تهران زندگی می‌کنیم. (اسم خاص)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'i am happy.',
            correct: 'I am happy.',
            explanation: 'Start sentences and the pronoun I with capital letters.'
          },
          {
            wrong: 'Where are you.',
            correct: 'Where are you?',
            explanation: 'Questions need a question mark.'
          }
        ],
        fa: [
          {
            wrong: 'i am happy.',
            correct: 'I am happy.',
            explanation: 'جمله و ضمیر I باید با حرف بزرگ نوشته شوند.'
          },
          {
            wrong: 'Where are you.',
            correct: 'Where are you?',
            explanation: 'جمله‌های سوالی باید علامت سوال داشته باشند.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the correctly punctuated sentence.',
            options: ['Where is ali.', 'Where is Ali?', 'where is Ali?', 'Where is ali?'],
            correct: 1,
            explanation: 'Start with capital and use a question mark.'
          },
          {
            question: 'Which sentence uses commas correctly?',
            options: ['I bought apples oranges and bananas.', 'I bought apples, oranges, and bananas.', 'I bought apples oranges, and bananas.', 'I bought apples, oranges and bananas.'],
            correct: 1,
            explanation: 'Use commas between items in a list.'
          }
        ],
        fa: [
          {
            question: 'کدام جمله درست نشانه‌گذاری شده است؟',
            options: ['Where is ali.', 'Where is Ali?', 'where is Ali?', 'Where is ali?'],
            correct: 1,
            explanation: 'حرف بزرگ و علامت سوال لازم است.'
          },
          {
            question: 'کدام جمله ویرگول‌گذاری درست دارد؟',
            options: ['I bought apples oranges and bananas.', 'I bought apples, oranges, and bananas.', 'I bought apples oranges, and bananas.', 'I bought apples, oranges and bananas.'],
            correct: 1,
            explanation: 'بین موارد فهرست از ویرگول استفاده کنید.'
          }
        ]
      }
    }
  },
  {
    id: 'to-be',
    title: {
      en: 'To Be (am/is/are)',
      fa: 'فعل To Be (am/is/are)'
    },
    category: {
      en: 'Verbs',
      fa: 'افعال'
    },
    tags: {
      en: ['to-be', 'am-is-are', 'beginner'],
      fa: ['to-be', 'am/is/are', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use am, is, or are to describe states and identities in the present.',
        fa: 'برای بیان حالت و هویت در زمان حال از am، is یا are استفاده کنید.'
      },
      rules: {
        en: [
          'I am, he/she/it is, you/we/they are',
          'Use not for negatives: am not, is not, are not',
          'Questions: Am I? Is he/she? Are you/we/they?',
          'To be is a main verb in these sentences',
          'Use contractions in speaking: I\'m, he\'s, they\'re'
        ],
        fa: [
          'I am، he/she/it is، you/we/they are',
          'برای منفی از not استفاده کنید: am not, is not, are not',
          'سوالی: Am I? Is he/she? Are you/we/they?',
          'در این جملات to be فعل اصلی است',
          'در گفتار از شکل کوتاه استفاده می‌شود: I\'m, he\'s, they\'re'
        ]
      },
      examples: {
        en: [
          'I am tired. (state)',
          'She is a doctor. (identity)',
          'We are ready. (state)',
          'Are they at home? (question)'
        ],
        fa: [
          'من خسته هستم. (حالت)',
          'او یک پزشک است. (هویت)',
          'ما آماده هستیم. (حالت)',
          'آیا آنها در خانه هستند؟ (سوال)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'He are happy.',
            correct: 'He is happy.',
            explanation: 'Use is with he/she/it.'
          },
          {
            wrong: 'I is a student.',
            correct: 'I am a student.',
            explanation: 'Use am with I.'
          }
        ],
        fa: [
          {
            wrong: 'He are happy.',
            correct: 'He is happy.',
            explanation: 'برای he/she/it باید از is استفاده شود.'
          },
          {
            wrong: 'I is a student.',
            correct: 'I am a student.',
            explanation: 'برای I باید از am استفاده شود.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'She ___ my sister.',
            options: ['am', 'is', 'are', 'be'],
            correct: 1,
            explanation: 'Use is with she.'
          },
          {
            question: '___ you ready?',
            options: ['Am', 'Is', 'Are', 'Be'],
            correct: 2,
            explanation: 'Use are with you in questions.'
          }
        ],
        fa: [
          {
            question: 'She ___ my sister.',
            options: ['am', 'is', 'are', 'be'],
            correct: 1,
            explanation: 'برای she از is استفاده می‌شود.'
          },
          {
            question: '___ you ready?',
            options: ['Am', 'Is', 'Are', 'Be'],
            correct: 2,
            explanation: 'در سوال با you از are استفاده می‌شود.'
          }
        ]
      }
    }
  },
  {
    id: 'there-is-are',
    title: {
      en: 'There is / There are',
      fa: 'There is / There are'
    },
    category: {
      en: 'Grammar Basics',
      fa: 'مبانی دستور زبان'
    },
    tags: {
      en: ['there-is', 'there-are', 'beginner'],
      fa: ['there is', 'there are', 'مبتدی']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Use there is for singular and there are for plural to say something exists.',
        fa: 'برای بیان وجود، there is برای مفرد و there are برای جمع استفاده می‌شود.'
      },
      rules: {
        en: [
          'Use there is with singular nouns',
          'Use there are with plural nouns',
          'Negative: there is not / there are not',
          'Questions: Is there...? / Are there...?',
          'Use some/any with plural or uncountable nouns'
        ],
        fa: [
          'برای اسم مفرد از there is استفاده کنید',
          'برای اسم جمع از there are استفاده کنید',
          'منفی: there is not / there are not',
          'سوالی: Is there...? / Are there...?',
          'برای جمع یا غیرقابل شمارش از some/any استفاده کنید'
        ]
      },
      examples: {
        en: [
          'There is a book on the table. (singular)',
          'There are two chairs. (plural)',
          'Is there any milk? (question)',
          'There are not any students here. (negative)'
        ],
        fa: [
          'یک کتاب روی میز هست. (مفرد)',
          'دو صندلی وجود دارد. (جمع)',
          'آیا شیر وجود دارد؟ (سوال)',
          'هیچ دانش‌آموزی اینجا نیست. (منفی)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'There are a cat in the room.',
            correct: 'There is a cat in the room.',
            explanation: 'Use there is with singular nouns.'
          },
          {
            wrong: 'There is two books.',
            correct: 'There are two books.',
            explanation: 'Use there are with plural nouns.'
          }
        ],
        fa: [
          {
            wrong: 'There are a cat in the room.',
            correct: 'There is a cat in the room.',
            explanation: 'برای اسم مفرد از there is استفاده کنید.'
          },
          {
            wrong: 'There is two books.',
            correct: 'There are two books.',
            explanation: 'برای اسم جمع از there are استفاده کنید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: '___ a pen on the desk.',
            options: ['There are', 'There is', 'Is there', 'Are there'],
            correct: 1,
            explanation: 'Singular noun uses there is.'
          },
          {
            question: '___ any students in class?',
            options: ['Is there', 'Are there', 'There is', 'There are'],
            correct: 1,
            explanation: 'Plural noun uses are there in questions.'
          }
        ],
        fa: [
          {
            question: '___ a pen on the desk.',
            options: ['There are', 'There is', 'Is there', 'Are there'],
            correct: 1,
            explanation: 'برای اسم مفرد از there is استفاده می‌شود.'
          },
          {
            question: '___ any students in class?',
            options: ['Is there', 'Are there', 'There is', 'There are'],
            correct: 1,
            explanation: 'برای اسم جمع در سوال از are there استفاده می‌شود.'
          }
        ]
      }
    }
  },
  {
    id: 'simple-questions',
    title: {
      en: 'Simple Questions (Yes/No & Wh-)',
      fa: 'سوال‌های ساده (بله/خیر و Wh-)'
    },
    category: {
      en: 'Questions',
      fa: 'سوال‌ها'
    },
    tags: {
      en: ['questions', 'yes-no', 'wh'],
      fa: ['سوال', 'بله/خیر', 'wh']
    },
    lang: 'en',
    sections: {
      summary: {
        en: 'Yes/No questions use do/does or to be. Wh- questions start with words like what, where, and when.',
        fa: 'سوال‌های بله/خیر از do/does یا to be استفاده می‌کنند و سوال‌های Wh- با واژه‌هایی مثل what و where شروع می‌شوند.'
      },
      rules: {
        en: [
          'Yes/No questions often start with Do/Does/Is/Are',
          'Use do/does with main verbs',
          'Use to be directly with subject',
          'Wh- questions start with what/where/when/who/why',
          'Word order: Question word + auxiliary + subject + verb'
        ],
        fa: [
          'سوال بله/خیر معمولاً با Do/Does/Is/Are شروع می‌شود',
          'با فعل اصلی از do/does استفاده کنید',
          'در جملات to be، فعل قبل از فاعل می‌آید',
          'سوال‌های Wh- با what/where/when/who/why شروع می‌شوند',
          'ترتیب: کلمه سوال + فعل کمکی + فاعل + فعل'
        ]
      },
      examples: {
        en: [
          'Do you like tea? (yes/no)',
          'Is she your teacher? (yes/no)',
          'Where do you live? (wh-)',
          'What time is it? (wh-)'
        ],
        fa: [
          'آیا چای دوست داری؟ (بله/خیر)',
          'آیا او معلم شماست؟ (بله/خیر)',
          'کجا زندگی می‌کنی؟ (Wh-)',
          'ساعت چند است؟ (Wh-)'
        ]
      },
      commonMistakes: {
        en: [
          {
            wrong: 'You like tea?',
            correct: 'Do you like tea?',
            explanation: 'Use do/does to form a basic question with a main verb.'
          },
          {
            wrong: 'Where you live?',
            correct: 'Where do you live?',
            explanation: 'Wh- questions need an auxiliary before the subject.'
          }
        ],
        fa: [
          {
            wrong: 'You like tea?',
            correct: 'Do you like tea?',
            explanation: 'در سوال با فعل اصلی باید از do/does استفاده شود.'
          },
          {
            wrong: 'Where you live?',
            correct: 'Where do you live?',
            explanation: 'در سوال Wh- فعل کمکی قبل از فاعل می‌آید.'
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'Choose the correct question.',
            options: ['You are hungry?', 'Are you hungry?', 'Hungry you are?', 'Are hungry you?'],
            correct: 1,
            explanation: 'Use are + subject for to be questions.'
          },
          {
            question: 'Which Wh- question is correct?',
            options: ['Where you are?', 'Where are you?', 'Where are?', 'Where you do?'],
            correct: 1,
            explanation: 'Wh- word + are + subject is correct.'
          }
        ],
        fa: [
          {
            question: 'کدام سوال درست است؟',
            options: ['You are hungry?', 'Are you hungry?', 'Hungry you are?', 'Are hungry you?'],
            correct: 1,
            explanation: 'برای سوال to be از are + فاعل استفاده می‌شود.'
          },
          {
            question: 'کدام سوال Wh- درست است؟',
            options: ['Where you are?', 'Where are you?', 'Where are?', 'Where you do?'],
            correct: 1,
            explanation: 'ترتیب درست: کلمه سوال + are + فاعل.'
          }
        ]
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { grammarTopics };
}
