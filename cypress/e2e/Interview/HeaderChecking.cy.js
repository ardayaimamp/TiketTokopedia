describe("Section Header Part 1", () => {
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

    it("Check Section Header", () =>{
        const download = cy.get('.cta-download');
        download.should("be.visible");
        download.contains("Download Tokopedia App")
   
   
        const tentang = cy.get(':nth-child(1) > [data-testid="btnHeaderAbout"]')
        tentang.should("be.visible");
        tentang.contains("Tentang Tokopedia")
   
        const mitra = cy.get(':nth-child(2) > [data-testid="btnHeaderAbout"]')
        mitra.should("be.visible");
        mitra.contains("Mitra Tokopedia")
   
        const seller = cy.get(':nth-child(3) > [data-testid="btnHeaderSellerEdu"]')
        seller.should("be.visible");
        seller.contains("Pusat Seller")
   
        const promo = cy.get(':nth-child(4) > [data-testid="btnHeaderPromo"]')
        promo.should("be.visible");
        promo.contains("Promo")
   
        const bantuan = cy.get(':nth-child(5) > [data-testid="btnHeaderHelp"]')
        bantuan.should("be.visible");
        bantuan.contains("Pusat Bantuan")
       });

  

});