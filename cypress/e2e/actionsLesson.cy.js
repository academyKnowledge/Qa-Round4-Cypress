/// <reference types="cypress"/>
describe('Actions lesson', () => {
    it('Click command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#btn1").click()
        cy.get("#btn1").click("bottom")
        cy.get("#btn0").click({force:true})
        cy.get("#btn0").click("left",{force:true})
        cy.get(".btn").click({multiple:true})

        // for (let index = 0; index < 5; index++) {

        //   cy.get(".btn").eq(index).click()
        // }
        // cy.get(".btn").eq(0).click()
        // cy.get(".btn").eq(1).click()
        // cy.get(".btn").eq(2).click()
        // cy.get(".btn").eq(3).click()
        // cy.get(".btn").eq(4).click()

    });

    it('Type Command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("[placeholder='Type your name']").clear().type("Razan")
        cy.get("[placeholder='Type your name']").clear().type("Razan",{delay:1000})
        cy.get("[name=input_0]").clear({force:true}).type("Razan",{force:true})
    });

    it('Search for product', () => {
        cy.visit("/")
        // cy.get("#search").clear().type("bag{enter}")
        // cy.get("#search").clear().type("bag"+"{enter}")
        cy.get("#search").clear().type("shirt"+"{home}"+"{del}",{delay:1000})
    });

    it('Select command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#country").select("Jordan") // select by text 
        cy.get("#country").select("palestine_country") // select by value 
        cy.get("#country").select(2) // select by index 
    });

    it('check and uncheck command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#Banana").check()
        cy.get("#Nuts").check().uncheck()
        cy.get("#checkMe").check({force:true})
        cy.get("[type=checkbox]").not("#checkMe").check()
        cy.get("[type=checkbox]").not("#checkMe").check(['Banana','or','le'])
        cy.get("[type=checkbox]").not("#checkMe").check().uncheck(['Fries','Nuts'])
        cy.get("#developer").check()
        cy.get("#tester").check()
        cy.reload()
    });

    it('dbclick command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#dbClick").dblclick()
    });

    it('focus and blur commands', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#myTextField").focus().blur()
    });

    it.only('trigger command', () => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#btn1").trigger("mousedown")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseover")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseleave")


    });

});