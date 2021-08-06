/// <reference types="Cypress" />
describe('Verifying variables, cypress and jquery commands ', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        //approach 1
        // const listOfLinksText = ['Makeup', 'Skincare']
        // listOfLinksText.forEach(text => cy.get('a[href*="product/category&path="]').contains(text).click())

        //approach 2
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('a[href*="product/category&path="]').contains('Skincare').click()
    })
})