@loginRequired
Feature: Verify that logged in user can add items to cart

  @loginRequired
  Scenario Outline: Adding an Item to the Cart as a Logged-in User
    Given Navigate to Homepage as a Logged-in User
    When Add item to cart
    Then Verify Item is Added Successfully
