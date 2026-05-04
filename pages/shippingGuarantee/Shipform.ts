import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
import { entity } from '../../testdata/locator';
import { remittanceFieldData } from '../../testdata/remitfielddata';

export class TradeForexShip {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async openShippingGuarantee() {
   // Click Trade / Forex main menu
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();

    // Click Outward Remittance submenu
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Shipping Guarantee")').click();
    //click Shiipin g Gurarantee
    await this.page.getByRole('button', { name: 'Request Shipping Guarantee' }).click();
  }

  async fillBasicDetails() {
    await this.ui.fillInput('#expiryDate', '30/04/2026');


 // Guarantee Type
  await this.page.getByLabel('Guarantee Type').click();
  await this.page.getByRole('option', {
    name: 'Shipping Guarantee(SHG)',
    exact: true
  }).click();


    await this.ui.fillInput('#beneficiaryReference', '9884896946');
    await this.ui.fillInput('#customerReference', '9884896946');
    await this.ui.fillInput('#awbNumber', '123456789');

    await this.page.getByLabel('Mode Of Shipment').click();
    await this.page.getByRole('option',{name:'Sea',exact: true }).click();

    await this.ui.fillInput('#mat-form-field-label-55', '123456789');
  }

  async fillApplicantAndBeneficiary() {
    await this.page.locator('.ui-dropdown').first().click();
   
await this.page
    .locator('.ui-dropdown-items')
    .locator('div.p-col-6')
    .filter({ hasText: /^6500073$/ })
    .click();


    
// Beneficiary Name (custom suggestion list)
  await this.page.locator('#beneficiaryEntity').click();

  const beneficiaryOption = this.page
    .locator('div.optionStyle')
    .filter({ hasText: /^ADITYA KESHAN$/ });

  await beneficiaryOption.waitFor({ state: 'visible' });
  await beneficiaryOption.click();
}


  async fillGuaranteeDetails() {
    await this.ui.selectDropdown('#issuerReferenceList', entity.issuerReference);
    await this.ui.selectDropdown('#currency', entity.currency);
    await this.ui.fillInput('#guaranteeAmt', '1000');
  }

  async fillGstDetails() {
    await this.ui.fillInput('#sgGSTNNumber', remittanceFieldData.gstNumber);
    await this.ui.clickCheckbox('#sgDuplicateCheck');
  }

  async clickNext() {
    await this.page.locator('#next').click();
  }


 async clickSubmit() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}

