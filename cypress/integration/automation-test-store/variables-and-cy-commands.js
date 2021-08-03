/// <reference types="Cypress" />
describe('Verifying variables, cypress and jquery commands ', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        const listOfLinksText = ['Makeup', 'Skincare']
        listOfLinksText.forEach(text => cy.get('a[href*="product/category&path="]').contains(text).click())
    })
})