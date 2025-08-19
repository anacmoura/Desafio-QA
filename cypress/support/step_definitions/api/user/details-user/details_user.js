import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Dado que eu tenho um token de usuário válido e faço uma solicitação dos detalhes de um usuario especifico usando seu ID", () => {
  cy.request({
    method: "GET",
    url: `https://demoqa.com/Account/v1/User/${Cypress.env("userId")}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cypress.env("token")}`, 
    },
    failOnStatusCode: false
  }).as("userDetailsResponse");
});

Then("Então a resposta da solicitação deve incluir todos os livros alugados por esse usuario", () => {
  cy.get("@userDetailsResponse").then((response) => {
    expect(response.status).to.eq(200); 
    expect(response.body).to.have.property("books"); 
    cy.log(`Número de livros alugados: ${response.body.books.length}`);
  });
});
