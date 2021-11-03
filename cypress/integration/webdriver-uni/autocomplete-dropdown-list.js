/// <reference types="Cypress" />
describe('Verify Autocomplete dropdown lists via webdriveruni', () => {
    it('Select specific product via autocomplete list', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A')

        // try and delete
        cy.get('#myInput').type('B')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if(prod === productToSelect){
                $el.trigger("click")

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
        })
    });

});
