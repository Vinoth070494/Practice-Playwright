import { Page } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';
import { remittanceFieldData } from '../testdata/remitfielddata';
import { entity } from '../testdata/locator';

export class RemittanceFormPage {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async fillForm() {
    // Entity Bank Name
    await this.page.locator('#entityBankName').click();
    await this.page.getByRole('option', { name: entity.entity2 }).click();

    // Remittance Type
    await this.page.locator('#remittanceType').click();
    await this.page.getByRole('option', { name: entity.Remittype }).click();

    // Purpose Code
    await this.page.locator('#purposeCodeIcons').click();
    await this.page
      .locator('td.mat-column-PURPOSECODE')
      .filter({ hasText: entity.purcode })
      .click();

    // GST & Transport Document
    await this.ui.fillInput('#gstinNumber', remittanceFieldData .gstNumber);
    await this.ui.fillInput(
      '#transDocNum',
      remittanceFieldData .transportDocumentNumber
    );

    // Currency Dropdown (PrimeNG)
  // Open the Country Providing dropdown
await this. page.locator("p-dropdown#countryProviding >> div[role='button']").click();

await this. page
  .locator("li[role='option']", { hasText: 'Andorra' })
  .click({ force: true })

    
   

    // References
    await this.ui.fillInput(
      '#transfereeReference',
      remittanceFieldData.transactionReference
    );
    await this.ui.fillInput(
      '#customerReference',
      remittanceFieldData.customerReference
    );

    // Beneficiary
    await this.page.locator('#beneficiaryEntity').click();
    await this.page.getByRole('option', {
      name: 'Sonata Information Technology pvt l'
    }).click();

    // Charges Radio Button
    await this.page
      .getByText('OUR - All charges to be paid by me')
      .check();

    // Transaction Currency
    await this.page.locator('#currency').click();
    await this.ui.waitForVisible('.ui-dropdown-panel');
    await this.page
      .locator('.ui-dropdown-panel li', { hasText: 'EUR' })
      .click();

    // Amount
    await this.ui.fillInput('#amount', '1000');

    // Forward Contract
    await this.page.locator('#forwardContractText').click();
    await this.page.getByRole('option', {
      name: 'To be booked by bank'
    }).click();

    // Issuer Reference
    await this.page.locator('#issuerReferenceList').click();
    await this.page.getByRole('option', {
      name: '6500073.ZONE1.0001.0958'
    }).click();

    // Fee Account
    await this.page.locator('#feeActIcons').click();
    await this.page
      .locator("td.mat-column-ACCOUNTCURRENCY div[title='INR']")
      .first()
      .click();

    // Next
    await this.ui.clickButton('Next');
  }
}