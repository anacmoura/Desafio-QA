import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Dado que eu tenha acesso à API de livros", () => {
  cy.request({
    method: "GET",
    url: "https://demoqa.com/BookStore/v1/Books",
    failOnStatusCode: false,
  }).as("listBooksResponse");
});

When("Quando eu selecionar dois livros disponíveis de livre escolha pelo ID", () => {
  cy.request({
    method: "POST",
    url: "https://demoqa.com/BookStore/v1/Books",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cypress.env("token")}`, 
    },
    body: {
    userId: Cypress.env("userId"),
    collectionOfIsbns: [
      { isbn: "9781593275846" },
      { isbn: "9781491904244" }
    ]
  },
    failOnStatusCode: false
  }).as("rentBooksResponse");
});

Then("Então a resposta deve retornar status 200 e confirmar que os dois livros foram alugados com sucesso", () => {
  cy.get("@rentBooksResponse").then((response) => {
    expect(response.status).to.eq(201);
    cy.log("Aluguel dos dois livros confirmado");
  });
});

