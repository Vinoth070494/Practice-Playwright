  import{test,expect} from "@playwright/test";
 
/* test.describe.configure({ mode: 'serial' });


   // Page register 
     test("1.verify the page Register ", async({page}) => {
     await page.goto("https://practice.expandtesting.com/register");
     await page.fill('#username', 'Vinoth11');
     await page.fill('#password', 'Vinoth@11');
     await page.fill('#confirmPassword','Vinoth@11');
   await page.getByRole('button', { name: 'Register' }).click();
   await (5000);
   //await expect(page.locator('An error occurred during registration. Please try again.=Error ')).toBeVisible;

     }); 

 //Page Login
test("2.verify the page title", async({page}) => {
     await page.goto("https://practice.expandtesting.com/login")
     await page.fill('#username', 'vinoth11');
     await page.fill('#password', 'Vinoth@11');
     await page.click('#submit-login'); 
    // await page.pause();
}); 
 // Page invalid username login 
test("3.verify the invalid login credentials", async({page}) => {
     await page.goto("https://practice.expandtesting.com/login")
     await page.fill('#username', 'vinoth1');
     await page.fill('#password', 'Vinoth@11');
     await page.click('#submit-login'); 
   // await page.pause();
}); 

// Page invalid password Login 
test("4.verify the invalid login credentials", async({page}) => {
     await page.goto("https://practice.expandtesting.com/login")
     await page.fill('#username', 'vinoth11');
     await page.fill('#password', 'Vinoth@0');
     await page.click('#submit-login'); 
     await page.pause();
}); */

// Page forgot  password Login 
test("5.verify the forgot password screen ", async({page}) => {
     await page.goto("https://practice.expandtesting.com/forgot-password")
     await page.fill('#email', 'anandhanvinoth5@gmail.com');
     await page.getByRole('button', { name: 'Retrieve password' }).click();
     await page.pause();
     //submit
});






   


