///<reference types="cypress"/>

describe('This is suit for alerts',()=>{

    it('First alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // cy.get(':nth-child(1) > button',{timeout:10000}).should('exist').should('have.text','Click for JS Alert');
        cy.get(':nth-child(1) > button').click({force:true});
        
        // Verifying if the alert have this string
        cy.on('window:alert', (str)=>{
            expect(str).equal('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('2nd alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // Clicking the alert
        cy.contains('Click for JS Confirm').click();
        // Clicking the ok, and if we want to click cancel then we can write false instead of true
        cy.on('window:confirm',()=>true)
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('3nd alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then(($win)=>{
            cy.stub($win, 'prompt').returns("This is dummy text")
            cy.contains('Click for JS Prompt').click()
        })

    })

})