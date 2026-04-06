import { test, expect } from '@playwright/test';
 
test('File Upload Test', async ({ page }) => {
 
  await page.goto('https://practice.expandtesting.com/upload');
 
  // Upload file
  await page.locator('#fileInput').setInputFiles('tests/sampletest.pdf');

  await page.getByRole("button", { name: "Upload" }).click();
  await page.waitForTimeout(2000)


// Print the File Uploaded Message 
  const SuccessMsg = await page.locator("h1").innerText();
  console.log("Success Message:", SuccessMsg);
//Print the Success message in frame
  const SuccessMsg1 = await page.locator("#uploaded-files").innerText();
  console.log("Success Message:", SuccessMsg1);
 
  // Click upload button
 // await page.locator('#fileSubmit")').click();
 
});

//*[@id="fileInput"]