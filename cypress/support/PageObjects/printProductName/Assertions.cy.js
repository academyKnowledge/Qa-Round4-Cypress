class printProductAssertions{
 
    printProduct(){
    cy.get(".product-item-link").then(($Products)=>{
        for (let i = 0; i < $Products.length; i++) {
            cy.wrap($Products[i]).invoke('text').then((productName)=>{
                cy.log(productName)
           })
        }
    })
    return this;    
}
}

export default printProductAssertions;