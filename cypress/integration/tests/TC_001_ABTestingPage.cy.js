import ABTestingPage from '../pages/ABTestingPage'; // Import the ABTestingPage object
import ABTestingAction from '../actions/ABTestingAction';
import HomePage from '../pages/HomePage';
import testData from '../../testData/ABTesting.json'; // Assuming login.json is in testData folder

describe('A/B Testing', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to AB Testing page
    const homePage = new HomePage();
    homePage.getABTestingBtn().click()

    const aBTestingAction = new ABTestingAction();

    //verify data
    aBTestingAction.verifyContent(testData.title, testData.content);


  });
});