import fs from 'fs';

export function readJSON(filePath: string) {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

