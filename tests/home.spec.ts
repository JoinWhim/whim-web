import { test, expect } from '@playwright/test';

test('home page shows main headline', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('home page shows floating logo header', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByAltText('Whim').first()).toBeVisible();
});
