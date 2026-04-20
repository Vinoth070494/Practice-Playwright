import { Page } from '@playwright/test';
import { UIActions } from '../Utils/UiActions';

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
    await this.ui.fillInput('#userName', username);
    await this.ui.clickButton('Next');

    await this.ui.fillInput('#credentialInputField', password);
    await this.ui.clickButton('Secure Login');
  }

  async logout() {
    await this.page
      .getByRole('img', { name: 'User Profile panel' })
      .click();

    await this.ui.clickButton('Logout');
    await this.page.pause();
  }
}