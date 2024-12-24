
import { By } from 'selenium-webdriver';

export default class RegisterPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToRegisterPage() {
        await this.driver.get('https://demo.nopcommerce.com/register');
    }

    async selectGender(gender) {
        const genderOption = gender === 'male' ? By.id('gender-male') : By.id('gender-female');
        await this.driver.findElement(genderOption).click();
    }

    async enterName(firstName, lastName) {
        await this.driver.findElement(By.id('FirstName')).sendKeys(firstName);
        await this.driver.findElement(By.id('LastName')).sendKeys(lastName);
    }

    async enterDateOfBirth(day, month, year) {
        await this.driver.findElement(By.name('DateOfBirthDay')).sendKeys(day);
        await this.driver.findElement(By.name('DateOfBirthMonth')).sendKeys(month);
        await this.driver.findElement(By.name('DateOfBirthYear')).sendKeys(year);
    }

    async enterEmail(email) {
        await this.driver.findElement(By.id('Email')).sendKeys(email);
    }

    async enterPassword(password, confirmPassword) {
        await this.driver.findElement(By.id('Password')).sendKeys(password);
        await this.driver.findElement(By.id('ConfirmPassword')).sendKeys(confirmPassword);
    }

    async clickRegisterButton() {
        await this.driver.findElement(By.id('register-button')).click();
    }

    async getSuccessMessage() {
        return await this.driver.findElement(By.className('result')).getText();
    }
}
