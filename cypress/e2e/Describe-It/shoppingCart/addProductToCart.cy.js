/// <reference types="cypress"/>

describe('Add To cart functionality', () => {
    before(()=>{
         cy.loginToMagento()
    })
    it.only('Validate that the user can add product to cart', () => {
        cy.visit("/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
        cy.wait(3000)
    });
});