
@login
Feature: User Login

  Scenario: Valid Login
    Given user is on the login page
    When user enters "ahmedachraf@example.com" and "123456"
    Then user should be redirected to the homepage

  Scenario: Invalid Login
    Given user is on the login page
    When user enters "invalid@example.com" and "wrongpassword"
    Then user should see an error message
