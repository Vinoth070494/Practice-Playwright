import { Page, expect } from "@playwright/test";
import { UIActions } from "../Utils/UiActions";
 
export class Checker {
  private ui: UIActions;
 
  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }
 
  async approveTransaction(referenceNumber: string) {
 
    // ===== Navigation =====
    await this.navigateToOutwardRemittance();
 
    // ===== Open Pending Approval =====
    await this.ui.clickByLocator('#uaPendingApproval');
 
    // ===== Search =====
    await this.ui.clickByLocator('#accordionHeaderId');
 
    await this.ui.fillInput('#refId', referenceNumber);
 
    await this.ui.clickByLocator('#applyBtn');
 
    // ===== Authorise =====
    const approveIcon = `img[alt='Authorise ${referenceNumber}']`;
 
    await this.ui.waitForVisible(approveIcon);
    await this.ui.clickByLocator(approveIcon);
 
    // ===== Approve =====
    await this.ui.clickByLocator('#approve');
 
    // ===== Validation =====
    const successMessage = this.page.locator('div.successMessage').first();
 
    await expect(successMessage).toBeVisible();
 
    const messageText = await successMessage.innerText();
 
    console.log("Checker Approval Message:", messageText);
  }
 
  // ================= NAVIGATION (Reusable) =================
  async navigateToOutwardRemittance() {
 
    await this.ui.clickByLocator(
      'li.ui-menu-parent:has-text("Trade/ Forex") > a'
    );
 
    await this.ui.clickByLocator(
      'li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")'
    );
  }
}
 