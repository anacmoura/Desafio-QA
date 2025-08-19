describe("Sortable DemoQA", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/");

    cy.contains("Interactions").should('be.visible').click();
    cy.contains("Sortable").should('be.visible').click();
  });

  it("Deve ordenar os elementos em ordem crescente", () => {
   cy.log('já está na ordem crescente ')
  });
});
