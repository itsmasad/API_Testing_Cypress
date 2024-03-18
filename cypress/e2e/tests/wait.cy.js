///<reference types="cypress"/>

describe('This is suit',()=>{

    it('Test',()=>{
        cy.visit('https://the-internet.herokuapp.com')
        cy.wait(5000)
    })

})