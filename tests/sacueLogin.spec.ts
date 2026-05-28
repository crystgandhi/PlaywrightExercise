import { readData } from '../utils/dataReader'
import { test, expect } from '@playwright/test';
import path from 'path';

/*const testData = readData(path.resolve(__dirname, '../test-data/username.json'));
test('Login Credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(testData.username);
    await page.locator('#password').fill(testData.password);
    await page.click('#login-button');
});*/
test.describe('Read Login Data from Files', ()=>{

const jsonData:any = readData(path.resolve(__dirname, '../test-data/username.json'));
for (const data of jsonData) {
  test(`Json Login with ${data.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(data.username);
    await page.locator('#password').fill(data.password);
    await page.click('#login-button');
  });
}

const csvData:any= readData(path.resolve(__dirname, '../test-data/username.csv'));
for (const [index, data] of csvData.entries()) {
  test(`CSV Login ${index + 1} with ${data.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(data.username);
    await page.locator('#password').fill(data.password);
    await page.click('#login-button');
  });
}

const excelData: any = readData(path.resolve(__dirname, '../test-data/username.xlsx'),  'Sheet1');
for (const [index, data] of excelData.entries()) {
  test(`Excel Login ${index + 1} with ${data.username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(data.username);
    await page.locator('#password').fill(data.password);
    await page.click('#login-button');
  });
}
});