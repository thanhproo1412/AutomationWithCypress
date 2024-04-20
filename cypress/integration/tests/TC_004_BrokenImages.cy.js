import BrokenImagesPage from '../pages/BrokenImagesPage'; // Import the ABTestingPage object
import BrokenImagesAction from '../actions/BrokenImagesAction';
import HomePage from '../pages/HomePage';
import testData from '../../testData/ABTesting.json'; // Assuming login.json is in testData folder

describe('Broken Image Test', () => {
  it('checks for broken images on the page', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to Broken Images page
    HomePage.getBrokenImagesBtn().click()


    //verify data
    BrokenImagesAction.verifyBrokenImage();


  });
});