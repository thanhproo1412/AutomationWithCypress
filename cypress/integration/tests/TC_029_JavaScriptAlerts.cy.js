import JavaScriptAlertsPage from '../pages/JavaScriptAlertsPage' // Import the ABTestingPage object
import JavaScriptAlertsAction from '../actions/JavaScriptAlertsAction'
import testData from '../../testData/TC_006_ContextMenu.json'
import HomePage from '../pages/HomePage'

describe('Checkboxes Test', () => {
  it('Check the Checkboxes', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/')

    // Nav to Checkboxes page
    HomePage.getJavaScriptAlertsBtn().click()


    //test
    // JavaScriptAlertsAction.verifyJSAlert()
    JavaScriptAlertsAction.verifyJSConfirm()


  });
});