describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("the page contains the correct tabs", () => {
    cy.contains("Stakehouses");
    cy.contains("Charts");
  });

  it("Connect wallet opens the Rainbowkit popup", () => {
    cy.contains("Connect Wallet").click();
    cy.on("window:alert", (txt) => {
      //Assertion
      expect(txt).to.contains("What is a Wallet?");
    });
  });
});
