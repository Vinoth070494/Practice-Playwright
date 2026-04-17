import { Page } from "@playwright/test";

export class RemittanceForm {
  constructor(private page: Page) {}

  async fillForm() {
     await this.page.waitForSelector;
    await this.page.locator("#entityBankName").click();
    await this.page.getByRole("option", {name: "Kotak Mahindra Bank"}).click();

    await this.page.locator("#remittanceType").click();
    await this.page.waitForSelector;
    await this.page.getByRole("option", {name: "Miscellaneous Remittance - OTT"}).click();

    await this.page.locator("#purposeCodeIcons").click();
    await this.page.waitForSelector;
    await this.page.locator("td.mat-column-PURPOSECODE").filter({ hasText: "S1701" }).click();
    // await this.page.waitForTimeout(2000);

    await this.page.fill("#gstinNumber", "1053608701012");
    await this.page.fill("#transDocNum", "23456789");

    // Open dropdown
// Open dropdown
await this.page.locator("div.ui-dropdown-label-container").first().click();


// Wait for overlay panel
await this.page.waitForSelector(".ui-dropdown-panel", { state: "visible" });

// Select option
await this.page
  .locator(".ui-dropdown-panel li[role='option']", { hasText: "Andorra" })
  .click();


  

  // Reference
  await this.page.fill("#transfereeReference", "1053608701012");
  await this.page.fill("#customerReference", "9884896946");
  //await this.page.waitForTimeout(2000);
  
  //beneficiary
  await this.page.locator("#beneficiaryEntity").click();
  //await this.page.waitForSelector;
  await this.page.getByRole("option", {name: "Sonata Information Technology pvt l"}).click();
  

   // Radio Button 
await this. page.getByText('OUR - All charges to be paid by me').check();

// 1. Open the Currency dropdown
await this .page.locator('#currency').click();

// 2. Wait for dropdown overlay
await this. page.locator('.ui-dropdown-panel').waitFor({ state: 'visible' });


// 3. Click the option (by currency code or name)
await this. page.locator('.ui-dropdown-panel li[aria-label="EUR"]').click();
await this.page.waitForTimeout(2000);
//await this.page.pause();

//amount
await this.page.fill("#amount", "1000");

// 1. Open the dropdown
await this. page.locator('#forwardContractText').click();

// 2. Click option by visible text
await this. page.getByRole('option', { name: 'To be booked by bank' }).click();

// 1. Open the Issuer's Reference dropdown
await this. page.locator('#issuerReferenceList').click();

// 2. Select option by visible text
await this.page.getByRole('option', {
  name: '6500073.ZONE1.0001.0958'
}).click();
// Click search icon
await this. page.locator("#feeActIcons").click();
//await this.page.pause();

await this.page
  .locator("td.mat-column-ACCOUNTCURRENCY div[title='INR']")
  .first()
  .click();

//Next
await this.page.getByRole("button", {name: "Next"}).click();
await this.page.waitForTimeout(2000)












  }
};
