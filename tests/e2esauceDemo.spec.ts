import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('SauceDemo AI checkout flow', async ({ page }) => {
  const aiParameters = { page, test };
  await page.goto('https://www.saucedemo.com/');
  // Login
  await ai('Enter standard_user as username', aiParameters);
  await ai('Type secret_sauce into the Password field', aiParameters);
 // await ai('Enter secret_sauce as password',  aiParameters);
  await ai('Click Login button', aiParameters);
  // Assertions after login
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
  // Add red t-shirt product
  await ai('Add Test.allTheThings() T-Shirt (Red) to the cart', aiParameters);
  // Open cart
  await ai('Click shopping cart', aiParameters);
  // Assertions in cart
  await expect(page).toHaveURL(/cart/);
  //await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
  //await expect(page.locator('.inventory_item_name')).toHaveText('Test.allTheThings() T-Shirt (Red)');
  // Checkout
  await ai('Click Checkout button', aiParameters);
  // Checkout page assertions
  await expect(page).toHaveURL(/checkout-step-one/);
  await expect(page.getByText('Checkout: Your Information')).toBeVisible();
});

