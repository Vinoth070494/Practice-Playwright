  import{test,expect,Locator} from "@playwright/test";

// Web Inputs task 
test("1. Web inputs ", async({page}) => {
     await page.goto("https://practice.expandtesting.com/inputs")
     await page.fill('#input-number', '123456');
     await page.fill('#input-text', 'Vinoth01');
     await page.fill('#input-password','Vinoth@07'); 
     const Dateinput:Locator=page.locator('#input-date')
     await expect (Dateinput).toBeVisible
     Dateinput.fill('2026-03-30');
     await page.waitForTimeout(2000)
       await page.getByRole("button", { name: 'clear inputs' }).click();
   

 await page.pause();
});