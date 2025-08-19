import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Dado que eu solicito o token com os dados do usuario criado", () => {
  cy.request({
    method: "POST",
    url: "https://demoqa.com/Account/v1/GenerateToken",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      userName: Cypress.env("userName"),
      password: Cypress.env("password"),
    },
    failOnStatusCode: false,
  }).as("generateTokenResponse");
});

Then("Então o token deve ser gerado com sucesso", () => {
  cy.get("@generateTokenResponse").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("token");
    expect(response.body.status).to.eq("Success");
    expect(response.body.result).to.eq("User authorized successfully.");

    cy.wrap(response.body.token).as("authToken");

    cy.log(`Token gerado: ${response.body.token}`);
  });
});
