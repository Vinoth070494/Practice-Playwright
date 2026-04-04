import { test, expect } from '@playwright/test';
 
test('Notify message ', async ({ page }) => {
 
  await page.goto('https://practice.expandtesting.com/notification-message-rendered');
  await page.getByRole("link", { name: 'Click here' }).click();
  
const notification = page.locator('#flash');
  await expect(notification).toBeVisible();

  const message= await page.locator("#flash").innerText();
  console.log(message);


});