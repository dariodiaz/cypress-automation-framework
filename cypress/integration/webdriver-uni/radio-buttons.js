/// <reference types="Cypress" />
describe('Verify radio buttons via Webdriveruni', () => {
    it('Check specific radio buttons', () => {
       cy.visit('http://webdriveruniversity.com')
       cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
    });
});