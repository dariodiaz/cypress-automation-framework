/// <reference types="Cypress" />
describe('Interact with dropdown lists via Webdriveruni', () => {
    it('Select specific values via select dropdown lists', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select('javascript').contains('JavaScript')

    });

    it('Dropdown challenge - Select Maven and Testng and assert', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')

    });
});
