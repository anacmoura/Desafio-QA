import * as sel from "../support/selectors/ui/pratice-form/pratice_form";
import * as el from "../support/selectors/ui/pratice-form/fake_data";

Cypress.Commands.add("fillPracticeForm", () => {
  cy.get(sel.firstName).should("be.visible").type(el.firstName);
  cy.get(sel.lastName).should("be.visible").type(el.lastName);
  cy.get(sel.email).should("be.visible").type(el.email);
  cy.get(sel.genderMale).check({ force: true });
  cy.get(sel.mobile).should("be.visible").type(el.phone);

  cy.get(sel.dateOfBirth).should("be.visible").click();
  cy.get(sel.monthSelect).should("be.visible").select("September");
  cy.get(sel.yearSelect).should("be.visible").select("1995");
  cy.contains(sel.day, "10").should("be.visible").click();

  cy.get(sel.subjectsInput).should("be.visible").type("Maths{enter}");
  cy.get(sel.subjectsInput).should("be.visible").type("English{enter}");

  cy.contains(sel.hobbyReading).should("be.visible").click();
  cy.contains(sel.hobbyMusic).should("be.visible").click();

  cy.get(sel.uploadPicture)
    .should("be.visible")
    .selectFile("cypress/fixtures/teste-cypress.txt");
  cy.get(sel.currentAddress).should("be.visible").type(el.address);

  cy.get(sel.state).should("be.visible").click();
  cy.get("#state").find("input").type("NCR{enter}", ); 

  cy.get(sel.city).should("be.visible").click(); 

  cy.get(sel.city).type("Delhi{enter}");

  cy.get(sel.city).should("contain.text", "Delhi");
  cy.get(sel.submit).should("be.visible").click();
});


Cypress.Commands.add("validateUrl", () => {
    cy.visit("https://demoqa.com");
    cy.url().should("include", "demoqa");
})