class LoginPage {

  //Basic Auth
  static getUsernameInput() {
    return cy.get(`#username`);
  }

  static getPasswordInput() {
    return cy.get(`#username`);
  }

  static getLoginButton() {
    return cy.get(`#username`);
  }

  static getTitle() {
    return cy.get(`//*[@id="content"]/div/h3')`);
  }

  static getContent() {
    return cy.get(`//*[@id="content"]/div/p`);
  }

}

export default LoginPage;