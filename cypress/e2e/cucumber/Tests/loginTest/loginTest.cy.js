/// <reference types="cypress"/>
import { Given , When , Then, Before , After } from "cypress-cucumber-preprocessor/steps";
import loginTestActions from "../../../../support/PageObjects/loginTest/Actions.cy";
import sharedAssertions from "../../../../support/PageObjects/shared/Assertions.cy";

const loginAction = new loginTestActions();
const shardAssertion = new sharedAssertions();

// Before({tags:'@TC-6666'},()=>{
//     cy.log("Hello")
// })

// Before({tags:'@TC-6666 or @TC-1234'},()=>{
//     cy.log("Hello")
// })

// Before({tags:'@TC and @TC-6666'},()=>{
//     cy.log("Hello")
// })


Given('The user navigated to login page',()=>{
    loginAction.openLoginPage()
})

When('Types wrong email in email input field',()=>{
    loginAction.typeEmailInEmailInputField("CypressUser1111@gmail.com")
})

When('Types email in email input field',()=>{
    loginAction.typeEmailInEmailInputField("CypressUser@gmail.com")
})

When('Types password in password input field',()=>{
    loginAction.typePasswordInPasswordInputField("test@123")
})

When('Clicks on login button',()=>{
   loginAction.clickOnLoginButton();
})

Then('The user will redirected to my Account page',()=>{
    shardAssertion.checkCurrentURLIsContain("https://magento.softwaretestingboard.com/customer/account/")
})

Then('{string} title should be visible',(title)=>{
    shardAssertion.checkPageTitleIsContain(title)
})

Then('{string} message should shown and should be visible',(message)=>{
    shardAssertion.checkMessageBarIsVisible().checkMessageBarIsContain(message)
})

When('Types {string} in email input field',(email)=>{
    loginAction.typeEmailInEmailInputField(email) 
})

When('Types {string} in password input field',(password)=>{
    loginAction.typePasswordInPasswordInputField(password)
})

