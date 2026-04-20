import { Page } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';
import path from 'path';

export class FileUploadPage {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async uploadDocument(): Promise<string | undefined> {
    // Open browse popup
    await this.page.locator('#browseButton').click();

    // Resolve file path
    const filePath = path.resolve(
      __dirname,
      '../tests/Uploadfile/sampletest.pdf'
    );

    // Upload file
    await this.page
      .locator('#filebrowseButton input[type="file"]')
      .setInputFiles(filePath);

    // Wait for Upload button and click
    const uploadBtn = this.page.locator(
      '#filebrowseButton button:has-text("Upload")'
    );
    await uploadBtn.waitFor({ state: 'visible' });
    await uploadBtn.click();

    // Select required checkboxes
    await this.page.locator("label[for='invoice-input']").click();
    await this.page.locator(
      "label[for='transportDocumentMandate-input']"
    ).click();

    // Next
    await this.ui.clickButton('Next');

    // Submit
    await this.ui.clickButton('Submit');

    // Capture reference number
    const refNumberLocator = this.page.locator('#systemID');
    await refNumberLocator.waitFor({ state: 'visible' });

    const referenceNumber = (await refNumberLocator.textContent())?.trim();

    console.log('Portal Reference Number:', referenceNumber);

    return referenceNumber;
  }
}