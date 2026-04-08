import { test,expect } from "@playwright/test";
import { Login } from "../pages/Login";
import { TradeForex } from "../pages/Tradeforex";
import { RemittanceForm } from "../pages/Remittanceform";
import {Ftdeclare} from "../pages/Ftdeclare"
import {Fileupload} from"../pages/Fileupload";
import path from 'path';

test("1. login page", async ({ page }) => {
  const login = new Login(page);
  const tradeForex = new TradeForex(page);
  const remittance = new RemittanceForm(page);
  const ftdeclare=new Ftdeclare(page);
  const fileupload=new Fileupload(page);

  await login.login();
  await tradeForex.openOutwardRemittance();
  await remittance.fillForm();
  await ftdeclare.checkbox();
  await fileupload.Fileupload();
  await page.pause();
});
