class ABTestingPage {

  //Basic Auth
  getTitle() {
    return cy.get('div[id="content"] h3');
  }

  getContent() {
    return cy.get('div[id="content"] p');
  }

  verifyContent(title, content) {
    cy.log(title)

    this.getTitle().should('have.text', title);
    this.getContent().should('have.text', content);
  }

}

export default ABTestingPage;