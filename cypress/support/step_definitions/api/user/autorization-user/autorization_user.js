import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Dado que eu tenho um usuário válido para autorização e envio a requisição de autorização" , () => {
  cy.request({
    method: 'POST',
    url: "https://demoqa.com/Account/v1/Authorized",
    headers: { "Content-Type": "application/json" },
    body: {
      userName: Cypress.env("userName"),
      password: Cypress.env("password"),
    },
    failOnStatusCode: false,
  }).as("authorizationResponse");
})

Then("Então a api deve retornar um status 200 com a mensagem true" , () => {
  cy.get("@authorizationResponse").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.eq(true);
    cy.log(`Usuário autorizado: ${response.body}`);
  });
})