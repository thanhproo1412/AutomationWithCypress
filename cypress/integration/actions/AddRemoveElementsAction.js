import AddRemoveElementsPage from '../pages/AddRemoveElementsPage.js'


class AddRemoveElementsAction {

    // func add Element
    static AddElement() {
        AddRemoveElementsPage.getBtnAddElement().click()
    }

    // func Remove Element
    static RemoveElement() {
        AddRemoveElementsPage.getBtnDeleteElement().click()
    }
    // Add/ remove then verify element disappeaar
    static AddRemoveElement() {

        // verify Element not exist
        AddRemoveElementsPage.getBtnDeleteElement().should('not.exist')

        // add element
        this.AddElement()

        // verify Element exist
        AddRemoveElementsPage.getBtnDeleteElement().should('exist')
        cy.log('check the button is exits')
        cy.wait(5000)
        // remove element
        this.RemoveElement()

        // verify Element is disappear after remove
        AddRemoveElementsPage.getBtnDeleteElement().should('not.exist')

    }

}

export default AddRemoveElementsAction;