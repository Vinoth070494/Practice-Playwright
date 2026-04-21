import { Page, expect } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';
 
export class BankerPage {
  private ui: UIActions;
 
  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }
 
  // ===== NAVIGATION =====
  async navigateToOutwardRemittance() {
    await this.ui.clickByLocator(
      'li.ui-menu-parent:has-text("Trade/ Forex") > a'
    );
 
    await this.ui.clickByLocator(
      'li.ui-menu-parent:has-text("Trade/ Forex") a:has-text("Outward Remittance")'
    );
  }
 
  // ===== OPEN TAB =====
  async openBankerTab(tab: 'PENDING' | 'BANK_QUEUE') {
    if (tab === 'PENDING') {
      await this.ui.clickByLocator('#bankPendingApproval');
    } else {
      await this.ui.clickByLocator('#uaPendingBankApproval');
    }
  }
 
  // ===== SEARCH =====
  async searchByReference(refId: string) {
    await this.ui.clickByLocator('#accordionHeaderId');
    await this.ui.fillInput('#refId', refId);
    await this.ui.clickByLocator('#applyBtn');
  }
 
  // ===== VERIFY =====
  async verifyReferencePresent(refId: string) {
    const record = this.page.locator(`text=${refId}`);
    await expect(record).toBeVisible();
 
    console.log(`Reference ID ${refId} found`);
  }
 
  // ===== FULL FLOW (BEST PRACTICE) =====
  async verifyInPending(refId: string) {
    await this.navigateToOutwardRemittance();
    await this.openBankerTab('PENDING');
    await this.searchByReference(refId);
    await this.verifyReferencePresent(refId);
  }
 
  async verifyInBankQueue(refId: string) {
    await this.openBankerTab('BANK_QUEUE');
    await this.searchByReference(refId);
    await this.verifyReferencePresent(refId);
  }
 
  // ===== GO TO LIST PAGE =====
  async goToListPage() {
    await this.ui.clickByLocator('#goToListBtn');
  }
}
 