import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
import { remittanceFieldData } from '../../testdata/remitfielddata';
import{TradeForexShip} from'../shippingGuarantee/Shipform';
import {entity} from'../../testdata/locator';

export class IlcForm {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);  
  }

  async ImportForm() {
      await this.ui.fillInput('#expiryDate', '07/05/2026');
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
await this.page.locator('mat-radio-button', { hasText: 'Without' }).click();
await this.ui.fillInput('#beneficiaryReference', '9884896946');

await this.ui.fillInput(
  '#customerReference',
  remittanceFieldData.customerReference);
}
async beneficiaryCountry(country: string) {

  // Open dropdown
  await this.page
    .locator('span.ui-dropdown-label', { hasText: 'empty' })
    .click();

  // Wait for dropdown panel
  await this.page.waitForSelector('.ui-dropdown-panel', { state: 'visible' });

  // Select country
  await this.page
    .locator('li[role="option"]', { hasText: country })
    .click();
}

async Issuereference() {
    await this.ui.selectDropdown(
      '#issuerReferenceList',
      entity.issuerReference
    );

}

/* async selectCounterParty(type: string) {

    await this.page.locator("#confirmationParty").click();

   
await this. page.locator('#mat-select-value-15').click();

//await this.page.locator('mat-form-field').nth(0).locator('.mat-select-value').click();

// Wait for dropdown panel to appear
await this.page.waitForSelector('.mat-select-panel', { state: 'visible' });

// Click "Other"
await this.page.locator('mat-option >> text=Other').click();
 

//await this.page.getByLabel('Bank Name').fill('Kotak Bank');
//await this.ui.fillInput("#confirmationFirstAddress",'Chennai');
//await this.page.getByLabel("Address 1").fill("Chennai");

} */


async selectCurrency(currency: string) {
 
  // 1. Click dropdown (important: correct locator)
  await this.page.locator('#currency').click();
 
  // 2. Wait for dropdown list to appear
  const dropdownList = this.page.locator('ul[role="listbox"]');
  await dropdownList.waitFor({ state: 'visible' });
 
  // 3. Select option using text
  await dropdownList
    .locator('li[role="option"]')
    .filter({ hasText: currency })
    .click();

 await this.page.locator("#amount").fill("1000");
//percp
 await this.page.locator("#percp").fill("10")

 //percm
 await this.page.locator("#percm").fill("1")

 //additionalAmount
 await this.page.locator("#additionalAmount").fill("1000");
  await this. ui.clickNext();
  // Open mat-select dropdown
await this.page.locator('#paymentDetailsBankEntity').click();

// Wait for options panel
await this.page.locator('.mat-select-panel').waitFor({ state: 'visible' });

// Select "Any Bank"
await this. page.locator('mat-option >> text=Any Bank').click();
//await this.page.pause();
await this. ui.clickNext();
await this.page.locator("#shipmentlcShipHSCode").fill("123456789");
await this. ui.clickNext();
}

async narrativeDetails(){
    await this.page.locator("#descOfGoodsText").fill("testing only");
    await this.page.locator("#docRequired").click();
      await this.page.locator("#docRequiredText").fill("testing only");
      await this.page.locator("#additionallnstruction").click();
      await this.page.locator("#addInstructionText").fill("testing only ");

}

       // ===== Fee Account (Table) =====
       async feeCharge(){
    await this.ui.clickByLocator('#feeActIcons');
    await this.ui.selectFromTable(
      "td.mat-column-ACCOUNTCURRENCY div",
      entity.accountCurrency
    );
    //await this.ui.clickNext();
}
//await this.page.locator("#equlAmount").fill("1010");

    async declare (){
    await this. page.locator('#selectAllDeclaration').click();
     await this.page.pause();

    }
    async SubmitIlc(){
        await this.page.locator("#submit").click();
    }
  
}
 


