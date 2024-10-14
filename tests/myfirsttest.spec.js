const {test, expect} = require('@playwright/test')
  

const timestamp = Date.now();
const randomEmail = `user${timestamp}@example.com`;

test.describe('User Flow Tests', () => {
test.beforeEach('Sign UP Test Case', async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage()


    
    await page.goto('https://letcode.in/');

    // Using Playwright-Specific Locator
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByPlaceholder('Enter your name').click();
    await page.getByPlaceholder('Enter your name').fill('Minha');

    // Using CSS Selector
    await page.locator('#email').click();
    await page.locator('#email').fill(randomEmail);

    // Using Xpath Selector
    await page.locator("//input[@id='pass']").click();
    await page.locator("//input[@id='pass']").fill('kanwalarif123');

    await page.getByLabel('I agree to the terms and').check();
    await page.locator("button[class='button is-primary']").click();
   

    //Assert
    await expect(page.locator("//div[@aria-label='You have logged in Minha']")).toHaveText('You have logged in Minha')
    console.log('sign up successfully with assert');

   
   await page.locator("//a[@class='button is-primary is-rounded is-small ng-star-inserted']").click();
   console.log('Sign out successfully');
   //await page.pause();

    
    
})

test('Login Test Case', async({browser}) =>{

  const context = await browser.newContext();
  const page = await context.newPage()

 
await page.goto('https://letcode.in/');
await page.getByRole('link', { name: 'Log in' }).click();
  
await page.locator('[name="email"]').click();
await page.locator('[name="email"]').fill(randomEmail);

await page.getByPlaceholder('Enter password').fill('kanwalarif123');
await page.locator("//button[normalize-space()='LOGIN']").click();

//Assert
await expect(page.locator("//div[@aria-label='Welcome Minha']")).toHaveText('Welcome Minha')
console.log('login successfully');
})
});