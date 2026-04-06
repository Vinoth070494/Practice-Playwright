import { test, expect } from '@playwright/test';
 
test('File download Test', async ({ page }) => {
 
  await page.goto('https://practice.expandtesting.com/download');

  // Wait for download event
const downloadPromise = page.waitForEvent('download');
 
// Click on file link
await page.click('#1775133072702_DNDAgentFile.txt');
 
// Capture download
const download = await downloadPromise;
 
// Print file name
console.log(await download.suggestedFilename());
 
// Save file
await download.saveAs('vinoth/DNDagentfile.txt');
});