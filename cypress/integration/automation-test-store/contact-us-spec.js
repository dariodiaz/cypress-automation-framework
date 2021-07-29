/// <reference types="Cypress" />
describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com')
        cy.get('a[href$="contact"]').click()
        //cy.xpath('//a[contains(@href, "contact")]').click()
        cy.get('.maintext').should('contain', ' Contact Us')
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('joe@test.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('This is a test This is a test This is a test')
        cy.get('button[title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed')
    })
})