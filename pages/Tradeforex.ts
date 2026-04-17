import { Page } from "@playwright/test";

export class TradeForex {
  constructor(private page: Page) {}

  async openOutwardRemittance() {
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();

    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")').click();
    await this.page.waitForTimeout(2000);

    await this.page.getByRole("button", {name: "Outgoing Transfer"}).click();

  }
}