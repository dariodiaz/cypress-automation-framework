/// <reference types="Cypress" />
describe('Verify checkboxes via Webdriveruni', () => {
    it('Check and validate checkbox', () => {
       cy.visit('http://webdriveruniversity.com')
       cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

       //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
       cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
       cy.get('@option-1').check()
       cy.get('@option-1').check().should('be.checked')
    });

    it('Challenge - Uncheck and validate', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
 
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
     });

     it('Check multiple checkboxes', () => {
      cy.visit('http://webdriveruniversity.com')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

      cy.get('input[type="checkbox"]')
         .check(["option-1", "option-2", "option-3", "option-4"])
         .should('be.checked')
   });
});