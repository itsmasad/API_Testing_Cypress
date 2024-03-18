///<reference types="cypress"/>

describe('This is a suit',()=>{

    it('verify the functionality of drop down',()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').should('exist');
        cy.get('h3').should('exist').should('have.text','Dropdown List')
        
        cy.get('#dropdown').select('Option 2'); 
    })

})