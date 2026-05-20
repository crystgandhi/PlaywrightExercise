import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Handle New Tab and Popup Window using ZeroStep AI + evaluateHandle', async ({ page, context }) => {
  // Navigate
  await page.goto('https://testautomationpractice.blogspot.com/');
  // Get JSHandle for window object
  const windowHandle = await page.evaluateHandle(() => window);
  // Read current URL using evaluateHandle
  const currentUrl = await windowHandle.evaluate((win: Window) => win.location.href);
  console.log('Current URL:', currentUrl);
   const [newTab] = await Promise.all([
    // Wait for new page/tab
    context.waitForEvent('page'),
    // ZeroStep AI action
    ai('Click on the New Tab button',  { page, test }  )  ]);
  await newTab.waitForLoadState();
  console.log('New Tab Title:', await newTab.title());
  // evaluateHandle on new tab
  const newTabWindow = await newTab.evaluateHandle(() => window);
  const newTabUrl = await newTabWindow.evaluate((win: Window) => win.location.href);
  console.log('New Tab URL:', newTabUrl);
  
  // Handle POPUP WINDOW
    const [popup] = await Promise.all([
    // Wait for popup event
    page.waitForEvent('popup'),
    // ZeroStep AI action
    ai('Click on the Popup Windows button', { page, test } )  ]);
  await popup.waitForLoadState();
  console.log('Popup Title:', await popup.title());
  // evaluateHandle on popup window
  const popupWindow = await popup.evaluateHandle(() => window);
  const popupUrl = await popupWindow.evaluate((win: Window) => win.location.href);
  console.log('Popup URL:', popupUrl);
  // Assertion
  await expect(newTab).toHaveURL(/./);
  await expect(popup).toHaveURL(/./);
});