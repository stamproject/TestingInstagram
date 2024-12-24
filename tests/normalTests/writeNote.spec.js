const {test, expect} = require('@playwright/test');
const LoginPage = require("../../pages/loginPage");
const HomePage = require("../../pages/homePage");
const MessagePage = require("../../pages/messagesPage");

test('Write a Note', async({page}) =>
{
    await page.goto('https://www.instagram.com/accounts/login/');
    const loginPage = new LoginPage(page);
    await loginPage.logInToApp();
    const homePage = new HomePage(page);
    await homePage.openMessages();
    const messagePage = new MessagePage(page);
    await messagePage.writeNote();
});