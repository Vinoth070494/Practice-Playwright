import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
 
export class FtdeclarePage {
  private ui: UIActions;
 
  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }
 
  async completeDeclaration() {
 
    // ✅ Accept All Checkbox
    await this.ui.clickByLocator('mat-checkbox#acceptAll');
 
    // ✅ Next
    await this.ui.clickButton('Next');
 
    // ✅ Wait for Principal Debit Account
    await this.ui.waitForVisible(
      'button:has-text("Principal Debit Account")'
    );
 
    // ✅ Open Account Popup
    await this.ui.clickButton('Principal Debit Account');
 
    // ✅ Select First Row (Reusable table method)
    await this.ui.selectFirstRow(
      'mat-checkbox.table-body-checkbox label.mat-checkbox-layout'
    );
 
    // ✅ Confirm
    await this.ui.clickButton('OK');
 
    // ✅ Final Next
    await this.ui.clickButton('Next');
  }
}
 