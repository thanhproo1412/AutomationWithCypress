class ABTestingPage {

  //Basic Auth
  getTitle() {
    return cy.get('div[class="example"] h3');
  }

  getIframe() {}



}

export default ABTestingPage;