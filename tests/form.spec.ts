import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('AI student registration form filling', async ({ page }) => {

  const aiParameters = { page, test };

  await page.goto('https://demoqa.com/automation-practice-form');

  await ai('Enter John as First Name', aiParameters);

await ai('Enter Smith as Last Name', aiParameters);

await ai('Enter johnsmith@test.com as Email', aiParameters);

await ai('Select Male as Gender', aiParameters);

await ai('Enter 9876543210 as Mobile Number', aiParameters);

await ai('Enter 15 August 2000 as Date of Birth', aiParameters);

await ai('Enter Computer Science in Subjects', aiParameters);

await ai('Select Sports and Reading as Hobbies', aiParameters);

await ai('Find the Current Address field', aiParameters);

await page.locator('#currentAddress').fill('25 Park Avenue, New York');

await page.locator('#state').click();
await page.getByText('NCR').click();

await page.locator('#city').click();
await page.getByText('Delhi').click();
await ai('Click Submit button', aiParameters);
});

