/// <reference types="Cypress" />
describe('Test mouse actions', () => {
    it('Scroll element into view', () => {
       cy.visit('http://webdriveruniversity.com')
       cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        
    });

});