import ABTestingPage from '../pages/ABTestingPage'; // Import the ABTestingPage object
import HomePage from '../pages/HomePage';
import testData from '../../testData/ABTesting.json'; // Assuming login.json is in testData folder

describe('A/B Testing', () => {
  it('should load a version of the A/B Testing page', () => {
    // Nav to home page
    const homePage = new HomePage(); // Instantiate the LoginPage object
    homePage.visit()

    //nav to ABPage
    homePage.getABTestingBtn().click()

    const abTestingPage = new ABTestingPage();

    //verify data
    cy.log(testData.title)
    abTestingPage.verifyContent(testData.title, testData.content);


  });
});