import { test, expect } from '@playwright/test';


const products = ['Blue Top', 'Summer White Top', 'Pure Cotton V-Neck T-Shirt'];
for (const product of products) {
  test(`Search product ${product}`, async ({ page }) => {
    await page.goto('https://automationexercise.com/products');
    await page.getByPlaceholder('Search Product').fill(product);
    await page.click('#submit_search');
    await expect(page).toHaveURL(
      `https://automationexercise.com/products?search=${encodeURIComponent(product)}`
    );
  });
}
