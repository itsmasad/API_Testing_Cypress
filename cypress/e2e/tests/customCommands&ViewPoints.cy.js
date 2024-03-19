///<reference types="cypress"/>
// Default view port you can set in cypress.config.js
describe('This is suit',()=>{

    it('Custom Command For API',()=>{
        cy.api_checks('https://www.google.com/')
    })
})

