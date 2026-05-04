import { Page } from "@playwright/test"

export class ImportLetterofCredit{
  constructor(private page: Page) {}

  async LetterofCredit() {
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();
await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Import Letters of Credit")').click();
await this.page.getByRole("button", {name: "Request Letters of Credit"}).click();

  }
}