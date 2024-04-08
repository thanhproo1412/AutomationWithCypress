class LoginPage {

  //Basic Auth
  getUsernameInput() {
    return cy.get(`#username`);
  }

  getPasswordInput() {
    return cy.get(`#username`);
  }

  getLoginButton() {
    return cy.get(`#username`);
  }

  getTitle() {
    return cy.get(`//*[@id="content"]/div/h3')`);
  }

  getContent() {
    return cy.get(`//*[@id="content"]/div/p`);
  }

}

export default LoginPage;