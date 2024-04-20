import CheckboxesPage from '../pages/CheckboxesPage' // Import the ABTestingPage object
import CheckboxesAction from '../actions/CheckboxesAction'
import HomePage from '../pages/HomePage'
import testData from '../../testData/ABTesting.json' // Assuming login.json is in testData folder

describe('Checkboxes Test', () => {
  it('Check the Checkboxes', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/')

    // Nav to Checkboxes page
    HomePage.getCheckboxesBtn().click()


    //test
    CheckboxesAction.checkTheBox()
    CheckboxesAction.verifyCheckedBox()


  });
});