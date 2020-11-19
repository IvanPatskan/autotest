Feature: Log in on ceek.com
  Me as a user 
  want to log in on test.lumen.com

  Scenario Outline: Log in
    Given I am on the login page
  	When I type <login> in the email field and <password> in the password field and I press the "LOG IN" button
  	Then I authorised I see a home page

  Examples:
  	|login|password|
  	|mewiwev62879@jqjlb.com|qwerty123|