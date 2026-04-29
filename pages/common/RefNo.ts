import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
export class ReferenceNumber {
  private ui: UIActions;
 
  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }
  async ReferenceNumber() {

 // ===== Capture Reference =====
    const referenceNumber = await this.ui.getText('#systemID');
 
    console.log('Portal Reference Number:', referenceNumber);
}
};