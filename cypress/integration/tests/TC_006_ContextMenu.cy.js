import ContextMenuPage from '../pages/ContextMenuPage' // Import the ABTestingPage object
import ContextMenuAction from '../actions/ContextMenuAction'
import testData from '../../testData/TC_006_ContextMenu.json'
import HomePage from '../pages/HomePage'

describe('Checkboxes Test', () => {
  it('Check the Checkboxes', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/')

    // Nav to Checkboxes page
    HomePage.getContextMenuBtn().click()


    //test
    ContextMenuAction.rightClickContextMenu()
    ContextMenuAction.verifyContextMenu(testData.content)


  });
});