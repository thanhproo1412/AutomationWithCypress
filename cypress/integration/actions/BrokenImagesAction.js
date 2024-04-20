import BrokenImagesPage from '../pages/BrokenImagesPage.js'

class BrokenImagesAction {

    // action: verify the content text in ABTestingPage
    static verifyContent(title, content) {
        BrokenImagesPage.getTitle().should('have.text', title);
        BrokenImagesPage.getContent().should('have.text', content);
    }

}

export default BrokenImagesAction;