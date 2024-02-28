describe("HTTP rEQUESTS", ()=>{

    // Asserting Get API response
    it("Get Call", ()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    })


    it('Post Call', ()=>{
        cy.request({

            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
            }

        })
        .its('status')
        .should('equal', 201)
    })
//    it('Demo', ()=>{
//     cy.visit("https://www.google.com/")
//     cy.get('#APjFqb').type('ABCDD').click();
//    })


})