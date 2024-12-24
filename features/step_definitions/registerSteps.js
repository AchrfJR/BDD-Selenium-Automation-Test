
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Builder } from 'selenium-webdriver';
import RegisterPage from '../../pages/RegisterPage.js';

let driver;
let registerPage;

Given('user is on the registration page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    registerPage = new RegisterPage(driver);
    await registerPage.navigateToRegisterPage();
});

When('user selects gender {string}', async function (gender) {
    await registerPage.selectGender(gender);
});

When('user enters {string} as first name and {string} as last name', async function (firstName, lastName) {
    await registerPage.enterName(firstName, lastName);
});

When('user enters {string} as email', async function (email) {
    await registerPage.enterEmail(email);
});

When('user enters {string}, {string}, and {string} as date of birth', async function (day, month, year) {
    await registerPage.enterDateOfBirth(day, month, year);
});

When('user sets {string} as password and confirms it', async function (password) {
    await registerPage.enterPassword(password, password);
});

When('user clicks the register button', async function () {
    await registerPage.clickRegisterButton();
});

Then('user sees a success message {string}', async function (expectedMessage) {
    const actualMessage = await registerPage.getSuccessMessage();
    expect(actualMessage).to.equal(expectedMessage);
    await driver.quit();
});

