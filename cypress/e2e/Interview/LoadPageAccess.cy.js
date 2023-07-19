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

    it("visit login page and Check Tittle" , () =>{
        cy.visit("https://tiket.tokopedia.com/kereta-api/", {
            headers: {
              "Accept-Encoding": "gzip, deflate"
            }
          })
        // cy.visit("https://tiket.tokopedia.com/kereta-api/",  { responseTimeout: 120000 });
        // cy.wait(6000);
        cy.title().should("eq", "Pesan Tiket Kereta Api Online, Harga Promo dan Murah - Tokopedia");
    });

});
