class ABTestingPage {

  //Basic Auth
  static getTitle() {
    return cy.get('div[id="content"] h3');
  }

  static getContent() {
    return cy.get('div[id="content"] p');
  }



}

export default ABTestingPage;