import WYSIWYGEditorAction from '../actions/WYSIWYGEditorAction';
import HomePage from '../pages/HomePage';

describe('TC_044_WYSIWYGEditor', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to WYSIWYGEditorAction page
    HomePage.getWYSIWYGEditorBtn().click()


    //call action
    WYSIWYGEditorAction.VerifyTitle();

  });
});