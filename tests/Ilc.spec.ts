import { test,Page,Expect } from '@playwright/test';
import { users } from '../testdata/users';
import { LoginPage } from '../pages/auth/Login';
import {ImportLetterofCredit} from '../pages/Ilc/ImportLC'
import {IlcForm} from '../pages/Ilc/Form'
import { UIActions } from '../Utils/UiActions';
import{TradeForexShip} from'../pages/shippingGuarantee/Shipform';
import {entity} from '../testdata/locator';
import{FileUpload2} from'../pages/common/FileUpload1';
import{ReferenceNumber} from '../pages/common/RefNo';



test('Ilc Creation )', async ({ page }) => {
    page.on('dialog', async (dialog) => {
  console.log('Popup detected:', dialog.message());
  await dialog.accept();
});

  test.setTimeout(60_000); 
// ===== USER =====
  //const user = users.makerOnly;
   const user = users.makerChecker;
   
   // ===== PAGE OBJECTS =====
  const loginPage = new LoginPage(page)
  const LetterIlc = new ImportLetterofCredit(page);
  const Form=new IlcForm(page);
  const app =new TradeForexShip(page);
  const ui = new UIActions(page);
  const file=new FileUpload2(page);
  const ref=new ReferenceNumber(page);
 
  // ===== LOGIN AS MAKER =====
  await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
  await LetterIlc.LetterofCredit();
  await Form.ImportForm();
  await ui.clickNext();
  await app.fillApplicantAndBeneficiary();
  await Form.beneficiaryCountry(entity.country);
  await ui.clickNext();
  await Form.Issuereference();
  //await Form.selectCounterParty("Other");
  await ui.clickNext();
  await Form.selectCurrency('ANDORRAN PESETA', );
  await Form.narrativeDetails();
  await ui.clickNext();
  await Form.feeCharge();
  await page.pause();

  //  Navigate empty screens
await ui.clickNext();

await ui.clickNext();

await Form.declare();

await ui.clickNext();

await file.fileuploadcommon();

await ui.clickNext();

//  Final submission (no dialog)
await Form.SubmitIlc();

await ref.ReferenceNumber();
await page.pause();

  

});