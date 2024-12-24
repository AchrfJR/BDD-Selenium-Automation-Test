
import { By } from 'selenium-webdriver';

export default class AddToCartPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToProductPage(url) {
        await this.driver.get(url);
    }

    async clickAddToCartButton() {
        await this.driver.findElement(By.id('add-to-cart-button-id')).click();
    }

    async selectProductOptions(options) {
        for (const [option, value] of Object.entries(options)) {
            const element = await this.driver.findElement(By.css(option));
            await element.sendKeys(value);
        }
    }

    async getSuccessMessage() {
        return await this.driver.findElement(By.css('.success-message')).getText();
    }
}

