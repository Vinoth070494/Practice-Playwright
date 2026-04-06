import { test, expect } from '@playwright/test';

test('Validate My IP Information page', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/my-ip');

  // Validate IPv4 exists and format is correct
  const ipv4 = page.locator('#ipv4');
  await expect(ipv4).toBeVisible();
  await expect(ipv4).toHaveText(/IPv4: 49.37.211.65/);

  // Validate IPv6 (can be Not Detected)
  const ipv6 = page.locator('#ipv6');
  await expect(ipv6).toBeVisible();

  // Validate Country
  await expect(page.locator('#country')).toContainText('India');

  // Validate City
  await expect(page.locator('#city')).not.toBeEmpty();

  // Validate Timezone
  await expect(page.locator('#timezone')).toContainText('Asia/');
});
