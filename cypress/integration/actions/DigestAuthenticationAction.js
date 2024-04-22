import DigestAuthenticationPage from '../pages/DigestAuthenticationPage.js'

class DigestAuthenticationAction {

    // action: verify the content text in ABTestingPage
    static rightClickContextMenu() {

        DigestAuthenticationPage.getContextMenuBtn().rightclick()

    }

    static digestAuthentication(contextMenuContent) {

        cy.window().then(function (p) {
            //stubbing prompt window
            cy.stub(p, "prompt").returns("Tutorialspoint");
            // click on Click for JS Prompt button
            cy.get(':nth-child(3) > button').click()
            // verify application message on clicking on OK
            cy.get('#result').contains('You entered: Tutorialspoint')
        });

    }


}
export default DigestAuthenticationAction;