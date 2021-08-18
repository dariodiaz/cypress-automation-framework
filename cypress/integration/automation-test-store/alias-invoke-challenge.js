describe('Alias and invoke Challenge', () => {
    it('Validate and count all the thumbnails in the homepage', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('.thumbnail').as('productsThumbnails')
        cy.get('.productcart').as('addToCartLink')
        cy.get('@productsThumbnails').its('length').should('be.eq', 16)

        cy.get('@addToCartLink').should('have.attr', 'title')
        .and('match', /Add to Cart/);
    })

})