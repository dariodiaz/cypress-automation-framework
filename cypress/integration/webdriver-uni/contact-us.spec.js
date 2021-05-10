/// <reference types="Cypress" />
describe('Test Contact Us form via Webdriveruni', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
       cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
       cy.title().should('include', 'WebDriver | Contact Us')
       cy.url().should('include', 'contactus')
       cy.get('[name="first_name"]').type('Dario')
       cy.get('[name="last_name"]').type('Diaz')
       cy.get('[name="email"]').type('dario@test.com')
       cy.get('textarea.feedback-input').type('text test')
       cy.get('[type="submit"]').click()
       cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it('Should not be able to submit a successful submission via contact us form', () => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('[name="first_name"]').type('Dario')
       cy.get('[name="last_name"]').type('Diaz')
       cy.get('textarea.feedback-input').type('text test')
       cy.get('[type="submit"]').click()
       cy.get('body').contains('Error: all fields are required')
       cy.get('body').contains('Error: Invalid email address')
    });
});