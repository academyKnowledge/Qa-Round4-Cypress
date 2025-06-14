/// <reference types="cypress"/>

// comment 
/**
 * 
 */

/**
 * Types of ways used to write test cases 
 * 
 * 1- describe - it 
 * 2- Steps ( Given , When , Then ) cucumber  // advanced 
 */ 


describe('test 1', () => {
    it('test case name', () => {
        cy.visit("https://www.google.com/")
    });

    it('test case number 2', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
    });

    /**
     * Test case for login 
     * 1- visit login page 
     * 2- type in email input field 
     * 3- type in password input field 
     * 4- click on login button 
     */
});

describe('Check login functionality', () => {
    
    it('Validate the user can open home page', () => {
        cy.visit("/")
    });
    
    it.only('Validate that the user can login to magento website successfully', () => {
        cy.visit("/customer/account/login/")  
        cy.get("#email").type("CypressUser@gmail.com") 
        cy.get("#pass").type("test@123")
        cy.get("#send2").click()
    });
});