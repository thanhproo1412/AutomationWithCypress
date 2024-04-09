class AddRemoveElementsPage {

  //btn add element
  getBtnAddElement() {
    return cy.get('div[id="content"] button[onclick="addElement()"]');
  }

  getBtnDeleteElement() {
    return cy.get('div[id="content"] button[onclick="deleteElement()"]');
  }


}

export default AddRemoveElementsPage;