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

  getTitle() {
    return cy.get(`//*[@id="content"]/div/p`);
  }


  login(username, password) {
    this.getUsernameInput().type(username);
    this.getLoginButton().type(password);
    this.getLoginButton().click();
  }
}

export default LoginPage;