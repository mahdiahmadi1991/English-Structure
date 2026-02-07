const js = require('@eslint/js');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'dist/**'
    ]
  },
  {
    files: ['scripts/**/*.js', 'scripts/**/*.cjs', 'data/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        topicsIndex: 'readonly'
      }
    },
    ...js.configs.recommended,
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  }
];
