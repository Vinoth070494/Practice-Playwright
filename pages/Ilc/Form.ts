import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
import { remittanceFieldData } from '../../testdata/remitfielddata';
import{TradeForexShip} from'../shippingGuarantee/Shipform';

export class IlcForm {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);  
  }

  async ImportForm() {
      await this.ui.fillInput('#expiryDate', '30/05/2026');
      await this.ui.fillInput("#placeOfExpiry","Chennai");

      //mat-select-value-7

      await this.page.getByLabel('LC Type').click();
  await this.page.getByRole('option', {
    name: ' Import Letter of Credit ',
    exact: true
  }).click();
// Check box
  await this.ui.clickCheckbox('#ntrf_flag');
  //Radio Button 
await this.page.locator('mat-radio-button', { hasText: 'Confirm' }).click();
await this.ui.fillInput('#beneficiaryReference', '9884896946');

await this.ui.fillInput(
  '#customerReference',
  remittanceFieldData.customerReference);
}


async beneficiaryCountry(country: string) {
  await this.page.locator('.ui-dropdown').first().click();

  await this.page
    .locator('.ui-dropdown-items .p-grid')
    .filter({ hasText: country })
    .first()
    .click();
}

}

