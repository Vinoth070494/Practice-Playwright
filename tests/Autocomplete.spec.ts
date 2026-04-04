import { test, expect,Locator } from '@playwright/test';

test('Autocomplete selection using mouse', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/autocomplete');

  // Step 1: Type into autocomplete field
  const input = page.locator('#country');
  await input.fill("ind");

  // Step 2: Wait for suggestions
  const suggestion = page.getByText('India');
  await expect(suggestion).toBeVisible();

  // Step 3: Select suggestion
  await suggestion.click();

  // Step 4: Validate selected value
  await expect(input).toHaveValue('India');

  await page.getByRole("button", { name: 'Submit' }).click();
 
  const message= await page.locator("#result").innerText();
  console.log(message);

});