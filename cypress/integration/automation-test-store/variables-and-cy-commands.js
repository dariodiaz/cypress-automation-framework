/// <reference types="Cypress" />
describe('Verifying variables, cypress and jquery commands ', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        //approach 1
        const listOfLinksText = ['Makeup', 'Skincare']
        listOfLinksText.forEach(text => cy.get('a[href*="product/category&path="]').contains(text).click())
    })

    it.only('Navigating to specific product pages - 2', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        // this code will fail
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log('Found header text: ' + headerText)
        })
    })
})