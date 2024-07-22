/// <reference types="Cypress" />
describe('Verify radio buttons via Webdriveruni', () => {
    it('Check specific radio buttons', () => {
       cy.visit('http://webdriveruniversity.com')
       cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
    });

    it('Validate the states of specific radio buttons', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('[value="pumpkin"]').should('be.checked')
     });

     it('Should check the required checkboxes only', () => {
        
     });
});