
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Builder } from 'selenium-webdriver';
import RegisterPage from '../../pages/RegisterPage.js';

let driver;
let registerPage;

Given('User go to register page', async function () {
    driver = new Builder().forBrowser('chrome').build(); // Set up the driver
    registerPage = new RegisterPage(driver); // Create an instance of the RegisterPage class
    await registerPage.navigateToRegisterPage(); // Navigate to the register page
});

When('User select the type of gender', async function () {
    await registerPage.selectGender('Male'); // You can change 'Male' to 'Female' as needed
});

When('User enter the first and last name', async function () {
    await registerPage.enterName('John', 'Doe'); // Replace 'John' and 'Doe' with dynamic data if needed
});

When('User enter the date of birth', async function () {
    await registerPage.enterDateOfBirth('01', 'January', '1990'); // Adjust as needed
});

When('User enter the email', async function () {
    await registerPage.enterEmail('ahmedachraf@example.com'); // Replace with dynamic email if needed
});

When('User enter and confirm the password', async function () {
    await registerPage.enterPassword('123456', '123456'); // Adjust the password as needed
});

When('User click on register button', async function () {
    await registerPage.clickRegisterButton(); // Click the register button
});

Then('success message is displayed', async function () {
    const actualMessage = await registerPage.getSuccessMessage();
    const expectedMessage = 'Your registration completed'; // Adjust this message as needed
    expect(actualMessage).to.equal(expectedMessage); // Check that the success message matches
    await driver.quit(); // Quit the browser after the test
});












































// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from 'chai';
// import { Builder } from 'selenium-webdriver';
// import RegisterPage from '../../pages/RegisterPage.js';

// let driver;
// let registerPage;

// Given('User go to register page', async function () {
//     driver = new Builder().forBrowser('chrome').build(); // Set up the driver
//     registerPage = new RegisterPage(driver); // Create an instance of the RegisterPage class
//     await registerPage.navigateToRegisterPage(); // Navigate to the register page
// });

// When('User select the type of gender', async function () {
//     await registerPage.selectGender('Male'); // You can change 'Male' to 'Female' as needed
// });

// When('User enter the first and last name', async function () {
//     await registerPage.enterName('John', 'Doe'); // Replace 'John' and 'Doe' with dynamic data if needed
// });

// When('User enter the date of birth', async function () {
//     await registerPage.enterDateOfBirth('01', 'January', '1990'); // Adjust as needed
// });

// When('User enter the email', async function () {
//     await registerPage.enterEmail('john.doe@example.com'); // Replace with dynamic email if needed
// });

// When('User enter and confirm the password', async function () {
//     await registerPage.enterPassword('Password123', 'Password123'); // Adjust the password as needed
// });

// When('User click on register button', async function () {
//     await registerPage.clickRegisterButton(); // Click the register button
// });

// Then('success message is displayed', async function () {
//     const actualMessage = await registerPage.getSuccessMessage();
//     const expectedMessage = 'Your registration completed'; // Adjust this message as needed
//     expect(actualMessage).to.equal(expectedMessage); // Check that the success message matches
//     await driver.quit(); // Quit the browser after the test
// });

























// import { Given, When, Then } from '@cucumber/cucumber';
// import { By } from 'selenium-webdriver';
// import { expect } from 'chai';

// Given('User go to register page', async function () {
//     await this.driver.get('https://demo.nopcommerce.com/register');
// });

// When('User select the type of gender', async function () {
//     const genderOption = await this.driver.findElement(By.id('gender-male'));
//     await genderOption.click();
// });

// When('User enter the first and last name', async function () {
//     await this.driver.findElement(By.id('FirstName')).sendKeys('John');
//     await this.driver.findElement(By.id('LastName')).sendKeys('Doe');
// });

// When('User enter the date of birth', async function () {
//     await this.driver.findElement(By.name('DateOfBirthDay')).sendKeys('1');
//     await this.driver.findElement(By.name('DateOfBirthMonth')).sendKeys('January');
//     await this.driver.findElement(By.name('DateOfBirthYear')).sendKeys('1990');
// });

// When('User enter the email', async function () {
//     await this.driver.findElement(By.id('Email')).sendKeys('leqaahani@example.com');
// });

// When('User enter and confirm the password', async function () {
//     const password = '123456';
//     await this.driver.findElement(By.id('Password')).sendKeys(password);
//     await this.driver.findElement(By.id('ConfirmPassword')).sendKeys(password);
// });

// When('User click on register button', async function () {
//     const registerButton = await this.driver.findElement(By.id('register-button'));
//     await registerButton.click();
// });

// Then('success message is displayed', async function () {
//     const successMessage = await this.driver.findElement(By.className('result')).getText();
//     expect(successMessage).to.include('Your registration completed');
// });

// When('User clicks on the Continue button', async function () {
//     const continueButton = await this.driver.findElement(By.css('.button-1.register-continue-button'));
//     await continueButton.click();
// });

// Then('user is redirected to the homepage', async function () {
//     const currentUrl = await this.driver.getCurrentUrl();
//     expect(currentUrl).to.equal('https://demo.nopcommerce.com/');
// });
