import { test,expect} from "@playwright/test";
import { Login } from "../pages/Login";
import{users} from'../testdata/users';
import { Bankguarantee } from "../pages/Bankguarantee";
import {bgform1} from "../pages/Bgform";




test("1. Bankguarantee", async ({ page }) => {
  const login = new Login(page);
  const bank=new Bankguarantee(page);
  const form=new bgform1(page);

  await login.login(users.maker.username,users.maker.password);
  await bank.bankguarantee();
  await form.form1();
  await page.pause();



});