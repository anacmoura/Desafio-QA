import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

const userName = faker.person.firstName();

Given("Dado que eu tenho os dados de um novo usuário", () => {
  cy.log(`Usuário: ${userName}, Senha: ${Cypress.env("password")}`);
});

When("E envio a requisição de criação no endpoint", () => {
  cy.request({
    method: "POST",
    url: "https://demoqa.com/Account/v1/User",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      userName: userName,
      password: Cypress.env("password"),
    },
    failOnStatusCode: false,
  }).as("createUserResponse");
});

Then(
  "O usuário deve ser criado com sucesso e a api deve retornar um status code 201",
  () => {
    cy.get("@createUserResponse").then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("userID");
      cy.log(`ID do usuário criado: ${response.body.userID}`);
    });
  }
);
