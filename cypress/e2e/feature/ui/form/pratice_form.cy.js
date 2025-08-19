describe("Formulário DemoQA", () => {
  beforeEach(() => {
    cy.validateUrl();
  });
  it("Deve acessar o site, navegar até o formulário, preencher e validar popup", () => {
    cy.contains("Forms").should("be.visible").click();
    cy.contains("Practice Form").should("be.visible").click();
    cy.url().should("include", "/automation-practice-form");

    cy.fillPracticeForm();

    cy.get(".modal-content").should("be.visible");
    cy.contains("Thanks for submitting the form").should("be.visible");

    cy.get("#closeLargeModal").should("be.visible").click();
    cy.get(".modal-content").should("not.exist");
  });
});
