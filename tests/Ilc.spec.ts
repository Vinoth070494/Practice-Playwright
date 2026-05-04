import { test, expect } from '@playwright/test';
import { users } from '../testdata/users';
import { LoginPage } from '../pages/auth/Login';
import {ImportLetterofCredit} from '../pages/Ilc/ImportLC'
import {IlcForm} from '../pages/Ilc/Form'
import { UIActions } from '../Utils/UiActions';
import{TradeForexShip} from'../pages/shippingGuarantee/Shipform';




test('Ilc Creation )', async ({ page }) => {

  //test.setTimeout(60_000);

  
  // ===== USER =====
  //const user = users.makerOnly;
   const user = users.makerChecker;
   

  // ===== PAGE OBJECTS =====
  const loginPage = new LoginPage(page)
  const LetterIlc = new ImportLetterofCredit(page);
  const Form=new IlcForm(page);
  const app =new TradeForexShip(page);
  const ui = new UIActions(page);
 
  

   // ===== LOGIN AS MAKER =====
  await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
  await LetterIlc.LetterofCredit();
  await Form.ImportForm();
    await ui.clickNext();
  await app.fillApplicantAndBeneficiary();
  
    await ui.clickNext();
;

  await page.pause();
  

});