///<reference types="cypress"/>

describe("This is a suit",()=>{ 

    it('this is a test',()=>{
        cy.visit('https://books.toscrape.com/index.html')
        // cy.get('locator',{timeout:10000}).type('Cypress')
        cy.url().should('include','index.html')
        // Right Click
        cy.get('locator').rightclick()
        // Double Click
        cy.get('locator').dblclick()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('you double clicked me ')
        })
    })

    it('this is a test',()=>{

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('you double clicked me ')
        })
        cy.visit('https://books.toscrape.com/index.html')

        // Double Click
        cy.get('locator').dblclick()
    })
})