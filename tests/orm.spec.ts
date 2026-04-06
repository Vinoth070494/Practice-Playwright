import { test } from "@playwright/test";
import { Login } from "../pages/Login";
import { TradeForex } from "../pages/Tradeforex";
import { RemittanceForm } from "../pages/Remittanceform";

test("1. login page", async ({ page }) => {
  const login = new Login(page);
  const tradeForex = new TradeForex(page);
  const remittance = new RemittanceForm(page);

  await login.login();
  await tradeForex.openOutwardRemittance();
  await remittance.fillForm();
  await page.pause();
});
