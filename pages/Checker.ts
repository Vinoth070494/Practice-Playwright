import { Page, expect } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';

export class Checker {
  private ui: UIActions;

  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }

  // ================= MAIN FLOW =================
  async approveTransaction(referenceNumber: string) {
    await this.navigateToOutwardRemittance();
    await this.openPendingApprovalTab();
    await this.searchByReference(referenceNumber);
    await this.authoriseTransaction(referenceNumber);
    await this.confirmApproval();
    await this.validateSuccessMessage();
  }

  // ================= NAVIGATION =================
  async navigateToOutwardRemittance() {
    await this.ui.clickByLocator(
      'li.ui-menu-parent:has-text("Trade/ Forex") > a'
    );

    await this.ui.clickByLocator(
      'li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")'
    );
  }

  // ================= OPEN TAB =================
  async openPendingApprovalTab() {
    await this.ui.clickByLocator('#uaPendingApproval');
  }

  // ================= SEARCH =================
  async searchByReference(referenceNumber: string) {
    await this.ui.clickByLocator('#accordionHeaderId');
    await this.ui.fillInput('#refId', referenceNumber);
    await this.ui.clickByLocator('#applyBtn');
  }

  // ================= AUTHORISE =================
  async authoriseTransaction(referenceNumber: string) {
    const approveIcon = `img[alt='Authorise ${referenceNumber}']`;

    await this.ui.waitForVisible(approveIcon);
    await this.ui.clickByLocator(approveIcon);
  }

  // ================= APPROVE =================
  async confirmApproval() {
    await this.ui.clickByLocator('#approve');
  }

  // ================= VALIDATION =================
  async validateSuccessMessage() {
    const successMessage = this.page
      .locator('div.successMessage')
      .first();

    await expect(successMessage).toBeVisible();

    const messageText = await successMessage.innerText();
    console.log(' Checker Approval Message:', messageText);
  }
}