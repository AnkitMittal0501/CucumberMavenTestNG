$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login in Rediffmail",
  "description": "This will test the login feature for rediffmail login",
  "id": "login-in-rediffmail",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Login rediffmail with valid credentials",
  "description": "",
  "id": "login-in-rediffmail;login-rediffmail-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user is on rediffmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "driver instance should be terminated",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_rediffmail_login_page()"
});
formatter.result({
  "duration": 19355122579,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_username_and_password()"
});
formatter.result({
  "duration": 168959150,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login()"
});
formatter.result({
  "duration": 3082048901,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_should_able_to_login()"
});
formatter.result({
  "duration": 7860699,
  "status": "passed"
});
formatter.match({
  "location": "Login.driver_instance_should_be_terminated()"
});
formatter.result({
  "duration": 32656,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_on_home_page()"
});
formatter.result({
  "duration": 2179406494,
  "status": "passed"
});
});