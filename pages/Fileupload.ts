import { Page, expect } from "@playwright/test";
import path from "path";

export class Fileupload {
  constructor(private page: Page) {}

  async Fileupload() {
    await this.page.locator('#browseButton').click();
    await this.page.waitForTimeout(2000)
   
 
    //  Correct relative path
    const filePath = path.resolve(
        __dirname,
        '../tests/Uploadfile/sampletest.pdf'
    );
 
    //  Set file directly to input (IMPORTANT)
    await this.page
        .locator('#filebrowseButton input[type="file"]')
        .setInputFiles(filePath);
 
    //  Wait for Upload button to enable
    const uploadBtn = this.page.locator('#filebrowseButton button:has-text("Upload")');
 
    await uploadBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000); // small UI delay (PrimeNG)
 
    //  Click Upload
    await uploadBtn.click();

    //Check box
    await this.page.locator("label[for='invoice-input']").click();

    //second check box
    await this.page.locator("label[for='transportDocumentMandate-input']").click();


    await this.page.getByRole("button", {name: "Next"}).click();
    await this.page.waitForTimeout(2000);
//await this.page.pause();

// Click Submit
await this.page.getByRole("button",{name:'Submit'}).click();
await this.page.waitForTimeout(3000)



// Wait for Reference Number to appear
const refNumberLocator = this.page.locator('#systemID');
await refNumberLocator.waitFor({ state: 'visible' });

// Capture reference number
const referenceNumber = (await refNumberLocator.textContent())?.trim();

// Print in log
console.log('Portal Reference Number:', referenceNumber);
return referenceNumber;
await this.page.pause();





  }
}