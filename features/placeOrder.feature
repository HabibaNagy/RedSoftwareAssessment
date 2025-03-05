@loginRequired
Feature: Verify that user can place order

  @loginRequired
  Scenario: Placing an Order as a Logged-in User
    Given Navigate to the Place Order Page
    When Enter User Details and Proceed
    Then Review and Submit the Order
