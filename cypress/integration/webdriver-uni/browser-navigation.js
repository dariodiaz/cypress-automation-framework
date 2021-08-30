/// <reference types="Cypress" />
describe('Test Contact Us form via Webdriveruni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
       cy.visit('http://webdriveruniversity.com')
       cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
       cy.url().should('include', 'contactus')

       cy.go('back')
       cy.reload()
       //cy.reload(true) //reload without using cache

       cy.go('forward')
       cy.url().should('include', 'contactus')
    });
});