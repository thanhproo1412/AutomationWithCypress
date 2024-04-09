import ABTestingPage from '../pages/ABTestingPage.js'

const aBTestingPage = new ABTestingPage()

class ABTestingAction {

    // action: verify the content text in ABTestingPage
    verifyContent(title, content) {
        aBTestingPage.getTitle().should('have.text', title);
        aBTestingPage.getContent().should('have.text', content);
    }

}

export default ABTestingAction;