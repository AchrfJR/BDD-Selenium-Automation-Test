
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Builder } from 'selenium-webdriver';
import ResetPage from '../pages/ResetPage.js';

let driver;
let resetPage;

Given('user navigates to the reset password page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    resetPage = new ResetPage(driver);
    await resetPage.navigateToResetPage();
});

When('user enters {string} in the email field', async function (email) {
    await resetPage.enterEmail(email);
});

When('user clicks on the recovery button', async function () {
    await resetPage.clickRecoverButton();
});

Then('user sees a confirmation message {string}', async function (expectedMessage) {
    const actualMessage = await resetPage.getResetConfirmationMessage();
    expect(actualMessage).to.equal(expectedMessage);
    await driver.quit();
});

Then('user sees an error message {string}', async function (expectedMessage) {
    const actualMessage = await resetPage.getErrorMessage();
    expect(actualMessage).to.equal(expectedMessage);
    await driver.quit();
});
