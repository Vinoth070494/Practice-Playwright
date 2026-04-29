import { test} from "@playwright/test";
import { LoginPage } from "../pages/auth/Login";
import{users} from'../testdata/users';
import { TradeForexShip } from "../pages/shippingGuarantee/Shipform";
import { FileUpload2 } from '../pages/common/FileUpload1';
import{ReferenceNumber} from '../pages/common/RefNo'



// ===== USER SELECTION =====
    //const user = users.makerOnly;
   const user = users.makerChecker;

test('Ship Guarantee', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const ship = new TradeForexShip(page);
  const upload = new FileUpload2(page);
  const referenceNumber=new ReferenceNumber(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login(user.username, user.password);
  await ship.openShippingGuarantee();
  //General Tab
  await ship.fillBasicDetails();
  await ship.clickNext();
  //Apllicant & Beneficiary details
  await ship.fillApplicantAndBeneficiary();
  await ship.clickNext();
  //Guarantee details
  await ship.fillGuaranteeDetails();
  await ship.clickNext();
  //Gst 
  await ship.fillGstDetails();
  await ship.clickNext();
  //Upload 
  await upload.fileuploadcommon();
  await ship.clickNext();

  await ship.clickSubmit();

await referenceNumber.ReferenceNumber();

  await page.pause();
});
``