import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Ai test Example', async ({ page }) => {
  const aiParameters = { page, test }
  await page.goto('https://automationexercise.com/products');
  const blueTop = await ai("What is the price of Blue Top", aiParameters);
  const blueTopPrice = blueTop.split('Rs. ')[1];
  console.log(blueTopPrice);
  expect(blueTopPrice).toEqual("500");
  const greenTop = await ai("What is the price of Fancy Green Top", aiParameters);
  const greenTopPrice = greenTop.split('Rs. ')[1];
  console.log(greenTopPrice);
  expect(greenTopPrice).toEqual("700");
  const difference = await ai(
    `What is the difference between ${greenTopPrice} and ${blueTopPrice}?`,
    aiParameters
  );
  console.log(difference);
  await ai(
    'Find the Fancy Green Top product and click its Add to cart button',
    aiParameters
  );
  await ai('Click View Cart', aiParameters);

  await expect(page).toHaveURL(/view_cart/);
  await expect(page.getByText('Fancy Green Top')).toBeVisible();
})


