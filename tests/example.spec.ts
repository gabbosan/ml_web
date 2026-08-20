import { test, expect } from '@playwright/test';

test('página inicial carrega', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/G F B/);
});
