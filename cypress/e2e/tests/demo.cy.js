///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

describe('this is suite',()=>{
    it('verify user is able to open google.com',()=>{
        cy.visit('https://www.google.com');
    });

    it('verify the element is present or not',()=>{
        cy.visit('https://www.google.com')
        cy.get('#APjFqb',{ timeout: 10000 }).should('exist');
 

        cy.get('#APjFqb').type('Cypress')
        cy.get('[value="Google Search"]').eq(0).click({force:true})
        cy.get().
    });
})

