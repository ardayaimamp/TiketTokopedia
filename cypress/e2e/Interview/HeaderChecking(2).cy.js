describe("Section Header Part 2", () => {
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

});