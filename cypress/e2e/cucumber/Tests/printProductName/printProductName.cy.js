/// <reference types="cypress"/>
import { Given  , Then  } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to magento website",()=>{
    cy.visit("/")
})

Then("The products should be available in hot seller section",()=>{
    
    cy.get(".product-item-link").then(($Products)=>{
        // const name = $Products.text()
        //    cy.log(name)
        for (let i = 0; i < $Products.length; i++) {
            cy.wrap($Products[i]).invoke('text').then((productName)=>{
                cy.log(productName)
           })
        }
    })

})