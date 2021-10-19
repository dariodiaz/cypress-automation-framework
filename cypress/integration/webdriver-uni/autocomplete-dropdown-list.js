/// <reference types="Cypress" />
describe('Verify Autocomplete dropdown lists via webdriveruni', () => {
    it('Select specific product via autocomplete list', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    });

});
