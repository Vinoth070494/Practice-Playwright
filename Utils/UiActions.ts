import { Page, expect } from '@playwright/test';
 
export class UIActions {
  constructor(private page: Page) {}
 
  // ================= DROPDOWN =================
  async selectDropdown(dropdown: string, value: string) {
    await this.page.locator(dropdown).click();
 
    const panel = this.page.locator('.ui-dropdown-panel');
 
    if (await panel.isVisible()) {
      const option = panel.locator('li').filter({ hasText: value });
 
      await expect(option).toBeVisible({ timeout: 10000 });
      await option.click({ force: true });
    } else {
      // fallback (mat-select / normal select) 
      await this.page.getByRole('option', { name: value }).click();
    }
  }
 
  // ================= CUSTOM DROPDOWN =================
  async selectCustomDropdown(dropdown: string, value: string) {
    await this.page.locator(dropdown).click();
 
    const option = this.page.locator('li[role="option"]', {
      hasText: value
    });
 
    await expect(option).toBeVisible();
    await option.click({ force: true });
  }
 
  // ================= INPUT =================
  async fillInput(locator: string, value: string) {
    const input = this.page.locator(locator);
    await expect(input).toBeVisible();
    await input.fill(value);
  }
 
  // ================= BUTTON =================
  async clickButton(name: string) {
    const button = this.page.getByRole('button', { name });
    await expect(button).toBeEnabled();
    await button.click();
  }
 
  // ================= GENERIC CLICK =================
  async clickByLocator(locator: string) {
    const element = this.page.locator(locator);
    await expect(element).toBeVisible();
    await element.click();
  }
 
  // ================= CHECKBOX =================
  async clickCheckbox(locator: string) {
    const checkbox = this.page.locator(locator);
    await expect(checkbox).toBeVisible();
    await checkbox.click();
  }
 
  // ================= RADIO =================

async selectRadioByText(labelText: string) {
  const radio = this.page.locator('[role="radio"]', {
    hasText: labelText
  });

  await radio.waitFor({ state: 'visible' });
}
 
  // ================= WAIT =================
  async waitForVisible(locator: string) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
  }
 
  // ================= FILE UPLOAD =================
  async uploadFile(locator: string, filePath: string) {
    await this.page.locator(locator).setInputFiles(filePath);
  }
 
  // ================= GET TEXT =================
  async getText(locator: string): Promise<string> {
    const element = this.page.locator(locator);
    await element.waitFor({ state: 'visible' });
    return (await element.textContent())?.trim() || '';
  }
 
  // ================= TABLE SELECTION =================
  async selectFromTable(locator: string, value: string) {
    const row = this.page
      .locator(locator)
      .filter({ hasText: value })
      .first();
 
    await expect(row).toBeVisible();
    await row.click();
  }
 
  // ================= SELECT FIRST ROW =================
  async selectFirstRow(locator: string) {
    const row = this.page.locator(locator).first();
    await expect(row).toBeVisible();
    await row.click();
  }
}
 