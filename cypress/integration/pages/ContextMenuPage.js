class ContextMenuPage {

  static getContextMenuBtn() {
    return cy.get('div[id="hot-spot"]');
  }

  static getContextMenu() {
    return cy.get('div[id="content"] p');
  }



}

export default ContextMenuPage;