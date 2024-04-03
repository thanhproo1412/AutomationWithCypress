class HomePage {
    constructor() {
      // Consider using more descriptive and generic selectors instead of specific IDs
      this.elements = {
        loginButton: () => cy.get('[data-test="login-button"]'), // Example using data-test attribute
        logoutButton: () => cy.get('[data-test="logout-button"]'), // Example using data-test attribute
      };
    }
  
    clickOnLoginButton() {
      this.elements.loginButton().click();
    }
  
    clickOnLogoutButton() {
      this.elements.logoutButton().click();
    }
  }
  
  export default HomePage;
  