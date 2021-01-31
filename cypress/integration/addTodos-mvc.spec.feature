Feature: LoginConduit

   I want to Log into Conduit

   Scenario: Conduit Login
   Given I lunch Conduit Login page
   When I enter a 'Username' and 'Password'
   And I click on the Signin button.
   Then 'Your feed' text should be displayed