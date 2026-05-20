import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test('Accessibility test', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const accessibilityScanResults =
    await new AxeBuilder({ page }).analyze();

  console.log(
    'Violations count:',
    accessibilityScanResults.violations.length
  );

  accessibilityScanResults.violations.forEach(v => {
    console.log('Rule:', v.id);
    console.log('Impact:', v.impact);
    console.log('Description:', v.description);
  });

});