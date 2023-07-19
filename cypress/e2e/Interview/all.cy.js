describe("Home dashbord Tiket Tokopedia | Header Section", () => {
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
   
    it("Check image logo tokopedia", () =>{
        //check uploaded image is exist
        const logo = cy.get("img").should("have.attr", "src", "https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/0f55b6f6.svg");
        logo.should("be.visible");
        cy.wait(6000);
    });

    it("Check section Button", () =>{
        //check Button masuk
        const masuk = cy.get('.css-w8e91v-unf-btn');
        cy.wait(6000);
        masuk.should("be.visible");
        masuk.should("have.attr", "type", "button");

        // masuk.click()

        //Check Button Daftar
        const daftar = cy.get('.css-1f10iic-unf-btn');
        cy.wait(6000);
        daftar.should("be.visible");
        daftar.should("have.attr", "type", "button");
    });


    it("Check text Button", () =>{
        //check Text Button masuk
        cy.get('.css-w8e91v-unf-btn > span').contains("Masuk").should("be.visible")
        cy.wait(6000);

        //Check Text Button Daftar
        cy.get('.css-1f10iic-unf-btn > span').contains("Daftar").should("be.visible")
        cy.wait(6000);
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

    // it.only("Check hover menu", () =>{
    //     cy.get('[href="https://www.tokopedia.com/flight/"] > .container').trigger('mouseover')
    //     // .container(1).invoke("val").should("eq", "Daftar Transaksi")
    //     cy.wait(6000);
       
    // });

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

    it("Melakukan pencarian tiket kereta", () =>{
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

    it("Gagal ! Melakukan pencarian tiket kereta", () =>{
        //pilih keberangkatan
        cy.get('[data-testid="selectorAsal"]').click()
        cy.wait(6000);
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"] > .optionText').click()

        //pilih tujuan
        cy.get('[data-testid="selectorTujuan"]').click()
        cy.wait(6000);
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"] > .optionText').click()

        //pilih keberangkatan
        cy.get('[data-testid="selectorBerangkat"]').click()
        cy.wait(6000);
        cy.get('[data-testid="date20230815"] > .date_card > .date').click()

        //klik cari tiket | Button Disable
        const button = cy.get('[data-testid="searchTicketButton"]');
        button.should('be.disabled')
        // button.click({force: true});
        cy.wait(6000)

        //alert message
        cy.get('.error-text').should("be.visible").contains("Stasiun keberangkatan dan tujuan tidak boleh sama.");

        //check Url page masih di halaman yg sama
        cy.url().should("eq", "https://tiket.tokopedia.com/kereta-api/")
    });



    



});