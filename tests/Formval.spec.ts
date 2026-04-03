import { test, expect, Locator } from '@playwright/test';
 
test('Form Submit', async ({ page }) => {

await page.goto('https://practice.expandtesting.com/form-validation');

await page.fill('#validationCustom01','Vinoth');
await page.fill('#validationCustom05','012-2012354');

//date
 const Dateinput=page.locator('#validationCustom05').nth(1);
 await Dateinput.click();
await page.keyboard.type("03-04-2026");
await page.waitForTimeout(2000);

//dropdown selection direct insert the value
await page.locator('#validationCustom04').selectOption({label:'cash on delivery'});
//await page.locator('text="payment"').click();
//await expect(page.locator('#validationCustom04')).toHaveValue('cash on delivery');

 await page.getByRole("button", { name: ' Register ' }).click();
 await expect(page.getByRole('alert')).toContainText('ticket');

 const SuccessMsg1 = await page.locator(".alert").innerText();
  console.log("Success Message:", SuccessMsg1);
  await page.pause();







});