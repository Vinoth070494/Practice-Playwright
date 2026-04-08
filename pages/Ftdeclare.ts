import { Page } from "@playwright/test";


export class Ftdeclare {
  constructor(private page: Page) {}
   async checkbox() {
   // await this.page.locator('#acceptAll-input').check();
  await this.page.locator('mat-checkbox#acceptAll').click();

  await this.page.getByRole("button", {name: "Next"}).click();
await this.page.waitForTimeout(2000)

//principalAccountGridButton
//await this.page.locator('#principalAccountGridButton').click();
await this. page.getByRole('button', { name: 'Principal Debit Account' }).click();
//row-checkbox--1775556357957_0
await this. page
  .locator('mat-checkbox.table-body-checkbox label.mat-checkbox-layout')
  .first()
  .click();

await this. page.getByRole('button', { name: 'OK' }).click();
await this.page.getByRole("button", {name: "Next"}).click();







}  
}