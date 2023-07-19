describe("Home dashbord kuncie", () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit("https://tiket.tokopedia.com/kereta-api/", {
        headers: {
          "Accept-Encoding": "gzip, deflate"
        }
      })
    });

    it("Contains Email dan Password Input,and Login Button", () => {
        //check button
        const button = cy.get('[data-testid="searchTicketButton"]');
        button.should("be.visible");
        button.contains("Cari Tiket");
      });

    it("Makesure url link Kuncie premium", () => {
        cy.url().should("eq", "https://tiket.tokopedia.com/kereta-api/");
        cy.get('[data-testid="selectorAsal"]').click()
        cy.wait(6000);
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"] > .optionText').click()
        cy.get('[data-testid="selectorTujuan"]').click()
        cy.wait(6000);
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Cirebon-Cirebon-CN"]').click()
        const button = cy.get('[data-testid="searchTicketButton"]');
        button.click({force: true});
        cy.wait(6000)

        cy.url().should("eq", "https://tiket.tokopedia.com/kereta-api/search/?r=BD.CN&d=20230720&a=1&i=0")
        cy.wait(6000)

      });
});