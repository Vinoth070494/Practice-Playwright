import { test, expect } from '@playwright/test';

test('Browser Information Validation', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/my-browser');

  // Get browser details from navigator
  const browserInfo = await page.evaluate(() => {
    return {
      userAgent: navigator.userAgent,
       cookiesEnabled: navigator.cookieEnabled,
      CodeName: navigator.appCodeName,
      Name:navigator.appName,
      Version:navigator.appVersion,
      platform:navigator.platform,
    };
  });

  console.log(browserInfo);

});