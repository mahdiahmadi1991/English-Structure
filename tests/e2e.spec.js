const { test, expect } = require('@playwright/test');

function createConsoleErrorTracker(page) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  return {
    errors,
    async assertNoErrors() {
      await page.waitForTimeout(300);
      expect(errors).toEqual([]);
    }
  };
}

async function waitForTopicData(page) {
  await page.waitForResponse((response) => response.url().includes('/data/levels/level-') && response.ok());
}

test('homepage loads', async ({ page }) => {
  const tracker = createConsoleErrorTracker(page);

  await page.goto('/');

  await expect(page.locator('#appTitle')).not.toHaveText('');
  await expect.poll(async () => page.locator('.topic-item').count()).toBeGreaterThan(0);

  await tracker.assertNoErrors();
});

test('level filter options + selection', async ({ page }) => {
  const tracker = createConsoleErrorTracker(page);

  await page.goto('/');

  const levelSelect = page.locator('#levelSelect');
  await expect(levelSelect).toBeVisible();
  await expect.poll(() => levelSelect.locator('option').count()).toBeGreaterThanOrEqual(7);
  await expect(levelSelect).toContainText('Beginner');

  const totalCount = await page.locator('.topic-item').count();
  await page.selectOption('#levelSelect', '2');
  await expect.poll(() => page.locator('.topic-item').count()).toBeGreaterThan(0);
  await expect.poll(() => page.locator('.topic-item').count()).toBeLessThan(totalCount);

  await tracker.assertNoErrors();
});

test('language toggle + RTL', async ({ page }) => {
  const tracker = createConsoleErrorTracker(page);

  await page.goto('/');

  await page.click('[data-lang="fa"]');
  await page.waitForFunction(() => document.documentElement.lang === 'fa');
  await expect.poll(() => page.evaluate(() => document.documentElement.dir)).toBe('rtl');
  await expect(page.locator('#categoryFilterLabel')).not.toHaveText('');
  await expect(page.locator('#categoryFilterLabel')).not.toHaveText('Filter by category:');

  await page.click('[data-lang="en"]');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  await expect.poll(() => page.evaluate(() => document.documentElement.dir)).toBe('ltr');
  await expect(page.locator('#categoryFilterLabel')).toHaveText('Filter by category:');

  await tracker.assertNoErrors();
});

test('level filter shows absolute beginner topics', async ({ page }) => {
  const tracker = createConsoleErrorTracker(page);

  await page.goto('/');

  await expect.poll(async () => page.locator('.topic-item').count()).toBeGreaterThan(0);
  await page.selectOption('#levelSelect', '0');

  await expect(
    page.locator('.topic-item-title', {
      hasText: 'Parts of Speech (Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Determiner)'
    })
  ).toBeVisible();

  await tracker.assertNoErrors();
});

test('routing + topic render', async ({ page }) => {
  const tracker = createConsoleErrorTracker(page);

  await page.goto('/#present-simple');

  await waitForTopicData(page);

  await expect(page.locator('#topicTitle')).not.toHaveText('');
  await expect(page.locator('#summaryContent')).not.toHaveText('');
  await expect.poll(async () => page.locator('#rulesContent li').count()).toBeGreaterThan(0);
  await expect.poll(async () => page.locator('#examplesContent li').count()).toBeGreaterThan(0);

  await tracker.assertNoErrors();
});

test('notes save notification', async ({ page }) => {
  const tracker = createConsoleErrorTracker(page);
  const noteText = 'Playwright note';

  await page.goto('/#present-simple');
  await waitForTopicData(page);
  const notesAccordion = page.locator('.accordion-item').last().locator('.accordion-header');
  await notesAccordion.click();
  await expect(page.locator('#notesTextarea')).toBeVisible();
  await page.fill('#notesTextarea', noteText);
  await page.click('#saveNotesBtn');

  const toast = page.locator('[data-testid="toast"]');
  await expect(toast).toBeVisible();
  await expect(toast).not.toHaveText('');

  await page.reload();
  await expect(page.locator('#notesTextarea')).toHaveValue(noteText);

  await tracker.assertNoErrors();
});
