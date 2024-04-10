import WYSIWYGEditorAction from '../actions/WYSIWYGEditorAction';
import HomePage from '../pages/HomePage';

describe('TC_044_WYSIWYGEditor', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit('https://the-internet.herokuapp.com/');

    // Nav to WYSIWYGEditorAction page
    const homePage = new HomePage();
    homePage.getWYSIWYGEditorBtn().click()

    const wYSIWYGEditorAction = new WYSIWYGEditorAction()

    //call action
    wYSIWYGEditorAction.VerifyTitle();

  });
});