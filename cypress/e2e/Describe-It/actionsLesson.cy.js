/// <reference types="cypress"/>
describe('Actions lesson', () => {
   before(()=>{
        cy.log("This is before hook")
   })
 
   beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")

   });
    it('Click command', () => {
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
        cy.get("[placeholder='Type your name']").clear().type("Razan")
        cy.get("[placeholder='Type your name']").clear().type("Razan",{delay:1000})
        cy.get("[name=input_0]").clear({force:true}).type("Razan",{force:true})
    });

    it.only('Search for product', () => {
        cy.visit("/")
        // cy.get("#search").clear().type("bag{enter}")
        // cy.get("#search").clear().type("bag"+"{enter}")
        cy.get("#search").clear().type("shirt"+"{home}"+"{del}",{delay:1000})
    });

    it('Select command', () => {
        cy.get("#country").select("Jordan") // select by text 
        cy.get("[value='jordan_country']").should("be.selected")
        // cy.get("#country").select("palestine_country") // select by value 
        // cy.get("#country").select(2) // select by index 
    });

    it('check and uncheck command', () => {
        cy.get("#Banana").check()
        cy.get("#Banana").should("be.checked")
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
        cy.get("#dbClick").dblclick()
    });

    it('focus and blur commands', () => {
        cy.get("#myTextField").focus()
        cy.get("#myTextField").should("have.focus")
        cy.get("#myTextField").focus().blur()
        cy.get("#myTextField").should("not.have.focus")
    });

    it('trigger command', () => {
        cy.get("#btn1").trigger("mousedown")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseover")
        cy.pause()
        cy.get("#trigger_btn").trigger("mouseleave")


    });

    after(()=>{
        cy.log("this is after")
    })

    afterEach(()=>{
        cy.log("this is afterEach")
    })

});