
import { By, until } from 'selenium-webdriver';

export default class AddToCartPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToProductPage(url) {
        await this.driver.get(url);
    }

    async clickAddToCartButton() {
        const button = await this.driver.findElement(By.id('add-to-cart-button-20')); // Updated selector
        await button.click();
    }

    async confirmAddingToCart() {
        // The page automatically confirms adding the item after clicking the button, no extra confirmation needed
    }

    async getSuccessMessage() {
        // Increase the timeout to 10 seconds for the success message to appear
        const successMessageElement = await this.driver.wait(
            until.elementLocated(By.css('#bar-notification .bar-notification.success')),
            10000 // Wait up to 10 seconds
        );
        const message = await successMessageElement.getText();
        return message;
    }
}



