import JavaScriptAlertsPage from '../pages/JavaScriptAlertsPage.js'

class JavaScriptAlertsAction {

    // Verify the content in Alert when click in Alert btn
    static verifyJSAlert() {

        JavaScriptAlertsPage.getJsAlertBtn().click()

        //verify content when alert show
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.equal("I am a JS Alert");
        });

        JavaScriptAlertsPage.getResult().should('have.text', 'You successfully clicked an alert')

    }

    // Verify the content in Alert when click in Alert btn
    static verifyJSConfirm() {

        //check result when click ok
        JavaScriptAlertsPage.getJsConfirmBtn().click()
        //verify content when alert show
        cy.on("window:confirm", () => {
            //click cancel
            return false
        });
        JavaScriptAlertsPage.getResult().should('have.text', 'You clicked: Cancel')


        //check result when click Hủy
        JavaScriptAlertsPage.getJsConfirmBtn().click()
        //verify content when alert show
        cy.on("window:confirm", () => {
            //click ok
            return true
        });
        JavaScriptAlertsPage.getResult().should('have.text', 'You clicked: Ok')

    }

    // Verify the content in Alert when click in Alert btn
    static verifyJSPrompt(p) {

        const inputPrompt = p

        //check result when click Hủy
        JavaScriptAlertsPage.getJsPromptBtn().click()
        cy.on("window:confirm", () => {
            //click cancel
            return false
        });
        JavaScriptAlertsPage.getResult().should('have.text', 'You entered: null')


        //check result when inptut value then click ok

        JavaScriptAlertsPage.getJsPromptBtn().click()
        cy.on("window:confirm", (inputPrompt) => {
            //verify text on pop-up
            cy.stub(inputPrompt, "prompt").returns("Tutorialspoint");
            return false
        });
        JavaScriptAlertsPage.getResult().should('have.text', 'You entered: Tutorialspoint')

    }

}

export default JavaScriptAlertsAction;