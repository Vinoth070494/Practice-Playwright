import { test, expect } from '@playwright/test';
 
test('Add element dynamic ', async ({ page }) => {
 
  await page.goto('https://practice.expandtesting.com/add-remove-elements');

 await page.getByRole("button" ,{ name:"Add Element"}).click();
 
const deleteButton = page.getByRole('button', { name: 'Delete' });
  await expect(deleteButton).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
    await expect(deleteButton).toHaveCount(0);
await page.pause();

}); 