const {test, expect} = require('@playwright/test');
const LoginPage = require("../../pages/loginPage");
const HomePage = require("../../pages/homePage");
const MessagesPage = require("../../pages/messagesPage");

test('Comment Post', async({page}) =>
{
    await page.goto('https://www.instagram.com/accounts/login/');
    const loginPage = new LoginPage(page);
    await loginPage.logInToApp();
    const homePage = new HomePage(page);
    await homePage.openMessages(); 
    const messagesPage = new MessagesPage(page);
    await messagesPage.commentPost();
});