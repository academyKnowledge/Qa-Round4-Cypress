/// <reference types="cypress"/>
describe('Selectors', () => {
    it('examples-selectors', () => {
        cy.visit("https://www.telerik.com/support/demos");
        cy.get("h1").contains("Demos");
        cy.contains("h1","Demos")
        cy.get(".NavAlt-anchor").eq(3)
        cy.get("#web")
        cy.get(".TK-Footer-List").eq(1).find(".TK-Footer-List-Item a").eq(4);
        cy.get("[href='/blogs']").last()
        cy.contains("a.TK-Footer-Link", "Blogs");
        cy.get('.TK-Footer-Link').eq(6)
        cy.get(".TK-Footer-Link").contains("Blogs");

        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").find("li");   
        cy.get(".TK--Footer-Desktop .TK-Footer-List-Social").children()
        cy.get(".TK-Footer-List-Social").first().find("li")

    });
});