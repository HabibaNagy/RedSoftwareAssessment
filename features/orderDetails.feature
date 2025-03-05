@loginRequired
Feature: Order History

  @loginRequired
  Scenario: View Details of the Most Recent Order in Order History
    Given I am logged into my account
    When I open the details of the most recent order
    Then I should see the order details matching my last placed order
