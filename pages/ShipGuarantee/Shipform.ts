import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';


export class TradeForexShip {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async openShippingGuarantee() {
        await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();

     await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Shipping Guarantee")').click();
await this.page.getByRole("button", {name: "Request Shipping Guarantee"}).click();

await this.page.pause();
  }
}; 