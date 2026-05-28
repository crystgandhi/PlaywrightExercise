import path from 'path';
import { readCSV } from '../utils/csvReader';
import { readExcel } from '../utils/excelReader';
import { readJSON } from '../utils/jsonReader';
import fs from 'fs';

export function readData(filePath: string, sheetName?: string) {
    if (!filePath) throw new Error('filePath is required');
    const normalizedPath = filePath.trim();
    const ext = path.extname(normalizedPath).toLowerCase();
    switch (ext) {
        case '.csv':
            console.log('.. I am reading CSV..');
            return readCSV(normalizedPath);
        case '.xlsx':
            console.log('.. I am reading EXCEL..');
            if (!sheetName) {
                throw new Error('Sheet name is required for Excel files');
            }
            return readExcel(normalizedPath, sheetName);
        case '.json':
            console.log('.. I am reading JSON..');
            return readJSON(normalizedPath);
        default:
            if (!ext) {throw new Error(
                    `Unsupported file type for "${filePath}": no file extension found.`
                );
            }
            throw new Error(`Unsupported file type: ${ext}`);
    }
}