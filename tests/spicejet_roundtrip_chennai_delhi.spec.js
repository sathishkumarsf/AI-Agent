import { test, expect } from '@playwright/test';

test('SpiceJet - Round Trip Chennai to Delhi', async ({ page }) => {
  await page.goto('https://www.spicejet.com/', { waitUntil: 'networkidle' });

  // try to close cookie / welcome popups if present
  try { await page.locator('button:has-text("OK"), button:has-text("Accept"), button:has-text("Close")').first().click({ timeout: 2000 }); } catch(e) {}

  // Select Round Trip
  await page.locator('text=Round Trip').first().click();

  // Fill origin (Chennai)
  const fromInput = page.locator('input[placeholder*="From"], input[aria-label*="From"], input[aria-label*="Origin"]').first();
  await fromInput.click({ timeout: 5000 });
  await fromInput.fill('Chennai');
  await page.waitForTimeout(600);
  // pick the first suggestion containing Chennai
  await page.locator('text=Chennai').first().click();

  // Fill destination (Delhi)
  const toInput = page.locator('input[placeholder*="To"], input[aria-label*="To"], input[aria-label*="Destination"]').first();
  await toInput.click({ timeout: 5000 });
  await toInput.fill('Delhi');
  await page.waitForTimeout(600);
  await page.locator('text=Delhi').first().click();

  // Optional: verify values are set
  await expect(fromInput).toHaveValue(/Chennai/i);
  await expect(toInput).toHaveValue(/Delhi/i);
});
