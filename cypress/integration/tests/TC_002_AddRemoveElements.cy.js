import AddRemoveElementsAction from '../actions/AddRemoveElementsAction';
import HomePage from '../pages/HomePage';

describe('TC_002_AddRemoveElements', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to AddRemoveElementsAction page
    const homePage = new HomePage();
    homePage.getAddRemoveElementsBtn().click()

    const addRemoveElementsAction = new AddRemoveElementsAction();

    //call action
    addRemoveElementsAction.AddRemoveElement();

  });
});