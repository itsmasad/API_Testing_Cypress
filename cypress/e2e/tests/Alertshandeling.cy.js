///<reference types="cypress"/>

describe('This is suit for alerts',()=>{

    it('First alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // cy.get(':nth-child(1) > button',{timeout:10000}).should('exist').should('have.text','Click for JS Alert');
        cy.get(':nth-child(1) > button').click({force:true});

        cy.on('window:alert', (str)=>{
            expect(str).equal('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

})