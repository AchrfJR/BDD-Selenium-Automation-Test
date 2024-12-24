
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Builder } from 'selenium-webdriver';
import LoginPage from '../../pages/LoginPage.js';

let driver;
let loginPage;

Given('user is on the login page', async function () {
    console.log('Executing: user is on the login page');
    driver = new Builder().forBrowser('chrome').build();
    loginPage = new LoginPage(driver);
    await loginPage.navigateToLoginPage();
});

When('user enters {string} and {string}', async function (email, password) {
    await loginPage.enterCredentials(email, password);
    await loginPage.clickLoginButton();
});

Then('user should be redirected to the homepage', async function () {
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.contain('/home'); // Adjust URL based on actual app
    await driver.quit();
});

Then('user should see an error message', async function () {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.contain('Login was unsuccessful'); // Adjust error message
    await driver.quit();
});

