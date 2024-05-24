import { test, expect } from '@playwright/test';

test('Page "Where to Buy"', async ({ page }) => {
  
  // Navigate to the main page
  await page.goto('');

  await page.getByRole('button', { name: 'Де купити' }).first().click();
  
  const mainSection = page.locator('#site-main');
  await expect(mainSection).toHaveText(/Хто ви?/); 
  const partnerButton = page.getByRole('button', { name: 'Стати партнером' });
  await expect(partnerButton).toBeVisible();
});