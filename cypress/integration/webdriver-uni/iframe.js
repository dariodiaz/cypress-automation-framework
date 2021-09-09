/// <reference types="Cypress" />
describe('Handling IFrame & Modals', () => {
    it('Handle webdriveruni iframe and modal', () => {
       cy.visit('http://webdriveruniversity.com')
       //You do this to avoid the link being opened in a new tab
       cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

    });

});