
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Builder, By, until } from 'selenium-webdriver';
import AddToCartPage from '../../pages/AddToCartPage.js';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(100000)

let driver;
let addToCartPage;

Given('User navigates to the product page', async function () {
    driver = new Builder().forBrowser('chrome').build();
    addToCartPage = new AddToCartPage(driver);
    await addToCartPage.navigateToProductPage('https://demo.nopcommerce.com/nokia-lumia-1020'); // Example product page
});

When('user clicks on the add to cart button', async function () {
    await addToCartPage.clickAddToCartButton();
});

When('user confirms adding to shopping cart', async function () {
    await addToCartPage.confirmAddingToCart();
});

Then('the product added successfully to shopping cart', async function () {
    const successMessage = await addToCartPage.getSuccessMessage();
    expect(successMessage).to.include('The product has been added to your shopping cart');
    await driver.quit();
});
























// import { Given, When, Then } from '@cucumber/cucumber';
// import { By } from 'selenium-webdriver';
// import { expect } from 'chai';

// Given('user is logged in', async function () {
//     // Ensure user is logged in
//     await this.driver.get('https://demo.nopcommerce.com/');
//     const loginButton = await this.driver.findElements(By.css('.ico-login'));
//     if (loginButton.length > 0) {
//         await this.driver.get('https://demo.nopcommerce.com/login');
//         await this.driver.findElement(By.id('Email')).sendKeys('leqaahani@example.com');
//         await this.driver.findElement(By.id('Password')).sendKeys('123456');
//         await this.driver.findElement(By.css('button.login-button')).click();
//     }
// });

// When('user clicks on the add to cart button', async function () {
//     await this.driver.findElement(By.css('.product-box-add-to-cart-button')).click();
// });

// When('chooses the specified features of the product', async function () {
//     // Select product features, if any
// });

// When('confirms adding to shopping cart', async function () {
//     await this.driver.findElement(By.id('add-to-cart-button-1')).click();
// });

// Then('the product is added successfully to the shopping cart', async function () {
//     const notification = await this.driver.findElement(By.css('.bar-notification')).getText();
//     expect(notification).to.include('The product has been added to your shopping cart');
// });
