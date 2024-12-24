import { By } from 'selenium-webdriver';

export default class ResetPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToResetPage() {
        await this.driver.get('https://demo.nopcommerce.com/passwordrecovery');
    }

    async enterEmail(email) {
        await this.driver.findElement(By.id('Email')).sendKeys(email);
    }

    async clickRecoverButton() {
        await this.driver.findElement(By.css('button[name="send-email"]')).click();
    }

    async getResetConfirmationMessage() {
        return await this.driver.findElement(By.css('.result')).getText();
    }
}
