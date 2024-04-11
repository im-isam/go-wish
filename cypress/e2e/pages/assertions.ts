export class Assertions {

    static assertFollowersCount() {
        cy.get("div.BrandHeader__TopRight-sc-9e47f174-3 p").should("contain", "13");
    }
  }
  