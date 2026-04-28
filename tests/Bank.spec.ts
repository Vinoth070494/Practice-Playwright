import { test,expect} from "@playwright/test";
import { LoginPage } from "../pages/AuthLog/Login";
import{users} from'../testdata/users';
import { Bankguarantee } from "../pages/BGFolder/Bankguarantee";
import {BankGuaranteePage} from "../pages/BGFolder/Bgform";



  // ===== USER SELECTION =====
    //const user = users.makerOnly;
   const user = users.makerChecker;




test("1. Bankguarantee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bank=new Bankguarantee(page);
  const form=new BankGuaranteePage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
  await bank.bankguarantee();
  await form.fillBankGuaranteeForm();
 // await page.pause();

});
 