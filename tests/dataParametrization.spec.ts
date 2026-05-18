import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';
const testData = [
  {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  {
    username: 'problem_user',
    password: 'secret_sauce'
  },
  {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  },
  {
    username: 'error_user',
    password: 'secret_sauce'
  },
  {
    username: 'visual_user',
    password: 'secret_sauce'
  },

];
for (const data of testData) {
  test(`Login with ${data.username}`, async ({ page }) => {
     const aiParameters = { page, test };
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', data.username);
    await page.fill('#password', data.password);
      await ai('Click Login button', aiParameters);
   // await page.click('#login-button');
  });
}






