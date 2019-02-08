#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Login in Rediffmail
  This will test the login feature for rediffmail login


  Scenario: Login rediffmail with valid credentials
    Given user is on rediffmail login page
    When 	user enter username and password
    And  	user click on login
    Then 	user should able to login
    And  	driver instance should be terminated
    Then 	user is on home page
   