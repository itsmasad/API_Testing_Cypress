///<reference types="cypress"/>

describe("This is a suit",()=>{ 

    it('this is a test',()=>{
        cy.visit('https://books.toscrape.com/index.html')
        // Typing in search bar
        cy.get('locator',{timeout:10000}).type('Cypress')
        // Get the title of the page
        cy.title().should('include', 'Expected Title'); // Replace 'Expected Title' with the title you're expecting
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
    it('this is a test',()=>{
        cy.get('locator').select('Option 2')
        // Take a screenshot and save it with a specific name
        cy.screenshot('example-screenshot');
    })
})