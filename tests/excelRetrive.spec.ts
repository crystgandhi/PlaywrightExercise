import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';

test('Read Excel File in Playwright TypeScript', async ({ page }) => {
  // Create workbook object
  const workbook = new ExcelJS.Workbook();
  // Read Excel file
  await workbook.xlsx.readFile('C:/Users/Nikil/Downloads/excelDownload.xlsx');
  // Get worksheet
  const worksheet = workbook.getWorksheet('Sheet1');
  // Read all rows and cells
  worksheet?.eachRow((row, rowNumber) => {
    console.log(`Row Number: ${rowNumber}`);
    row.eachCell((cell, colNumber) => {
      console.log(`Column: ${colNumber}  Value: ${cell.value}`);
    });
  });
});