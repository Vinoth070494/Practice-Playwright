import { Page, expect } from "@playwright/test";
import path from "path";

export class Fileupload {
  constructor(private page: Page) {}

  async Fileupload() {
    await this.page.locator('#browseButton').click();
    await this.page.pause();
   
 
    // ✅ Correct relative path
    const filePath = path.resolve(
        __dirname,
        '../tests/Uploadfile/sampletest.pdf'
    );
 
    // ✅ Set file directly to input (IMPORTANT)
    await this.page
        .locator('#filebrowseButton input[type="file"]')
        .setInputFiles(filePath);
 
    // ✅ Wait for Upload button to enable
    const uploadBtn = this.page.locator('#filebrowseButton button:has-text("Upload")');
 
    await uploadBtn.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(1000); // small UI delay (PrimeNG)
 
    // ✅ Click Upload
    await uploadBtn.click();

    await this.page.getByRole("button", {name: "Next"}).click();
await this.page.pause();

await this.page.getByRole('button', { name: 'Submit' }).click();

}
}