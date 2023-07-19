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

    it("Check section menu travel", () =>{
        //check title Travel text
        const title = cy.get('.css-cc3acf > .title')
        title.contains("Travel")
        title.should("be.visible")

        //check section tiket pesawat
        const pesawat = cy.get('[href="https://www.tokopedia.com/flight/"] > .container')
        pesawat.contains("Tiket Pesawat")
        pesawat.should("be.visible")

        //check section tiket kereta
        const kereta = cy.get('.css-uwgk20 > .container')
        kereta.contains("Tiket Kereta")
        kereta.should("be.visible")

        //check section hotel
        const hotel = cy.get('[href="https://www.tokopedia.com/hotel/"] > .container')
        hotel.contains("Hotel")
        hotel.should("be.visible")

    });

});