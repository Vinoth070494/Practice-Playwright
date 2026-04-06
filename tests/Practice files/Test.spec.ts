import { test, expect} from "@playwright/test";

test.describe.configure({ mode: "serial" });

//
// 1.Register Page
//
test("1. Verify Register Page", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/register");
  await page.fill("#username", "Vinoth11");
  await page.fill("#password", "Vinoth@11");
  await page.fill("#confirmPassword", "Vinoth@11");
  await page.getByRole("button", { name: "Register" }).click();

  await expect(
    page.getByText("An error occurred during registration")
  ).toBeVisible();
});

// 2.valid Login

test("2. Verify Login Page Title", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");

  await page.fill("#username", "vinoth11");
  await page.fill("#password", "Vinoth@11");
  await page.click("#submit-login");

  await expect(page.locator("#flash")).toBeVisible();
});


// 3.Invalid Username 

test("3. Verify Invalid Username", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");
  await page.fill("#username", "vinoth00");
  await page.fill("#password", "Vinoth@11");
  await page.click("#submit-login");

  await expect(page.locator("#flash")).toContainText("Your username is invalid!");
});


// 4.Invalid Password 
test("4. Verify Invalid Password", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");
  await page.fill("#username", "vinoth11");
  await page.fill("#password", "Vinoth00123");
  await page.click("#submit-login");

  await expect(page.locator("#flash")).toContainText("Your password is invalid!");
});


// 5. Forgot password 

test("5. Verify Forgot Password Screen", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/forgot-password");

  await page.fill("#email", "anandhanvinoth5@gmail.com");
  await page.getByRole("button", { name: "Retrieve password" }).click();

  await expect(page.locator("#flash")).toBeVisible();
});