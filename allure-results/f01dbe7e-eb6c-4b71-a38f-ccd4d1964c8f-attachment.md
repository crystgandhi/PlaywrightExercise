# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\getRequest.spec.ts >> APi Tests >> Post Request
- Location: tests\api\getRequest.spec.ts:20:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'data')
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { Logger } from '../../helpers/logger';
  3  | 
  4  | test.describe('APi Tests', () => {
  5  | 
  6  |     test('Get Request', async ({ request }) => {
  7  |         const baseURL = 'https://reqres.in/api';
  8  |         Logger.info('Making Get Call');
  9  |         const apiResponse = await request.get(`${baseURL}/users?page=2`, {
  10 |             headers: {
  11 |                 'x-api-key': 'free_user_3EJBEEJz1IkNwolcm1Yk5qPKorX'
  12 |             }
  13 |         })
  14 |         const responseBody = await apiResponse.json();
  15 |         console.log(responseBody);
  16 |         Logger.success(`API validated successfully with status: ${apiResponse.status()}`);
  17 |         Logger.info(`List of users: ${JSON.stringify(responseBody)}`);
  18 |     });
  19 | 
  20 |     test('Post Request', async ({ request }) => {
  21 |         const baseURL = 'https://reqres.in/api';
  22 |         Logger.info('Making Post Call');
  23 |         const apiResponse = await request.post(`${baseURL}/collections/products/records?project_id=25350`, {
  24 |             headers: {
  25 |                 'x-api-key': 'free_user_3EJBEEJz1IkNwolcm1Yk5qPKorX',
  26 |                 'Content-Type': 'application/json'
  27 |             },
  28 |              data: {
  29 |       data: {
  30 |         name: "Wireless Headphones",
  31 |         price: 59.99,
  32 |         category: "Electronics",
  33 |         in_stock: true
  34 |       }
  35 |     }
  36 |         })
  37 |         const responseBody = await apiResponse.json();
  38 |         console.log(responseBody);
  39 |         Logger.success(`API validated successfully with status: ${apiResponse.status()}`);
  40 |         Logger.info(`List of users: ${JSON.stringify(responseBody)}`);
> 41 |                expect(responseBody.data.data.name).toBe("Wireless Headphones");
     |                                         ^ TypeError: Cannot read properties of undefined (reading 'data')
  42 | expect(responseBody.data.data.category).toBe("Electronics");
  43 | expect(responseBody.data.data.in_stock).toBe(true);
  44 |     });
  45 | });
```