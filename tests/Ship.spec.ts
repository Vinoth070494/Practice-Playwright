import { test,expect} from "@playwright/test";
import { LoginPage } from "../pages/AuthLog/Login";
import{users} from'../testdata/users';
import { TradeForexShip } from "../pages/ShipGuarantee/Shipform";



// ===== USER SELECTION =====
    //const user = users.makerOnly;
   const user = users.makerChecker;


   test("1.Ship guarantee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const shipform= new TradeForexShip(page);

await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
  await shipform.openShippingGuarantee();
   });