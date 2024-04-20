import CheckboxesPage from '../pages/CheckboxesPage.js'

class CheckboxesAction {

    // action: verify the content text in ABTestingPage
    static checkTheBox() {
        CheckboxesPage.getCheckBox1().check()
        CheckboxesPage.getCheckBox2().check()
        CheckboxesPage.getCheckBox2().should('be.checked');

        cy.wait(4000)

        CheckboxesPage.getCheckBox2().uncheck()

    }

    static verifyCheckedBox() {
        CheckboxesPage.getCheckBox1().should('be.checked');
        CheckboxesPage.getCheckBox2().should('not.be.checked');

    }

}

export default CheckboxesAction;