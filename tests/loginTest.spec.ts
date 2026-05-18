import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('AI Login Test', async ({ page }) => {
    const aiParameters = { page, test };
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    // AI performs login
    await ai(
        'Login using username student and password Password123',
        aiParameters
    );
    await page.locator('#submit').click();
   
   // Assertions
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");
    await expect(
        page.getByText('Congratulations student')
    ).toBeVisible();
    await expect(
        page.getByRole('link', { name: 'Log out' })
    ).toBeVisible();
});