describe('Create a new account', () => {
    it('Validate that the user can create a new account', () => {
        cy.visit("/customer/account/create/");
        //  Math.random() // 0-1  ,  0.1 , 0.43 0.7777 
        const emailNum = Math.floor(Math.random()*1000); // 0 - 999
        
        cy.get("#firstname").type("Razan")
        cy.get("#lastname").type("Balatiah")
        cy.get("#email_address").type("razanbalatiah"+emailNum+"@gmail.com") 
        // razanbalatiah567@gmail.com
        cy.get("#password").type("test@123")
        cy.get("#password-confirmation").type("testo@123")
        cy.contains("button","Create an Account").click(); 
        cy.wait(1000)
        cy.get("[role=alert]").should("be.visible").and("contain","Thank you for registering with Main Website Store")
        cy.get(".page-title").should("contain","My Account")
        // cy.screenshot({capture:"fullPage"})
        // cy.screenshot({capture:"runner"})
        // cy.screenshot({capture:"viewport"})


        cy.get(".logged-in").first().should("contain","Welcome, Razan Balatiah!")
        cy.url().should('eq','https://magento.softwaretestingboard.com/customer/account/')
    });

    // it.only('Verify that the validation for the password is correct', () => {
    //     cy.visit("/customer/account/create/")
    //     const emailNum = Math.floor(Math.random()*1000); // 0 - 999
        
    //     cy.get("#firstname").type("Razan")
    //     cy.get("#lastname").type("Balatiah")
    //     cy.get("#email_address").type("razanbalatiah"+emailNum+"@gmail.com") 
        
    //     cy.get("#password").type("12345678")
    //     // cy.get("#password-strength-meter").should("contain","Password Strength")
    //     cy.get("#password-strength-meter-label").should("contain","Weak")
    //     cy.get("#password-error").should("be.visible")
    //     .and("contain","Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.")
    // });

});