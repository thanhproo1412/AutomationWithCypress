import AddRemoveElementsAction from '../actions/AddRemoveElementsAction';
import HomePage from '../pages/HomePage';

describe('TC_002_AddRemoveElements', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to AddRemoveElementsAction page
    HomePage.getAddRemoveElementsBtn().click()


    //call action
    AddRemoveElementsAction.AddRemoveElement();

  });
});