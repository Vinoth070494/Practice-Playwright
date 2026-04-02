import{test,expect,Locator} from "@playwright/test";
// Radio Button 
test("1.Radio Button only one to be checked  ", async({page}) => {
     await page.goto("https://practice.expandtesting.com/radio-buttons");
  /// Click Red 
     const red=page.getByLabel("red");
     const blue=page.getByLabel("Blue");
 // check Red is cliced
     await red.check();
     await page.waitForTimeout(2000);
     await expect(red).toBeChecked();
// click blue 
     await blue.check();
      await page.waitForTimeout(5000);

      /// Click football
     const football=page.getByLabel("football");
     const basketball =page.getByLabel("basketball");
 // check football is clicked 
     await football.check();
     await page.waitForTimeout(2000);
     await expect(football).toBeChecked();
// click basketball
     await basketball .check();
      await page.waitForTimeout(5000);


/* // Check the Button clicked 
     await page.getByLabel("red").check();
// validate the 
     await expect (page.getByLabel("red")).toBeChecked();

    // check another Radio button
    await  page.getByLabel("Football").check();
    //Cofirm the Clicked 
    await expect(page.getByLabel("football")).toBeChecked(); */



});
