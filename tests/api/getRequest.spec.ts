import { test, expect } from '@playwright/test'
import { Logger } from '../../helpers/logger';

test.describe('APi Tests', () => {
    test('Get Request', async ({ request }) => {
        const baseURL = 'https://reqres.in/api';
        Logger.info('Making Get Call');
        const apiResponse = await request.get(`${baseURL}/users?page=2`, {
            headers: {
                'x-api-key': 'free_user_3EJBEEJz1IkNwolcm1Yk5qPKorX'
            }
        })
        const responseBody = await apiResponse.json();
        console.log(responseBody);
        Logger.success(`API validated successfully with status: ${apiResponse.status()}`);
        Logger.info(`List of users: ${JSON.stringify(responseBody)}`);
    });


    test('Post Request', async ({ request }) => {
        const baseURL = 'https://reqres.in/api';
        Logger.info('Making Post Call');
        const apiResponse = await request.post(`${baseURL}/collections/products/records?project_id=25350`, {
            headers: {
                'x-api-key': 'free_user_3EJBEEJz1IkNwolcm1Yk5qPKorX',
                'Content-Type': 'application/json'
            },
             data: {
      data: {
        name: "Wireless Headphones",
        price: 59.99,
        category: "Electronics",
        in_stock: true
      }
    }
        })
        const responseBody = await apiResponse.json();
        console.log(responseBody);
        Logger.success(`API validated successfully with status: ${apiResponse.status()}`);
        Logger.info(`List of users: ${JSON.stringify(responseBody)}`);
               expect(responseBody.data.data.name).toBe("Wireless Headphones");
expect(responseBody.data.data.category).toBe("Electronics");
expect(responseBody.data.data.in_stock).toBe(true);
    });
});