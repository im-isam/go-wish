export class Actions {
    static setDesktopViewport() {
      cy.viewport(1498, 1328);
    }
  
    static visitUrl() {
      cy.visit("https://onskeskyen.dk/da");
    }
  
    static clickInspirationButton() {
      cy.get("button").contains('Inspiration').should('be.visible').click().wait(2000);
    }
  
    static clickBrandsDropdown() {
      cy.get("a").contains('Brands').should('be.visible').click().wait(2000);
    }
  
    static clickCategoryButton() {
      cy.get("button").contains('Børn & Baby').should('be.visible').click().wait(2000);
    }
  
    static clickLoadMoreButtonTwice() {
      cy.get("button").contains('Indlæs flere').should('be.visible').click({force:true}).wait(2000);
      cy.get("button").contains('Indlæs flere').should('be.visible').click({force:true}).wait(2000);
    }
  
    static clickImage() {
      cy.get("div:nth-of-type(59) span").click();
    }
  }
  