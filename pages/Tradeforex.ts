import { Page } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';

export class TradeForexPage {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async openOutwardRemittance() {
    // Click Trade / Forex main menu
    await this.page
      .locator('li.ui-menu-parent:has-text("Trade/ Forex") > a')
      .click();

    // Click Outward Remittance submenu
    await this.page
      .locator(
        'li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")'
      )
      .click();

    // Wait for button instead of static timeout
    await this.ui.waitForVisible(
      'button:has-text("Outgoing Transfer")'
    );

    // Click Outgoing Transfer button
    await this.ui.clickButton('Outgoing Transfer');
  }
}
``