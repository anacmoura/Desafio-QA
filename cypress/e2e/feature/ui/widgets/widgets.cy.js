describe("Progress Bar DemoQA simples", () => {
  beforeEach(() => {
    cy.validateUrl();
    cy.contains("Widgets").click();
    cy.contains("Progress Bar").click();
  });

  it("Para a barra em 25% e reseta no final", () => {
    const stopValue = 25;
    const step = 100; 

    cy.clock(); 
    cy.get("#startStopButton").click(); 


    const advanceUntil = (target) => {
      cy.get(".progress-bar").then(($bar) => {
        const value = parseInt($bar.attr("aria-valuenow"));
        if (value < target) {
          cy.tick(step).then(() => advanceUntil(target));
        } else {
          if (target === stopValue) cy.get("#startStopButton").click(); 
          expect(value).to.be.gte(target);
        }
      });
    };

    advanceUntil(stopValue);   
    cy.get("#startStopButton").click();
    advanceUntil(100);        

    cy.get("#resetButton").click();
    cy.get(".progress-bar").should("have.attr", "aria-valuenow", "0");
  });
});
