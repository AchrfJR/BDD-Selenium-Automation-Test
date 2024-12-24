
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Builder } from 'selenium-webdriver';
import AddToCartPage from '../../pages/AddToCartPage.js';

let driver;
let addToCartPage;

Given('user is on the product page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    addToCartPage = new AddToCartPage(driver);
    await addToCartPage.navigateToProductPage('https://demo.nopcommerce.com/some-product-url'); // Adjust URL
});

When('user clicks the add to cart button', async function () {
    await addToCartPage.clickAddToCartButton();
});

When('user selects {string} as color and {string} as size', async function (color, size) {
    const options = {
        '.color-selector': color,
        '.size-selector': size,
    };
    await addToCartPage.selectProductOptions(options);
});

Then('user sees a success message {string}', async function (expectedMessage) {
    const actualMessage = await addToCartPage.getSuccessMessage();
    expect(actualMessage).to.equal(expectedMessage);
    await driver.quit();
});
