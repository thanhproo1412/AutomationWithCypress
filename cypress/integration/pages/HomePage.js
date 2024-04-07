class HomePage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/');
  }

  //Basic Auth
  getLoginBtn() {
    return cy.get('div[id="content"] a:contains("Basic Auth")');
  }



}

export default HomePage;