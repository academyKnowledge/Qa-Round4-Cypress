/// <reference types="cypress"/>
describe('Selectors Lesson', () => {
    it('1', () => {
        cy.visit("/")
        cy.get("p") // get elements by tag name 
        cy.get(".logo") // get element by class name
        cy.get("#search")
        cy.get("[name=q]")
        cy.get("*")
        cy.get("a.logo")
        cy.get(".authorization-link a").first()
        cy.get(".showcart")
        cy.get(".page-title")
        cy.get(".page-footer .links a").first()
        cy.contains("Notes")
    });
});