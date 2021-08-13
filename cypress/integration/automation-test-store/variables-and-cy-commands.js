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

        //Jquery approach

        //Embedded commands (closure)
        
    })
})