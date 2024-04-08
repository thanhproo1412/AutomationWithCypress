import HomePage from '../pages/HomePage.js'
import LoginPage from '../pages/LoginPage'; // Import the LoginPage object
import loginData from '../../testData/login.json'; // Assuming login.json is in testData folder
import ExpectedData from '../../ExpectedData/ExpectedLogin.json'; // Assuming login.json is in testData folder


describe('Basic Auth', () => {
  it('should login successfully with valid credentials', () => {

    // Nav to home page
    const homePage = new HomePage();
    homePage.visit()

    // Nav to login page
    homePage.getLoginBtn().click()

    const loginPage = new LoginPage(); 
    loginPage.login(loginData.username, loginData.password); 

    // ...
    cy.get('@title').should('have.text', ExpectedData.title);
    cy.get('@content').should('have.text', ExpectedData.content);
  });
});