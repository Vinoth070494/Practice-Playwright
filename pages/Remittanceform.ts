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
 
    // ===== Entity Bank =====
    await this.ui.selectDropdown('#entityBankName', entity.entity2);
 
    // ===== Remittance Type =====
    await this.ui.selectDropdown('#remittanceType', entity.remittanceType);
 
    // ===== Purpose Code (Table Selection) =====
    await this.ui.clickByLocator('#purposeCodeIcons');
    await this.ui.selectFromTable(
      'td.mat-column-PURPOSECODE',
      entity.purposeCode
    );
 
    // ===== GST & Transport =====
    await this.ui.fillInput('#gstinNumber', remittanceFieldData.gstNumber);
 
    await this.ui.fillInput(
      '#transDocNum',
      remittanceFieldData.transportDocumentNumber
    );
 
    // ===== Country Dropdown (Custom UI) =====
    await this.ui.selectCustomDropdown(
      "p-dropdown#countryProviding >> div[role='button']",
      entity.country
    );
 
    // ===== References =====
    await this.ui.fillInput(
      '#transfereeReference',
      remittanceFieldData.transactionReference
    );
 
    await this.ui.fillInput(
      '#customerReference',
      remittanceFieldData.customerReference
    );
 
    // ===== Beneficiary =====
    await this.ui.selectDropdown(
      '#beneficiaryEntity',
      entity.beneficiary
    );
 
// ===== Radio Button =====
    await this.page.locator(
  'mat-radio-button:has-text("SHA - Only Bank charges to be paid by me")'
).click();
``
    // ===== Currency =====
    await this.ui.selectDropdown('#currency', entity.currency);
 
    // ===== Amount =====
    await this.ui.fillInput('#amount', remittanceFieldData.amount);
 
    // ===== Forward Contract =====
    await this.ui.selectDropdown(
      '#forwardContractText',
      entity.forwardContract
    );
 
    // ===== Issuer Reference =====
    await this.ui.selectDropdown(
      '#issuerReferenceList',
      entity.issuerReference
    );
 
    // ===== Fee Account (Table) =====
    await this.ui.clickByLocator('#feeActIcons');
    await this.ui.selectFromTable(
      "td.mat-column-ACCOUNTCURRENCY div",
      entity.accountCurrency
    );
 
    // ===== Next =====
    await this.ui.clickButton('Next');
  }
}
 