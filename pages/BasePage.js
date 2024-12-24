
const { By } = require('selenium-webdriver');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateTo(path) {
        await this.driver.get(`${process.env.BASE_URL}${path}`);
    }

    async findElement(locator) {
        return await this.driver.findElement(locator);
    }

    async click(locator) {
        await (await this.findElement(locator)).click();
    }

    async type(locator, text) {
        await (await this.findElement(locator)).sendKeys(text);
    }
}

module.exports = BasePage;
