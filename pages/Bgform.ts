import { Page } from "@playwright/test"

export class bgform1{
  constructor(private page: Page) {}

  async form1() {
   await this.page.locator("#applicantEntity").click();
    //
await this.page.locator('text=6500073 Kotak Mahindra Bank Private Limited Indiannn').click();


/* // Wait for option to appear
const option = this. page.locator('text=Kotak Mahindra Bank');
await option.waitFor({ state: 'visible' }); */

/* // Select option
await this. option.click(); */

await this. page.locator('mat-icon:has-text("arrow_drop_up")').click();

await this.page.locator('ADITYA KESHAN').click();

  }
}