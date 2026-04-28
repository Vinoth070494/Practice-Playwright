import { Page, expect } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';
import path from 'path';

export class BankGuaranteePage {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async fillBankGuaranteeForm() {
   await this.page.locator('#applicantEntity').click();

// Wait for options to be visible
await this.page.waitForSelector('.ui-dropdown-items-wrapper', { state: 'visible' });

// Click exact option
await this.page.getByRole('option', { name: '6500073', exact: true }).click();

``
await this.page.locator('#beneficiaryEntity').click({ force: true });

await this. page.locator('.p-grid', { hasText: 'ADITYA KESHAN' }).first().click();

await this.page.getByLabel('Bank Guarantee Amount').fill('100000');

    // ================= Dates =================
    await this.ui.fillInput('#bgExpDate', '30/04/2026');
    await this.page.locator('#bgExpDate').press('Tab');

    await this.ui.fillInput('#bgClaimExpDate', '15/05/2026');
    await this.page.locator('#bgClaimExpDate').press('Tab');

    // ================= Advising Bank =================
    await this.ui.clickByLocator('#advisingBankIcons');
    await this.ui.selectFromTable(
      'tr',
      '6500073'
    );

    // ================= Fee Account =================
    await this.ui.clickByLocator('#feeActIcons');
    await this.ui.selectFromTable(
      'tr',
      'INR'
    );

    // ================= Next =================
    await this.ui.clickByLocator('#next');

    // ================= Declaration =================
    await this.ui.clickByLocator(
      'label[for="declarationBgOther-input"]');

   await this.ui.clickByLocator('label[for="declarationBgOpenEnd-input"]');


    // ================= Final Next =================
    await this.ui.clickByLocator('#next');

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
          await this.ui.clickByLocator('#next');
             //Submit 
           await this.ui.clickButton('Submit');
          const referenceNumber = await this.ui.getText('#systemID');
 
    console.log('Portal Reference Number:', referenceNumber);
 
    // ===== Go to Listing =====
    await this.ui.clickButton('Bank Guarantee Listing');
     await this.ui.clickByLocator('#uiPendingApproval');

 //uaPendingBankApproval
    return referenceNumber

    // Debug (optional)
    await this.page.pause();
        };
}