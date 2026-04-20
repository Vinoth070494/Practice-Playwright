import { Page } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';

export class FtdeclarePage {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async completeDeclaration() {
    // Accept all declaration checkbox
    await this.page.locator('mat-checkbox#acceptAll').click();

    // Click Next
    await this.ui.clickButton('Next');

    // Wait until Principal Debit Account button is visible
    await this.ui.waitForVisible(
      'button:has-text("Principal Debit Account")'
    );

    // Open Principal Debit Account
    await this.ui.clickButton('Principal Debit Account');

    // Select first account row checkbox
    await this.page
      .locator('mat-checkbox.table-body-checkbox label.mat-checkbox-layout')
      .first()
      .click();

    // Confirm selection
    await this.ui.clickButton('OK');

    // Final Next
    await this.ui.clickButton('Next');
  }
}
