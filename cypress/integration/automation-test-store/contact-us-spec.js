/// <reference types="Cypress" />
describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com')
        cy.get('selector').type('hola')
    });
});