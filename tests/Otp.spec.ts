import { test, expect, Locator } from "@playwright/test";
// OTP task
test("1. OTP Task ", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/otp-login");
  await page.fill("#email", "practice@expandtesting.com");
  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Send OTP Code" }).click();
  await page.waitForTimeout(5000);

  const msg = await page.locator("#otp-message").innerText();
  console.log("Message:", msg);

  //number
  await page.fill("#otp", "214365");
  await page.getByRole("button", { name: "Verify OTP Code" }).click();
  //flash
  const msg_1 = await page.locator("#flash").innerText();
  console.log("Success Message:", msg_1);
});
