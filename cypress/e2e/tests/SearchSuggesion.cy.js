///<reference types="cypress"/>


describe('verify the auto-search suggestion functionality',()=>{

    it('verify auto search',()=>{
        cy.visit('https://www.amazon.in');
        cy.get('#twotabsearchtextbox').should('exist');

        // Creating a function to get all the values in the suggesion
        cy.get('#twotabsearchtextbox').type('iphone').then(function(el){
        cy.get('.left-pane-results-container').children().each(function(el){
            cy.wrap(el).invoke('text').then(function(txt){
                cy.log(txt)
                if(txt.trim()=="iphone 12"){
                    cy.wrap(el).click({force:true});
                }
            })
        })
      })

    })

})