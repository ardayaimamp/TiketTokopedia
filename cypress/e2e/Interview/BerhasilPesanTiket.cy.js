describe("Load Page Accesss", () => {
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

    it("Berhasil ! Melakukan pencarian tiket kereta", () =>{
        //pilih keberangkatan
        cy.get('[data-testid="selectorAsal"]').click()
        cy.wait(6000);
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"] > .optionText').click()

        //pilih tujuan
        cy.get('[data-testid="selectorTujuan"]').click()
        cy.wait(6000);
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Cirebon-Cirebon-CN"]').click()

        //pilih keberangkatan
        cy.get('[data-testid="selectorBerangkat"]').click()
        cy.wait(6000);
        cy.get('[data-testid="date20230815"] > .date_card > .date').click()

        //klik cari tiket
        const button = cy.get('[data-testid="searchTicketButton"]');
        button.click({force: true});
        cy.wait(6000)

        //check url pencarian tiket kereta
        cy.url().should("eq", "https://tiket.tokopedia.com/kereta-api/search/?r=BD.CN&d=20230815&a=1&i=0")
        cy.wait(6000)

    });


});