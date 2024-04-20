class ABTestingPage {

  //Basic Auth
  static getTitle() {
    return cy.get('div[class="example"] h3');
  }

  static getIframe() {}



}

export default ABTestingPage;