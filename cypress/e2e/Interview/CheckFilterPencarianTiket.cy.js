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
    it("Check card cari tiket", () =>{

        //Label name        
        const text1 = cy.get('.css-q1vfvh-unf-card')
        cy.wait(6000);
        text1.contains("Pesan tiket kereta online di Tokopedia")
        text1.should("be.visible")

        //Label asal
        cy.get(':nth-child(1) > .inner-title > .subtitle').contains("Asal").should("be.visible")

        //Label Tujuan
        cy.get('.location > :nth-child(3) > .inner-title > .subtitle').contains("Tujuan").should("be.visible")

        //Label Berangkat
        cy.get('.date > :nth-child(1) > :nth-child(1) > div').contains("Berangkat").should("be.visible")

        // Label Pulang
        cy.get('.css-xe490b').contains("Pulang").should("be.visible")

        // Label Jumlah Penumpang
        cy.get('.passengers > .inner-title > .subtitle').contains("Jumlah Penumpang").should("be.visible")


    });

    it("Check Pencarian tiket kereta", () =>{

        //pilih keberangkatan     
        const pergi = cy.get('[data-testid="selectorAsal"]')
        // cy.wait(6000);
        pergi.should("be.visible")

        //pilih tujuan
        const tujuan = cy.get('[data-testid="selectorTujuan"]')
        // cy.wait(6000);
        tujuan.should("be.visible")

        //Berangkat
        const berangkat = cy.get('[data-testid="selectorBerangkat"]')
        // cy.wait(6000);
        berangkat.should("be.visible")

        //Checkbox Pulang
        const pulang = cy.get('.css-1i85qm8-unf-checkbox__area')
        pulang.should("be.visible")

        // Jumlah penumpang
        const penumpang = cy.get('[data-testid="selectorJumlah Penumpang"]')
        penumpang.should("be.visible")

        // Button Cari tiket
        const button = cy.get('[data-testid="searchTicketButton"]');
        button.should("be.visible");
        button.contains("Cari Tiket");


    });


});