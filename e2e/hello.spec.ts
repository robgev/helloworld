import { expect, test } from '@playwright/test';

test('hello route renders visible heading with QA hooks', async ({ page }) => {
  await page.goto('/hello');

  const heading = page.getByTestId('hello-text');
  const container = page.getByTestId('hello-container');

  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Hello World');
  await expect(heading).toHaveAttribute('data-hello-world', 'text');
  await expect(container).toHaveAttribute('data-hello-world', 'container');
});

test('respects reduced motion preference', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-reduced-motion', 'Only relevant for reduced-motion project');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/hello');

  const motionSnapshot = await page.locator('[data-testid="hello-text"]').evaluate((node) => {
    const element = node as HTMLElement;
    const style = window.getComputedStyle(element);
    return {
      animationName: style.animationName,
      animationDuration: style.animationDuration,
      opacity: style.opacity,
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };
  });

  expect(motionSnapshot.reduced).toBe(true);
  expect(motionSnapshot.opacity).toBe('1');
  expect(motionSnapshot.animationDuration === '0s' || motionSnapshot.animationName === 'none').toBe(true);
});
