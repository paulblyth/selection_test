describe.skip("Add Item", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render an add button", () => {});

  describe("when clicking the button", () => {
    it("should add an item to the list", () => {});
    it("should disable the button when 10 items are added", () => {});
  });
});
