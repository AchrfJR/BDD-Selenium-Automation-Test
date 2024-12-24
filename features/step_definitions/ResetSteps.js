
import { Given, When, Then } from '@cucumber/cucumber';
import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';


Given('user navigate to login page', async function () {
    this.driver = await new Builder().forBrowser('chrome').build(); // Initialize the driver here
    await this.driver.get('https://demo.nopcommerce.com/login');
});

When('user click on forgetPassword', async function () {
    const forgotPasswordLink = await this.driver.findElement(By.css('.forgot-password a'));
    await forgotPasswordLink.click();
});

Then('user navigate to forgetPage and enter his email {string}', async function (email) {
    await this.driver.wait(until.urlContains('/passwordrecovery'));
    const emailField = await this.driver.findElement(By.id('Email'));
    await emailField.sendKeys(email);
});

Then('user click on Recovery Button', async function () {
    const recoveryButton = await this.driver.findElement(By.css('button[name="send-email"]'));
    await recoveryButton.click();
});

Then('password will be reset', async function () {
    const notificationMessage = await this.driver.findElement(By.css('#bar-notification .bar-notification.success .content')).getText();
    assert(notificationMessage.includes("Email with instructions has been sent to you"));
});