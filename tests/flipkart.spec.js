import { test, expect } from '@playwright/test';

test('Navigate to Flipkart homepage and search for mac laptop', async ({ page }) => {
  await page.goto('https://www.flipkart.com/', { waitUntil: 'networkidle' });

  // Basic smoke checks
  await expect(page).toHaveURL('https://www.flipkart.com/');
  await expect(page).toHaveTitle(/Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More/);

  // Select the search bar and enter "mac laptop"
  await page.locator('input[name="q"]:not([readonly])').fill('mac laptop');
  await page.keyboard.press('Enter');

  // Wait for search results
  await page.waitForURL(/search/);
  await expect(page).toHaveURL(/mac.*laptop|laptop.*mac/i);
});