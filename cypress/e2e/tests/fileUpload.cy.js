///<reference types="cypress"/>

describe('This is suit',()=>{

    it('Uploading the file',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile("C:/Users/Asad/Desktop/Document.txt");
        cy.get('#file-submit').click()
        cy.get('h3').should('exist').should('have.text','File Uploaded!')
    })

})