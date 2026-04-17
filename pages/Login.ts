import { Page ,expect} from "@playwright/test";

export class Login {
  constructor(private page: Page) {}

  async login(username:string,password:string) {
    await this.page.goto(
      "https://fynuat.kotakuat.bank.in/customer/portal#/login"
    );
    await this.page.fill("#userName", username);
    await this.page.getByRole("button", { name: "Next" }).click();
    await this.page.fill("#credentialInputField", password);
    await this.page.getByRole("button", { name: "Secure Login" }).click();
  }

async logout() {
await this.page.getByRole('img', { name: 'User Profile panel' }).click();
   await this. page.getByRole('button', { name: 'Logout' }).click();
}
}
