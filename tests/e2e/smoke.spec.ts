import { expect, test } from '@playwright/test';

test.describe('landing page', () => {
  test('loads English homepage with key sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Juan José Granados');
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#expertise')).toBeVisible();
    await expect(page.locator('#work')).toBeVisible();
    await expect(page.locator('#education')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('navigates to Spanish locale', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /ES|\.\/es/i }).first().click();
    await expect(page).toHaveURL(/\/es$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Juan José Granados');
    await expect(page.locator('#about')).toBeVisible();
  });

  test('stays dark-only without theme switcher', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('[data-theme-select]')).toHaveCount(0);
  });

  test('professional links are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href^="mailto:juanjogramo@gmail.com"]').first()).toBeVisible();
    await expect(page.locator('a[href="https://github.com/juanjogramo"]').first()).toBeVisible();
    await expect(
      page.locator('a[href="https://linkedin.com/in/juanjogramo"]').first(),
    ).toBeVisible();
  });

  test('section anchors are reachable from nav', async ({ page }, testInfo) => {
    await page.goto('/');
    if (testInfo.project.name === 'mobile') {
      await page.getByRole('button', { name: /Open menu|Abrir menú/i }).click();
      await page.locator('#mobile-nav').getByRole('link', { name: /Experience/i }).click();
    } else {
      await page
        .getByRole('navigation', { name: 'Primary' })
        .getByRole('link', { name: /Experience/i })
        .click();
    }
    await expect(page.locator('#experience')).toBeVisible();
  });

  test('shows portrait photo', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('img.hero__portrait');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', /portrait\.jpg/);
  });
});
