
@cart
Feature: User can add a product to the shopping cart

  Scenario: User adds product to shopping cart
    Given User navigates to the product page
    When user clicks on the add to cart button
    And user confirms adding to shopping cart
    Then the product added successfully to shopping cart
