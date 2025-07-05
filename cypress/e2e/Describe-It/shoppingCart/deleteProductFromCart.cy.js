describe('Delete product from cart', () => {
   
    beforeEach(()=>{
        cy.visit("/");
        cy.get("#search").type("shirt {enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.wait(1000)
        cy.get(".swatch-option.text").contains("M").click();
        cy.get("[aria-label=Purple]").click()
        cy.get("#product-addtocart-button").click();
    })
    it('Validate the user can delete a product from shopping cart dialog', () => {
        cy.wait(3000)
       cy.get(".showcart").click();
       cy.get("[title='Remove item']").click();
       cy.get(".action-accept").click()
       cy.get(".subtitle.empty").should("contain","You have no items in your shopping cart.")
       cy.get(".counter-number").should("be.hidden") 
    });

    //  it('Validate the user can delete a product from shopping cart page', () => {
        
    // });

});