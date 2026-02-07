const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4173',
    headless: true
  },
  webServer: {
    command: 'npx http-server . -p 4173 -c-1',
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
});
