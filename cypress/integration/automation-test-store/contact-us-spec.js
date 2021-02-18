/// <reference types="Cypress" />
describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://automationteststore.com')
        cy.get('.info_links_footer').contains('Contact Us').click()
        cy.get('.maintext').should('contain', ' Contact Us')
        cy.get('#ContactUsFrm_first_name').type('Joe')
        cy.get('#ContactUsFrm_email').type('joe@test.com')
        cy.get('#ContactUsFrm_enquiry').type('This is a test This is a test This is a test')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40').should('contain', 'Your enquiry has been successfully sent to the store owner!')
    })
})