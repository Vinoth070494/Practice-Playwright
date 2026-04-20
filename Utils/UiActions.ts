import { Page, expect } from '@playwright/test';

export class UIActions {
  constructor(private page: Page) {}

  //  PrimeNG / Generic Dropdown
  async selectDropdown(dropdown: string, value: string) {
    // Open dropdown
    await this.page.locator(dropdown).click();

    // Wait for dropdown panel
    const panel = this.page.locator('.ui-dropdown-panel');
    await panel.waitFor({ state: 'visible' });

    // Find option safely
    const option = panel
      .locator("li")
      .filter({ hasText: value });

    // Ensure option is rendered
    await expect(option).toBeVisible({ timeout: 10000 });

    // Click option (PrimeNG overlay safe)
    await option.click({ force: true });
  }

  //  Input
  async fillInput(locator: string, value: string) {
    const input = this.page.locator(locator);
    await expect(input).toBeVisible();
    await input.fill(value);
  }

  //  Button
  async clickButton(name: string) {
    const button = this.page.getByRole('button', { name });
    await expect(button).toBeEnabled();
    await button.click();
  }

  //  Checkbox
  async clickCheckbox(locator: string) {
    const checkbox = this.page.locator(locator);
    await expect(checkbox).toBeVisible();
    await checkbox.click();
  }

  //  Generic wait
  async waitForVisible(locator: string) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
  }
  
//  Radio button – select by label text
async selectRadioByLabel(labelText: string) {
  const radio = this.page.getByLabel(labelText, { exact: true });

  // Wait until radio is visible & enabled
  await radio.waitFor({ state: 'visible' });

  // Avoid re‑checking if already selected
  if (!(await radio.isChecked())) {
    await radio.check();
  }
}

}