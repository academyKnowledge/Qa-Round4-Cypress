import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";

Given('The user navigated to login page',()=>{
    cy.visit("/customer/account/login/")
})

When('Types wrong email in email input field',()=>{
    cy.get("#email").type("CypressUser1111@gmail.com") 
})

When('Types email in email input field',()=>{
    cy.get("#email").type("CypressUser@gmail.com") 
})

When('Types password in password input field',()=>{
    cy.get("#pass").type("test@123")
})

When('Clicks on login button',()=>{
    cy.get("#send2").click()
})

Then('The user will redirected to my Account page',()=>{
    cy.url().should('eq',"https://magento.softwaretestingboard.com/customer/account/")
})

Then('{string} title should be visible',(title)=>{
    cy.get(".page-title").should('contain',title)
})

Then('{string} message should shown and should be visible',(message)=>{
    cy.get("[role=alert]").should('contain',message).and('be.visible')
})

When('Types {string} in email input field',(email)=>{
    cy.get("#email").type(email) 
})

When('Types {string} in password input field',(password)=>{
    cy.get("#pass").type(password)
})
