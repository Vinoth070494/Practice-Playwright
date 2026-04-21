import { test, expect } from '@playwright/test';
 
import { LoginPage } from '../pages/Login';
import { TradeForexPage } from '../pages/Tradeforex';
import { RemittanceFormPage } from '../pages/Remittanceform';
import { FtdeclarePage } from '../pages/Ftdeclare';
import { FileUploadPage } from '../pages/Fileupload';
import { Checker } from '../pages/Checker';
import { BankerPage } from '../pages/MakerChecker';
import { users } from '../testdata/users';
 
test('ORM flow based on user role (Maker vs Maker+Checker)', async ({ page }) => {
 
  test.setTimeout(90_000);
 
  // ===== USER =====
  //const user = users.makerOnly;
   const user = users.makerChecker;
 
  // ===== PAGE OBJECTS =====
  const loginPage = new LoginPage(page);
  const tradeForexPage = new TradeForexPage(page);
  const remittanceFormPage = new RemittanceFormPage(page);
  const ftDeclarePage = new FtdeclarePage(page);
  const fileUploadPage = new FileUploadPage(page);
  const checkerPage = new Checker(page);
  const bankerPage = new BankerPage(page);
 
  // ===== LOGIN =====
  await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
 
  // ===== MAKER FLOW =====
  await tradeForexPage.openOutwardRemittance();
  await remittanceFormPage.fillForm();
  await ftDeclarePage.completeDeclaration();
 
  const referenceNumber = await fileUploadPage.uploadDocument();
 
  expect(referenceNumber).toBeTruthy();
  console.log(`ORM Reference ID: ${referenceNumber}`);
 
  // ===== ROLE BASED FLOW =====
 
  if (user.role === 'MAKER') {
 
    console.log('Maker → Checker Flow');
 
    await loginPage.logout();
 
    // login as checker
    await loginPage.login(
      users.makerChecker.username,
      users.makerChecker.password
    );
 
    await checkerPage.approveTransaction(referenceNumber);
 
  } else if (user.role === 'MAKER_CHECKER') {
 
    console.log('Maker + Checker → Direct Banker Flow');
 
    await bankerPage.goToListPage();
 
    await bankerPage.verifyInPending(referenceNumber);
 
    await bankerPage.verifyInBankQueue(referenceNumber);
  }
});