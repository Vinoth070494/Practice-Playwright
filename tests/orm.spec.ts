import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/auth/Login';
import { TradeForexPage } from '../pages/orm/Tradeforex';
import { RemittanceFormPage } from '../pages/orm/Remittanceform';
import { FtdeclarePage } from '../pages/orm/Ftdeclare';
import { FileUploadPage } from '../pages/orm/Fileupload';
import { Checker } from '../pages/orm/Checker';
import { BankerPage } from '../pages/orm/MakerChecker';
import { users } from '../testdata/users';

test('ORM flow based on user role (Maker vs Maker+Checker)', async ({ page }) => {

  test.setTimeout(60_000);

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

  // ===== LOGIN AS MAKER =====
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

    console.log('FLOW 1: Maker → Checker Approval');

    // Logout maker
    await loginPage.logout();

    await loginPage.navigateToLoginPage();

    // Login as checker
    await loginPage.login(
      users.makerChecker.username,
      users.makerChecker.password
    );

    // Approve transaction
    await checkerPage.approveTransaction(referenceNumber);

  } 
  else if (user.role === 'MAKER_CHECKER') {

    console.log('FLOW 2: Maker + Checker → Direct Bank Queue');

    // Verify directly in bank queue
    await bankerPage.verifyInBankQueue(referenceNumber);
  }
});
