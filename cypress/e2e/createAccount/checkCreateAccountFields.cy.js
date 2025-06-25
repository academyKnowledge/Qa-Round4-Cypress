describe('Check fields in create new account form', () => {
    it('verify that all fields are visible in create new account form', () => {
        
        cy.visit("/customer/account/create/");
        
        cy.get(".page-title").should("be.visible");
        cy.contains("span","Personal Information").should("be.visible");
        cy.contains("span","Sign-in Information").should("be.visible");
    
        cy.get("[for=firstname]").should("be.visible");
        cy.get("[for=lastname]").should("be.visible");
        cy.get("[for=email_address]").should("be.visible");
        cy.get("[for=password]").should("be.visible");
        cy.get("[for=password-confirmation]").should("be.visible");

        cy.get("#password-strength-meter").should("be.visible")
        .and("contain","Password Strength")

        cy.get("button").contains("Create an Account").should("be.visible");

        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");

        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")
    });
});