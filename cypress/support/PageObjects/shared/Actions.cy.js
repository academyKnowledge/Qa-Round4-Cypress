class shardActions {

    openHomePage(){
        cy.visit("/")
        return this; 
    }
}
export default shardActions;