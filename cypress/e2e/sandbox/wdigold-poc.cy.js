// <reference types="Cypress" />
describe("Go to WDI Gold Site - Local", () => {
  it("Should access WDI Gold", () => {
    cy.visit("http://wdigold.vin65.io/");
    cy.get(".v65-productGroup-product:nth-child(1) span").click();
    //cy.get(".v65-productGroup-product:nth-child(1) .v65-addToCart").submit();
    cy.get("span:contains(Check Out)").click();
    cy.get("#joinClub").click({ force: true });
    cy.get("#tab-pickupBlock").click();
    //cy.get(".v65-shippingOptionsContinue").click();
    //wdigold.vin65.io/index.cfm?method=checkoutV2ShippingAddress.editShippingAddressSuccessJSON
    cy.get(
      "#v65-checkout > div > div.v65-shippingInformation.v65-checkoutSection > div:nth-child(2) > button > span.v65-shippingOptionsContinue"
    ).click({ force: true });
    cy.get(
      "#v65-checkout > div > div.v65-shippingInformation.v65-checkoutSection > div:nth-child(2) > button > span.v65-shippingOptionsContinue"
    ).click({ force: true });
    cy.pause(500);
    cy.get("#cardNumber").type("4242424242424242", { force: true });
    cy.get("#nameOnCard").type("Test User", { force: true });
    cy.get("#cardExpiryMo").type("07");
    cy.get("#cardExpiryMo").select("05");
    cy.get("#cardExpiryYr").type("2025");
    cy.get("#cardExpiryYr").select("2026");
    cy.get("#cvv2").click();
    cy.get("#cvv2").type("111");
    cy.get("#v65-shipBirthMonth").type("5");
    cy.get("#v65-shipBirthMonth").select("May");
    cy.get("#v65-shipBirthDay").click();
    cy.get("#v65-shipBirthDay").type("24");
    cy.get("#v65-shipBirthYear").click();
    cy.get("#v65-shipBirthYear").type("1983");
    cy.get("#firstName").click();
    cy.get("#firstName").type("Test");
    cy.get("#lastName").type("User");
    cy.get("#address").click();
    cy.get("#address").type("Test Address 123");
    cy.get("#city").click();
    cy.get("#city").type("American Canyon");
    cy.get("#stateCode").select("California");
    //cy.get("#stateCode").click();
    cy.get("#zipCode").click();
    cy.get("#zipCode").type("94503");
    cy.get("#email").click();
    cy.get("#email").type("testuser@test.com");
    cy.get("#mainPhone").type("1112223345");
    cy.get(".button:nth-child(3)").click();
    // cy.get(
    //   "body > main > div > div > div.v65-checkoutTools > div.v65-reviewOrder.v65-checkoutSection > div > button"
    // ).click();
    cy.get("#v65-topPlaceOrder").click({ force: true });
  });
});
