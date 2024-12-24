const {test, expect} = require('@playwright/test');
const LoginPage = require("../../pages/loginPage");

test('Log In to Application', async({page}) =>
{
    await page.goto('https://www.instagram.com/accounts/login/');
    const loginPage = new LoginPage(page);
    await loginPage.logInToApp();
});