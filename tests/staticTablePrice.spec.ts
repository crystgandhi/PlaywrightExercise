import { test, expect, Locator } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Retrieve price for Master in Java from static table', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://testautomationpractice.blogspot.com/');
  // Method 1: Using Playwright locators (without zerostep)
  const masterJavaRow = page.locator('table tr:has-text("Master In Java")');
  const priceCell = masterJavaRow.locator('td').last();
  const price = await priceCell?.textContent();
  console.log(`Price for Master in Java: ${price}`);
  expect(price?.trim()).toBe('2000');
  // Method 2: Using ZeroStep AI to retrieve price
  await ai('Find and extract the price for "Master in Java" from the static table on the page', { page, test });
});

test('Retrieve Master in Java price using evaluate', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://testautomationpractice.blogspot.com/');
  // Extract price using page.evaluate
  const price = await page.evaluate(() => {
    const tables = document.querySelectorAll('table');
    let masterJavaPrice: string | null = null;
    tables.forEach((table) => {
      const rows = table.querySelectorAll('tr');
      rows.forEach((row) => {
        const cells = row.querySelectorAll('td, th');
        const rowText = Array.from(cells)
          .map(cell => cell.textContent?.trim() || '')
          .join('|');
        if (rowText.includes('Master In Java')) {
          const priceCell = cells[cells.length - 1];
          masterJavaPrice = priceCell?.textContent?.trim() || null;
        }
      });
    });
    return masterJavaPrice;
  });
  console.log(`Master in Java Price: ${price}`);
  expect(price).toBe('2000');
});

test('Retrieve book details including Master in Java price', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://testautomationpractice.blogspot.com/');
  // Extract all book details from the first table
  const bookDetails = await page.evaluate(() => {
    const table = document.querySelector('table');
    if (!table) return null;

    const rows = table.querySelectorAll('tr');
    const books = [];

    // Skip header row (index 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row) continue;

      const cells = row.querySelectorAll('td, th');
      const bookName = cells[0]?.textContent?.trim() || '';
      const author = cells[1]?.textContent?.trim() || '';
      const subject = cells[2]?.textContent?.trim() || '';
      const price = cells[3]?.textContent?.trim() || '';

      books.push({ bookName, author, subject, price });

      if (bookName.includes('Master In Java')) {
        return { bookName, author, subject, price };
      }
    }

    return books;
  });

  console.log('Master in Java Details:', bookDetails);

  if (bookDetails && typeof bookDetails === 'object' && 'bookName' in bookDetails) {
    expect(bookDetails.bookName).toBe('Master In Java');
    expect(bookDetails.price).toBe('2000');
    expect(bookDetails.author).toBe('Amod');
    expect(bookDetails.subject).toBe('JAVA');
  }
});
