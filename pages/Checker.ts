import { Page } from "@playwright/test";


export class Checker {
  constructor(private page: Page) {}

  async checker(referenceNumber:string) {
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();

    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")').click();

    await this.page.locator('#uaPendingApproval').click();

    await this.page.locator('#accordionHeaderId').click();
    await this.page.locator('#refId').fill(referenceNumber);
   

//applyBtn
await this.page.locator('#applyBtn').click();
//FT26040000174760_APPROVE
await this.page.locator(`img[alt='Authorise ${referenceNumber}']`).click();
await this.page.locator('#approve').click();
// Print Success message 
const messageText = await this. page.locator("div.successMessage").first().innerText();
console.log("Success message:", messageText);
await this.page.waitForTimeout(2000);
await this.page.pause();

  }
}