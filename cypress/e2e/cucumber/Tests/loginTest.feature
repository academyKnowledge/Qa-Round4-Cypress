@smokeTest @login
Feature: login functionality

    @TC-1234 @TC
    Scenario: Validate that the user can login to magento website
        Given The user navigated to login page
        When Types email in email input field
        And Types password in password input field
        And Clicks on login button
        Then The user will redirected to my Account page
        And "My Account" title should be visible

    @TC-6666  @TC
    Scenario: Validate that the user can't login to magento
        Given The user navigated to login page
        When Types wrong email in email input field
        And Types password in password input field
        And Clicks on login button
        Then "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later." message should shown and should be visible


    Scenario Outline: check login functionality

        Given The user navigated to login page
        When Types <email> in email input field
        And Types <password> in password input field
        And Clicks on login button
        Then "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later." message should shown and should be visible

        Examples:
            | email                      | password      |
            | "CypressUser@gmail.comuuu" | "test@123"    |
            | "CypressUser@gmail.com"    | "test@12663"  |
            | "CypressUser@gmail.comuuu" | "testccc@123" |
