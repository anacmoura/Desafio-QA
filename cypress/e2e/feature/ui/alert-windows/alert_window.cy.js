describe("Browser Windows DemoQA", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com");
  });

  it("Deve abrir uma nova janela e validar a mensagem exibida", () => {
    cy.contains(".card-body", "Alerts, Frame & Windows").click();
    cy.contains(".text", "Browser Windows").click();

    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen").callsFake((url) => {
        win.location.href = url; 
      });
    });

    cy.get("#windowButton").click();

    cy.url().should("include", "/sample");
    cy.get("#sampleHeading").should("have.text", "This is a sample page");
  });
});
