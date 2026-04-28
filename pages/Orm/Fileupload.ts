import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
import path from 'path';
 
export class FileUploadPage {
  private ui: UIActions;
 
  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }
 
  async uploadDocument(): Promise<string | undefined> {
 
    // ===== Open Browse =====
    await this.ui.clickByLocator('#browseButton');
 
    // ===== File Path =====
    const filePath = path.resolve(
      __dirname,
      '../tests/Uploadfile/sampletest.pdf'
    );
 
    // ===== Upload File =====
    await this.ui.uploadFile(
      '#filebrowseButton input[type="file"]',
      filePath
    );
 
    // ===== Click Upload Button =====
    await this.ui.clickByLocator(
      '#filebrowseButton button:has-text("Upload")'
    );
 
    // ===== Select Checkboxes =====
    await this.ui.clickCheckbox("label[for='invoice-input']");
    await this.ui.clickCheckbox(
      "label[for='transportDocumentMandate-input']"
    );
 
    // ===== Next & Submit =====
    await this.ui.clickButton('Next');
    await this.ui.clickButton('Submit');
 
    // ===== Capture Reference =====
    const referenceNumber = await this.ui.getText('#systemID');
 
    console.log('Portal Reference Number:', referenceNumber);
 
    // ===== Go to Listing =====
    await this.ui.clickButton('Outward Remittance Listing');
     await this.ui.clickByLocator('#uaPendingBankApproval');

 //uaPendingBankApproval
    return referenceNumber;

  
  }
}
 