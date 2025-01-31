
# Selenium and Cucumber Automation for nopCommerce

This project automates core user functionalities of the [nopCommerce demo website](https://demo.nopcommerce.com/) using **Selenium WebDriver** and **Cucumber**. The automation focuses on the following key actions:

- User Registration
- Add to Cart
- User Login
- Password Reset

## Technologies Used

- **Selenium WebDriver** - Automates browser interactions.
- **Cucumber** - Implements Behavior-Driven Development (BDD) tests with Gherkin syntax.
- **Mocha** - Test framework to run the Cucumber tests.
- **Chai** - Assertion library for test validations.

## Project Structure

```
/final-proj
    /tests
        /features                   # Feature files with Gherkin scenarios
        /step_definitions           # Step definition files for Cucumber tests
        /support                    # Utility functions and helpers for the tests
    /node_modules                   # Node.js dependencies
    /reports                        # Allure reports
    /package.json                   # Project metadata and dependencies
```

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (Version 16 or higher)
- **npm** (comes with Node.js)
- **ChromeDriver** for browser automation

### 1. Install Node.js

Download and install Node.js from the official site: [Node.js](https://nodejs.org/)

### 2. Install Project Dependencies

Run the following command to install the required npm packages:

```bash
npm install
```

### 3. Install WebDriver

Download and place the appropriate WebDriver in the `/tests/support` directory:

- **ChromeDriver**: [Download here](https://sites.google.com/a/chromium.org/chromedriver/)

Make sure the WebDriver is accessible to Selenium WebDriver.

## Running Tests

### 1. Run the Tests with Cucumber

To execute all the Cucumber scenarios, run the following npm script:

```bash
npm test
```

This will run the tests and output the results to the console.

### 2. Generate Allure Report

To view a detailed Allure report after running tests, use this command:

```bash
npm run report
```

This will generate and serve the Allure report in your browser.

## Writing Tests

The tests are written using Gherkin syntax and are located in the `/tests/features` directory. Here's an example of a simple feature file:

```gherkin
@register
Feature: Users could register with new accounts

  Scenario: user could register with valid data successfully
    Given User go to register page
    When User select the type of gender
    And User enter the first and last name
    And User enter the date of birth
    And User enter the email
    And User enter and confirm the password
    And User click on register button
    Then success message is displayed

```

Step definitions corresponding to the above scenario are defined in JavaScript files in the `/tests/step_definitions` directory. These files contain the automation logic for each step of the test.

### Example for Chrome:

Ensure you have the ChromeDriver downloaded and update the WebDriver configuration accordingly.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

