describe('Alias and invoke Challenge', () => {
    it('Validate and count all the thumbnails in the homepage', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productsThumbnails')

        cy.get('@productsThumbnails').should('have.length', 16)
        cy.get('@productsThumbnails').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it('Calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productsThumbnails')

        // cy.get('@productsThumbnails').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then($linkText => {
            var itemPrice = $linkText.split('$')
            for(var i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
            }
        })
    })
})