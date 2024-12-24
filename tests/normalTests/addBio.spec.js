const {test, expect} = require('@playwright/test');
const LoginPage = require("../../pages/loginPage");
const HomePage = require("../../pages/homePage");
const ProfilePage = require("../../pages/profilePage");
const EditProfilePage = require("../../pages/editProfilePage");

test('Add a Biography', async({page}) =>
{
    await page.goto('https://www.instagram.com/accounts/login/');
    const loginPage = new LoginPage(page);
    await loginPage.logInToApp();
    const homePage = new HomePage(page);
    await homePage.goToProfile();
    const profilePage = new ProfilePage(page);
    profilePage.editProfile();
    const editProfilePage = new EditProfilePage(page);
    await editProfilePage.addBio();
    const submitButton = await page.$('//div[contains(text(),\'Submit\')]');
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click();
});