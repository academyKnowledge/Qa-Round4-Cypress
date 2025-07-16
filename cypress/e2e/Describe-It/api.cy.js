/// <reference types="cypress"/>
describe('Http requests', () => {
    it('Request types', () => {
        // get all posts 
        cy.request("https://jsonplaceholder.typicode.com/posts")

        cy.request("https://jsonplaceholder.typicode.com/users")

        cy.request("POST","https://jsonplaceholder.typicode.com/posts",{"userId":10,"id":101})

        cy.request("GET","https://jsonplaceholder.typicode.com/posts/100")
        cy.request("DELETE","https://jsonplaceholder.typicode.com/posts/100")
        
        // cy.request("PUT","https://jsonplaceholder.typicode.com/posts/100",{"title":"test"})


        cy.request("https://jsonplaceholder.typicode.com/users/2").then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.contain("Ervin")
            expect(response.body.email).to.eq("Shanna@melissa.tv")
            expect(response.body.address.street).to.eq("Victor Plains")
        })


    });


    it.only('', () => {
          cy.request("https://reqres.in/api/unknown/2").then((responseData)=>{
            expect(responseData.status).to.eq(200)
            expect(responseData.body.data.name).to.eq("fuchsia rose")
            expect(responseData.body.data.year).to.eq(2001)
            expect(responseData.body.support.text).to.contain("Tired of writing")
        })

    });
});