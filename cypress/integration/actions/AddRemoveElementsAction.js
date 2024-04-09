import AddRemoveElementsPage from '../pages/AddRemoveElementsPage.js'

const addRemoveElementsPage = new AddRemoveElementsPage()

class AddRemoveElementsAction {

    // func add Element
    AddElement() {
        addRemoveElementsPage.getBtnAddElement().click()
    }

    // func Remove Element
    RemoveElement() {
        addRemoveElementsPage.getBtnDeleteElement().click()
    }
    // Add/ remove then verify element disappeaar
    AddRemoveElement() {

        // verify Element not exist
        addRemoveElementsPage.getBtnDeleteElement().should('not.exist')

        // add element
        this.AddElement()

        // verify Element exist
        addRemoveElementsPage.getBtnDeleteElement().should('exist')
        cy.log('check the button is exits')
        cy.wait(5000)
        // remove element
        this.RemoveElement()

        // verify Element is disappear after remove
        addRemoveElementsPage.getBtnDeleteElement().should('not.exist')

    }

}

export default AddRemoveElementsAction;