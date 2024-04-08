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
    const homePage = new HomePage();
    homePage.getLoginBtn().click()

    //login
    const loginAction = new LoginAction()
    loginAction.login(loginData.username, loginData.password)

    const loginPage = new LoginPage();
    loginPage.getTitle().should('have.text', ExpectedData.title)
    loginPage.getContent().should('have.text', ExpectedData.content)


  });
});