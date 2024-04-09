class HomePage {


  //Basic Auth btn
  getLoginBtn() {
    return cy.get('div[id="content"] a:contains("Basic Auth")');
  }

  // AB Testing btn
  getABTestingBtn() {
    return cy.get('div[id="content"] a:contains("A/B Testing")');
  }

  // Add/Remove Elements
  getAddRemoveElementsBtn() {
    return cy.get('div[id="content"] a:contains("Add/Remove Elements")');
  }


}

export default HomePage;