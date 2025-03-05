@loginRequired
Feature: Verify that user can remove item from cart

  @loginRequired
  Scenario: as a user, i can remove item from cart
    Given i'm on the homepage
    When navigate to cart and remove item
    Then cart should be empty
