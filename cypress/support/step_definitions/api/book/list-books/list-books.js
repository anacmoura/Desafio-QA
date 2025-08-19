import { Given,Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Dado que eu tenha acesso à API de livros e faço uma requisição GET para listar os livros", () => {
  cy.request({
    method: "GET",
    url: "https://demoqa.com/BookStore/v1/Books",
    failOnStatusCode: false,
  }).as("listBooksResponse");
  
});

Then("Então a resposta deve retornar status 200 com os livros disponíveis" , () => {
 cy.get("@listBooksResponse").then((response) => {
    expect(response.status).to.eq(200);
    cy.log(`Total de livros encontrados: ${response.body.books.length}`);
  });
})
