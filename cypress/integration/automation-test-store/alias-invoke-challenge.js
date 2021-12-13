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
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        
        let itemsTotal = 0
        cy.get('@itemPrice').then($linkText => {
            let itemsPriceTotal = 0
            let itemPrice = $linkText.split('$')
            for(var i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log("Non sale price items total: " + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            let saleItemsPriceTotal = 0
            let saleItemPrice = $linkText.split('$')
            for(var i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPriceTotal
            cy.log("Sale price items total: " + saleItemsPriceTotal)
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(648.5)
        })
    })
})