import { test,expect } from "@playwright/test";
import { Login } from "../pages/Login";
import { TradeForex } from "../pages/Tradeforex";
import { RemittanceForm } from "../pages/Remittanceform";
import {Ftdeclare} from "../pages/Ftdeclare"
import {Fileupload} from"../pages/Fileupload";
import path from 'path';
import{users} from'../testdata/users';
import{Checker} from '../pages/Checker'

test("1. login page", async ({ page }) => {
  const login = new Login(page);
  const tradeForex = new TradeForex(page);
  const remittance = new RemittanceForm(page);
  const ftdeclare=new Ftdeclare(page);
  const fileupload=new Fileupload(page);
  
  const checker=new Checker(page);
  

  await login.login(users.maker.username,users.maker.password);
  await tradeForex.openOutwardRemittance();
  await remittance.fillForm();
  await ftdeclare.checkbox();
  const referenceNumber=await fileupload.Fileupload();
  console.log("captured ref number:",referenceNumber);
  await login.logout();
   await login.login(users.checker.username,users.checker.password);
   await checker.checker(referenceNumber);
  await page.pause();
});
