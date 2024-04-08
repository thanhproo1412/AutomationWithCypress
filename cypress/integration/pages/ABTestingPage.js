class ABTestingPage {

  //Basic Auth
  getTitle() {
    return cy.get('div[id="content"] h3');
  }

  getContent() {
    return cy.get('div[id="content"] p');
  }



}

export default ABTestingPage;