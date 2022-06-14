/// <reference types="Cypress" />
describe("Test Datepicker via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  });

  it("Select date from the datepicker", () => {
    let date = new Date();
    date.setDate(date.getDate());
    cy.log(date.getDate());
    let date1 = new Date();
    date1.setDate(date1.getDate() + 5);
    cy.log(date1.getDate());
  });
});
