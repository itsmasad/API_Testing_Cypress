///<reference types="cypress"/>

describe('This is a suit',()=>{

    it('verifying functionality in iframes',()=>{

        cy.visit("https://jqueryui.com/checkboxradio/")
        // Goint into iframe
        cy.get('.demo-frame').then(el=>{
            // Wrapping the content in iframe variable
            cy.wrap(el.contents().find('body')).as('iframe')
            // clicking the variable inside the iframe
            cy.get('@iframe').find('.ui-checkboxradio-icon.ui-corner-all.ui-icon.ui-icon-background.ui-icon-blank').eq(0).click()

        })
    })

})