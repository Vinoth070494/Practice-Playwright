import { test, expect} from "@playwright/test";

// 1.login Page Kotak
test("1.login page ", async ({ page }) => {
  await page.goto("https://fynuat.kotakuat.bank.in/customer/portal#/login");
 await page.waitForTimeout(2000);
  await page.fill("#userName",'105360870');
  await page.getByRole("button", { name: "Next" }).click();
 await page.fill("#credentialInputField",'Quality@123'); 
 await page.getByRole("button", { name: "Secure Login" }).click();
   await page.pause();





});