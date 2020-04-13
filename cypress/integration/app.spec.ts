describe("Shopping Cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("allows adding items to cart", () => {
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Oranges]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();

    cy.get("[data-cy=cart-no-of-items]").should("have.text", "6");
  });

  it("allows navigation to cart", () => {
    cy.get("[data-cy=cart-clickable]").click();

    cy.url().should("contain", "/cart");

    cy.get("[data-cy=no-items-message]").should("be.visible");
  });

  it("shows items in the cart", () => {
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Oranges]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();

    cy.get("[data-cy=cart-clickable]").click();

    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(1)").should(
      "have.text",
      "Apples"
    );
    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "2"
    );
    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(3)").should(
      "have.text",
      "£0.49"
    );
    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(4)").should(
      "have.text",
      "£0.98"
    );

    cy.get(".MuiTableBody-root > :nth-child(2) > :nth-child(1)").should(
      "have.text",
      "Oranges"
    );
    cy.get(".MuiTableBody-root > :nth-child(2) > :nth-child(2)").should(
      "contain",
      "1"
    );
    cy.get(".MuiTableBody-root > :nth-child(2) > :nth-child(3)").should(
      "have.text",
      "£0.99"
    );
    cy.get(".MuiTableBody-root > :nth-child(2) > :nth-child(4)").should(
      "have.text",
      "£0.99"
    );

    cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(1)").should(
      "have.text",
      "Pineapple"
    );
    cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(2)").should(
      "contain",
      "3"
    );
    cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(3)").should(
      "have.text",
      "£1.75"
    );
    cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(4)").should(
      "have.text",
      "£5.25"
    );

    cy.get("[data-cy=total-row] > :nth-child(4)").should("have.text", "£7.22");
  });

  it("should allow changing quantity in cart", () => {
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Apples]").click();

    cy.get("[data-cy=cart-clickable]").click();

    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "2"
    );

    cy.get("[data-cy=decrease-quantity-clickable]").click();

    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "1"
    );

    cy.get("[data-cy=increase-quantity-clickable]").click();
    cy.get("[data-cy=increase-quantity-clickable]").click();

    cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(2)").should(
      "contain",
      "3"
    );
  });

  it("allows clearing the cart", () => {
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Apples]").click();

    cy.get("[data-cy=cart-clickable]").click();

    cy.get("[data-cy=clear-cart-clickable]").click();

    cy.get("[data-cy=no-items-message]").should("be.visible");
  });

  it("should allow adding discount", () => {
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Oranges]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();

    cy.get("[data-cy=cart-clickable]").click();

    cy.get("[data-cy=discount-code-field]").type("FRUITY30");
    cy.get("[data-cy=apply-discount-clickable]").click();

    cy.get("[data-cy=discount-code-row] > .MuiTableCell-alignRight").should(
      "have.text",
      "Discount Code: FRUITY30"
    );
    cy.get("[data-cy=discount-code-row] > :nth-child(4)").should(
      "have.text",
      "-£0.30"
    );

    cy.get("[data-cy=total-row] > :nth-child(4)").should("have.text", "£6.92");
  });

  it("should show error message for invalid discount", () => {
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Apples]").click();
    cy.get("[data-cy=add-Oranges]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();
    cy.get("[data-cy=add-Pineapple]").click();

    cy.get("[data-cy=cart-clickable]").click();

    cy.get("[data-cy=discount-code-field]").type("FRUITY3");
    cy.get("[data-cy=apply-discount-clickable]").click();

    cy.get(".MuiFormHelperText-root").should(
      "have.text",
      "That code is not valid"
    );
  });
});
