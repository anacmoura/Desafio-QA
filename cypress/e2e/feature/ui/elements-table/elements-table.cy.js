import _ from "lodash";

describe("Elements Table DemoQA", () => {
  beforeEach(() => {
    cy.validateUrl();
    
    cy.contains("Elements").should("be.visible").click();
    cy.contains("Web Tables").should("be.visible").click();
  });

  it("Criar um novo registro e editar o registro", () => {
    cy.fillTheForms();
    
    cy.get("#edit-record-4").should("be.visible").click();
    cy.get(selectors.userEmail)
      .should("be.visible")
      .clear()
      .type("silvajoaosenior@example.com");
    cy.get(selectors.salary).should("be.visible").clear().type("20000");
    cy.get(selectors.submitButton).should("be.visible").click();

  });

  it(" criar e deletar o novo registro criado ", () => {
    cy.fillTheForms();

    cy.get("#delete-record-4").should("be.visible").click();
    cy.contains("João").should("not.exist");
  });

  it.only("Criar 12 usuários e deletar todos exceto os 3 originais", () => {
    _.times(12, () => {
      cy.fillTheForms();
    });

    _.times(12, (i) => {
      cy.get(`#delete-record-${i + 4}`).click();
    });

    _.times(12, () => {
      cy.contains("João").should("not.exist");
    });

    cy.get("#delete-record-1").should("exist");
    cy.get("#delete-record-2").should("exist");
    cy.get("#delete-record-3").should("exist");
  });
});
