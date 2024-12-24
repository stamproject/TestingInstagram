const {test, expect} = require('@playwright/test');
const LoginPage = require("../../pages/loginPage");
const HomePage = require("../../pages/homePage");

test('Search Profile', async({page}) =>
{
    await page.goto('https://www.instagram.com/accounts/login/');
    const loginPage = new LoginPage(page);
    await loginPage.logInToApp();
    const homePage = new HomePage(page);
    await homePage.searchProfile();
    await expect(page).toHaveURL('https://www.instagram.com/zuck/');
});