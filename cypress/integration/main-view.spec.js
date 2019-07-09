describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get(".card").eq(1).as("targetcard")
          .find(".card-footer")
          .find("button")
          .as("cardbuttons");
      });
  
    it("loads the list of contacts", () => {
      cy.get(".badge").should("contain", 50);
      cy.get(".card").should("have.length", 50);
    });

    describe("Delete operation", () => {
        it("allows a contact be deleted", () => {
          cy.get(".badge").should("contain", 50);
          cy.get("@cardbuttons")
            .contains("Delete")
            .click();
          cy.get("@cardbuttons")
            .contains("Confirm")
            .click();
          cy.get(".badge").should("contain", 49);
        });
    
        it("allows a delete operation be canceled", () => {
          cy.get("@cardbuttons")
             .contains("Delete")
            .click();
            cy.get("@cardbuttons")
            .contains("Cancel")
            .click();
          cy.get(".badge").should("contain", 50);
        });
      });
      describe("Edit operation", () => {
        it("allows a contact be edited", () => {
          cy.get("@cardbuttons")
            .contains("Edit")
            .click();
          cy.get("@targetcard")
            .find(".card-body")
            .should("have.css", "background-color")
            .and("eq", "rgba(0, 0, 0, 0)");
          cy.get("@targetcard")
            .find("input")
            .first()
            .clear()
            .type("test@example.com");
          cy.get("@cardbuttons")
            .contains("Save")
            .click();
          cy.get("@targetcard")
            .find("[data-icon=envelope]")
            .next()
            .should("contain", "test@example.com");
        });
    
        it("allows an edit be cancelled", () => {
          cy.get("@targetcard")
            .find("[data-icon=envelope]")
            .next()
            .invoke("text")
            .then($text => {
              cy.get("@cardbuttons")
                .contains("Edit")
                .click();
              cy.get("@targetcard")
                .find("input")
                .first()
                .clear()
                .type("test@example.com");
              cy.get("@cardbuttons")
                .contains("Cancel")
                .click();
              cy.get("@targetcard")
                .find("[data-icon=envelope]")
                .next()
                .should("contain", $text);
            });
        });
      });
});