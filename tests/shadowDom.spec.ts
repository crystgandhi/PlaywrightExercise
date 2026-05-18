import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Handle Shadow DOM using ZeroStep AI', async ({ page }) => {

  // Navigate to the Shadow DOM page
  await page.goto('https://practice.expandtesting.com/shadowdom');
  // Using Playwright locator chaining for Shadow DOM
  await page.locator('#shadow-host').locator('#my-btn').click();
  // Using ZeroStep AI
  await ai('Click the button inside the shadow DOM', { page, test });
});