import { test, expect } from '@playwright/test';

test('Navigate to OrangeHRM, login and select Admin option', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Select Admin option from menu
  await page.getByRole('link', { name: 'Admin' }).click();

  // Assert that Admin page is loaded
  await expect(page).toHaveURL(/admin/);
});