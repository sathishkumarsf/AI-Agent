import { test, expect } from '@playwright/test';

test('Navigate to ParaBank, select Forgot login info, enter random details', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Click the Forgot login info? link
  await page.getByRole('link', { name: 'Forgot login info?' }).click();

  // Enter random details in the Customer Lookup form
  await page.locator('table tbody tr').filter({ hasText: 'First Name:' }).locator('input').fill('John');
  await page.locator('table tbody tr').filter({ hasText: 'Last Name:' }).locator('input').fill('Doe');
  await page.locator('table tbody tr').filter({ hasText: 'Address:' }).locator('input').fill('123 Main St');
  await page.locator('table tbody tr').filter({ hasText: 'City:' }).locator('input').fill('Anytown');
  await page.locator('table tbody tr').filter({ hasText: 'State:' }).locator('input').fill('CA');
  await page.locator('table tbody tr').filter({ hasText: 'Zip Code:' }).locator('input').fill('12345');
  await page.locator('table tbody tr').filter({ hasText: 'SSN:' }).locator('input').fill('123-45-6789');

  // Assert that the form is filled (e.g., check one field)
  await expect(page.locator('table tbody tr').filter({ hasText: 'First Name:' }).locator('input')).toHaveValue('John');
});
