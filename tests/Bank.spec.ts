import { test,expect} from "@playwright/test";
import { LoginPage } from "../pages/auth/Login";
import{users} from'../testdata/users';
import { Bankguarantee } from "../pages/bankGuarantee/Bankguarantee";
import {BankGuaranteePage} from "../pages/bankGuarantee/Bgform";



  // ===== USER SELECTION =====
    //const user = users.makerOnly;
   const user = users.makerChecker;




test("1. Bankguarantee", async ({ page }) => {
    test.setTimeout(30_000);
  const loginPage = new LoginPage(page);
  const bank=new Bankguarantee(page);
  const form=new BankGuaranteePage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
  await bank.bankguarantee();
  await form.fillBankGuaranteeForm();
 // await page.pause();

});
 