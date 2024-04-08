import ABTestingPage from '../pages/ABTestingPage.js'

const aBTestingPage = new ABTestingPage()

class ABTestingAction {

    verifyContent(title, content) {
        aBTestingPage.getTitle().should('have.text', title);
        aBTestingPage.getContent().should('have.text', content);
    }

}

export default ABTestingAction;