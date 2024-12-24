
class RegisterPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://demo.nopcommerce.com/register';
    }

    async navigateToRegisterPage() {
        await this.driver.get(this.url);
    }

    async selectGender(gender) {
        const genderRadioButton = await this.driver.findElement({ css: `input#gender-${gender.toLowerCase()}` });
        await genderRadioButton.click();
    }

    async enterName(firstName, lastName) {
        await this.driver.findElement({ id: 'FirstName' }).sendKeys(firstName);
        await this.driver.findElement({ id: 'LastName' }).sendKeys(lastName);
    }

    async enterDateOfBirth(day, month, year) {
        await this.driver.findElement({ name: 'DateOfBirthDay' }).sendKeys(day);
        await this.driver.findElement({ name: 'DateOfBirthMonth' }).sendKeys(month);
        await this.driver.findElement({ name: 'DateOfBirthYear' }).sendKeys(year);
    }

    async enterEmail(email) {
        await this.driver.findElement({ id: 'Email' }).sendKeys(email);
    }

    async enterPassword(password, confirmPassword) {
        await this.driver.findElement({ id: 'Password' }).sendKeys(password);
        await this.driver.findElement({ id: 'ConfirmPassword' }).sendKeys(confirmPassword);
    }

    async clickRegisterButton() {
        await this.driver.findElement({ id: 'register-button' }).click();
    }

    async getSuccessMessage() {
        const messageElement = await this.driver.findElement({ css: '.result' });
        return await messageElement.getText();
    }
}

export default RegisterPage;

