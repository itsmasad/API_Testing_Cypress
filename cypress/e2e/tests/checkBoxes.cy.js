///<reference types="cypress"/>

describe('This is a suit',()=>{

    it('verify the checkbox functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })

})