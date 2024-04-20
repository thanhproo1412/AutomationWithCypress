import HomePage from '../pages/HomePage.js'
import LoginPage from '../pages/LoginPage'; // Import the LoginPage object
import loginData from '../../testData/login.json'; // Assuming login.json is in testData folder
import ExpectedData from '../../ExpectedData/ExpectedLogin.json'; // Assuming login.json is in testData folder
import LoginAction from '../actions/LoginAction.js';


describe('Basic Auth', () => {
  it('should login successfully with valid credentials', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to login page
    HomePage.getLoginBtn().click()

    //login
    LoginAction.login(loginData.username, loginData.password)

    LoginPage.getTitle().should('have.text', ExpectedData.title)
    LoginPage.getContent().should('have.text', ExpectedData.content)


  });
});