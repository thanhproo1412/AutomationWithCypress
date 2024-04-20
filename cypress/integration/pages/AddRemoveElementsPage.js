class AddRemoveElementsPage {

  //btn add element
  static getBtnAddElement() {
    return cy.get('div[id="content"] button[onclick="addElement()"]');
  }

  static getBtnDeleteElement() {
    return cy.get('div[id="content"] button[onclick="deleteElement()"]');
  }


}

export default AddRemoveElementsPage;