@loginRequired
Feature: Verify that user can cange his password and signed out from the session
@loginRequired
  Scenario Outline: as a user i want to change my password
    Given as a logged-in user, navigate to my account page 
    When Press Change password and change it
    Then user should be signed out 


