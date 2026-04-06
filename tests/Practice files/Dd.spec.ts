import { test, expect } from '@playwright/test';

 test('Drag and Drop ', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/drag-and-drop');

  const source=page.locator("#column-a");
  const target=page.locator("#column-b");
  await source.dragTo(target);
  await page.waitForTimeout(2000);

  //validate
  await expect(source).toContainText('B');
   await expect(target).toContainText('A');
   await page.waitForTimeout(2000);
}); 

test('Drag and Drop Circles', async ({ page }) => {
 
  // Open your page
  await page.goto('https://practice.expandtesting.com/drag-and-drop-circles');
 
  // Locators
  const greenCircle = page.locator('.green');      // change if needed
  const dropBox = page.locator('#target');     // change if needed
 
  // Drag and drop
  await greenCircle.dragTo(dropBox);
 
  // Optional validation
  //await expect(dropBox).toContainText('Dropped'); // depends on UI
});

