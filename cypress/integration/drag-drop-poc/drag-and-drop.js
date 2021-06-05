/// <reference types="cypress" />
// See this link for reference: https://stackoverflow.com/questions/51889918/drag-and-drop-is-not-happening-in-cypress-io-test
describe('Verify the drag and drop test', function() {
    const dataTransfer = new DataTransfer;

    function dndIt() {
      cy.get('#todrag span:first-of-type')
        .trigger('dragstart', { dataTransfer });

      cy.get('#mydropzone')
        .trigger('drop', { dataTransfer });

      cy.get('#todrag span:first-of-type')
        .trigger('dragend');               // <-- seleniumeasy listens for this...
    }                                      // if left out, draggables are copied.

    beforeEach(function() {
      cy.viewport(1000, 600);
      cy.visit('https://www.seleniumeasy.com/test/drag-and-drop-demo.html');
    });

    it('Check whether the drag and drop of an item is working fine', function() {
      dndIt();
      cy.get('#droppedlist')
        .should(($el) => {
          expect($el.children()).to.have.lengthOf(1)
        });
    });
  });