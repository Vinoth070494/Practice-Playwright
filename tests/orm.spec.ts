import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/Login';
import { TradeForexPage } from '../pages/Tradeforex';
import { RemittanceFormPage } from '../pages/Remittanceform';
import { FtdeclarePage } from '../pages/Ftdeclare';
import { FileUploadPage } from '../pages/Fileupload';
import { Checker } from '../pages/Checker';


import { users } from '../testdata/users';

test('Maker to Checker outward remittance flow', async ({ page }) => {
  test.setTimeout(60_000);
  // Page Objects
  const loginPage = new LoginPage(page);
  const tradeForexPage = new TradeForexPage(page);
  const remittanceFormPage = new RemittanceFormPage(page);
  const ftDeclarePage = new FtdeclarePage(page);
  const fileUploadPage = new FileUploadPage(page);
  const checkerPage = new Checker(page);

  // ===== MAKER FLOW =====
  await loginPage.navigateToLoginPage();
  await loginPage.login(users.maker.username, users.maker.password);

  await tradeForexPage.openOutwardRemittance();
  await remittanceFormPage.fillForm();
  await ftDeclarePage.completeDeclaration();

  const referenceNumber = await fileUploadPage.uploadDocument();
  expect(referenceNumber).toBeTruthy();

  console.log('Captured reference number:', referenceNumber);

  await loginPage.logout();

  // ===== CHECKER FLOW =====
  await loginPage.navigateToLoginPage();
  await loginPage.login(users.checker.username, users.checker.password);

  await checkerPage.checker(referenceNumber as string);
});