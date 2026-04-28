import { Page } from "@playwright/test"

export class Bankguarantee{
  constructor(private page: Page) {}

  async bankguarantee() {
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();

     await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Bank Guarantee")').click();
await this.page.getByRole("button", {name: "Request Guarantee"}).click();


  }
}; 