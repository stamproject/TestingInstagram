const {test, expect} = require('@playwright/test');
const LoginPage = require("../../pages/loginPage");
const HomePage = require("../../pages/homePage");
const ProfilePage = require("../../pages/profilePage");

test('Open Settings and Privacy', async({page}) =>
{
    await page.goto('https://www.instagram.com/accounts/login/');
    const loginPage = new LoginPage(page);
    await loginPage.logInToApp();
    const homePage = new HomePage(page);
    await homePage.goToProfile();
    const profilePage = new ProfilePage(page);
    await profilePage.openSettingsAndPrivacy();
});