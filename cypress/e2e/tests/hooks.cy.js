///<reference types="cypress"/>

describe('This is a suit',()=>{

    //Before, BeforeEach, After, AfterEach
    before(function(){
        cy.log('Before')   
     })

     beforeEach(function(){
        cy.log('Before Each')   
     })

    it('Test 1',()=>{
        cy.log('Test 1 executed')
    })

    
    it('Test 2',()=>{
        cy.log('Test 2 executed')
    })
})