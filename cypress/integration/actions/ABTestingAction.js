import ABTestingPage from '../pages/ABTestingPage.js'

class ABTestingAction {

    // action: verify the content text in ABTestingPage
    static verifyContent(title, content) {
        ABTestingPage.getTitle().should('have.text', title);
        ABTestingPage.getContent().should('have.text', content);
    }

}

export default ABTestingAction;