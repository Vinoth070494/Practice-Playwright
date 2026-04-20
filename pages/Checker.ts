import { Page, expect } from "@playwright/test";
import { UIActions } from "../Utils/UiActions";

export class Checker {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  async checker(referenceNumber: string) {
    // Menu navigation
    await this.ui.waitForVisible('li.ui-menu-parent:has-text("Trade/ Forex") > a');
    await this.page.locator('li.ui-menu-parent:has-text("Trade/ Forex") > a').click();

    await this.ui.waitForVisible(
      'li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")'
    );
    await this.page
      .locator('li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")')
      .click();

    // Pending approval
    await this.ui.clickButton('#uaPendingApproval');

    // Search accordion
    await this.ui.clickButton('#accordionHeaderId');
    await this.ui.fillInput('#refId', referenceNumber);

    // Apply
    await this.ui.clickButton('#applyBtn');

    // Authorise record
    const approveIcon = `img[alt='Authorise ${referenceNumber}']`;
    await this.ui.waitForVisible(approveIcon);
    await this.page.locator(approveIcon).click();

    // Approve
    await this.ui.clickButton('#approve');

    // Validate success message
    const successMessage = this.page.locator('div.successMessage').first();
    await expect(successMessage).toBeVisible();

    const messageText = await successMessage.innerText();
    console.log("Success message:", messageText);
  }
}