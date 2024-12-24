
import { By } from 'selenium-webdriver';

export default class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToLoginPage() {
        await this.driver.get('https://demo.nopcommerce.com/login');
    }

    async enterCredentials(email, password) {
        await this.driver.findElement(By.id('Email')).sendKeys(email);
        await this.driver.findElement(By.id('Password')).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(By.css('button.login-button')).click();
    }

    async getErrorMessage() {
        return await this.driver.findElement(By.css('.message-error')).getText();
    }
}


