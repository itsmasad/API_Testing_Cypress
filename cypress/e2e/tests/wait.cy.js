///<reference types="cypress"/>
// one is cy.wait and the other one is default timeout which you can set from the cypres.config.js

describe('This is suit',()=>{

    it('Test',()=>{
        cy.visit('https://the-internet.herokuapp.com')
        cy.wait(5000)
        cy.get(':nth-child(27) > a').click()
    })

})