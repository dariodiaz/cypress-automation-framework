/// <reference types="Cypress" />
describe('Verify checkboxes via Webdriveruni', () => {
    it('Check and validate checkbox', () => {
       cy.visit('http://webdriveruniversity.com')
       cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

       cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    });
});