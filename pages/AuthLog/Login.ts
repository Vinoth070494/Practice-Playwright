import { Page } from '@playwright/test';
import { UIActions } from '../../Utils/UiActions';
 
export class LoginPage {
  private ui: UIActions;
 
  constructor(private page: Page) {
    this.ui = new UIActions(page);
  }
 
  async navigateToLoginPage() {
    await this.page.goto(
      'https://fynuat.kotakuat.bank.in/customer/portal#/login'
    );
  }
 
  async login(username: string, password: string) {
 
    // Username
    await this.ui.fillInput('#userName', username);
    await this.ui.clickButton('Next');
 
    // Wait for password field (IMPORTANT)
    await this.page.locator('#credentialInputField').waitFor({
      state: 'visible'
    });
 
    // Password
    await this.ui.fillInput('#credentialInputField', password);
    await this.ui.clickButton('Secure Login');
 
    // Optional: wait for dashboard
    //await this.page.waitForLoadState('networkidle');
  } 
 
  async logout() {
 
    // Open profile menu
    await this.page
      .getByRole('img', { name: 'User Profile panel' })
      .click();
 
    // Click logout
    await this.ui.clickButton('Logout');
 
    // Wait for login screen again
     await this.page.locator('#userName').waitFor({
      state: 'visible'
    }); 
  }
}
