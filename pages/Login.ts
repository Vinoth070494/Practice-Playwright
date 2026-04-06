import { Page } from "@playwright/test";

export class Login {
  constructor(private page: Page) {}

  async login() {
    await this.page.goto(
      "https://fynuat.kotakuat.bank.in/customer/portal#/login"
    );
    await this.page.fill("#userName", "105360870");
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.fill("#credentialInputField", "Quality@123");
    await this.page.getByRole("button", { name: "Secure Login" }).click();
  }
}
