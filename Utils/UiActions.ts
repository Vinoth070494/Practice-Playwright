import { Page } from '@playwright/test';
 
export class UIActions {
  constructor(private page: Page) {}
 
  //  Dropdown (for PrimeNG / your UI)
  async selectDropdown(dropdown: string, value: string) {
    await this.page.locator(dropdown).click();
 
    await this.page.locator('.ui-dropdown-panel').waitFor({
      state: 'visible'
    });
 
    await this.page
      .locator('.ui-dropdown-panel li', { hasText: value })
      .click();
  }
 
  //  Input
  async fillInput(locator: string, value: string) {
    await this.page.fill(locator, value);
  }
 
  //  Button
  async clickButton(name: string) {
    await this.page.getByRole('button', { name }).click();
  }
 
  //  Checkbox
  async clickCheckbox(locator: string) {
    await this.page.locator(locator).click();
  }
 
  //  Wait
  async waitForVisible(locator: string) {
    await this.page.locator(locator).waitFor({ state: 'visible' });
  }
}