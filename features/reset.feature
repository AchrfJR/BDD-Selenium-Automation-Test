
@reset
Feature: Reset Password

  Scenario: user could reset password successfully
    Given user navigate to login page
    When user click on forgetPassword
    Then user navigate to forgetPage and enter his email "user@example.com"
    And user click on Recovery Button
    And password will be reset
