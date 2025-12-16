import { expect, test } from '@playwright/test';

test('hello demo renders with qa hooks', async ({ page }) => {
  await page.goto('/hello');

  const container = page.getByTestId('hello-container');
  const text = page.getByTestId('hello-text');

  await expect(container).toBeVisible();
  await expect(text).toHaveText('Hello World');
});

test('respects prefers-reduced-motion setting', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/hello');

  const container = page.getByTestId('hello-container');
  await expect(container).toHaveAttribute('data-reduced-motion', 'true');
});
