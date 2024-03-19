///<reference types="cypress"/>

describe('This is suit',()=>{

    it('Custom Command For API',()=>{
        cy.api_checks('https://www.google.com/')
    })
})