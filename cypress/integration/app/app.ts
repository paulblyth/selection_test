describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render a title", () => {
    cy.contains("Items App!");
  });
});
