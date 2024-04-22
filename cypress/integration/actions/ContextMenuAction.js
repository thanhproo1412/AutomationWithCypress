import ContextMenuPage from '../pages/ContextMenuPage.js'

class ContextMenuAction {

    // action: verify the content text in ABTestingPage
    static rightClickContextMenu() {

        ContextMenuPage.getContextMenuBtn().rightclick()

    }

    static verifyContextMenu(contextMenuContent) {

        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal(contextMenuContent);
        });

    }


}
export default ContextMenuAction;