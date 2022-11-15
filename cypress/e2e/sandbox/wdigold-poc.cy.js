// <reference types="Cypress" />
describe("Go to WDI Gold Site - Local", () => {
  it("Should access WDI Gold", () => {
    cy.visit("http://wdigold.vin65.io/");
    cy.get(
      '[aria-label="2007 Riesling"] > .productDescription > .v65-product-addToCart > .v65-addToCart > fieldset > .v65-product-addToCart-button > .defaultBtn > span'
    ).click();
    cy.get("#v65-toggleModalCart").click();
    cy.get("span:contains(Check Out)").click();
    cy.get("h1").should("have.text", "Checkout");
    cy.get("#tab-pickupBlock").click();
    cy.get(
      ".v65-checkoutSection.v65-shippingInformation > div:nth-of-type(1) > .button.v65-continue"
    ).click();
    cy.pause(1000);
    cy.get("#cardNumber").type("4242424242424242");
  });
});
