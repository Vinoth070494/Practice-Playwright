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