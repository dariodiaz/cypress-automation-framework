/// <reference types="Cypress" />
describe('Verifying variables, cypress and jquery commands ', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        //approach 1
        const listOfLinksText = ['Makeup', 'Skincare']
        listOfLinksText.forEach(text => cy.get('a[href*="product/category&path="]').contains(text).click())
    })

    it('Validate properties of the contact page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        //Jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })

        //Embedded commands (closure)
        
    })
})