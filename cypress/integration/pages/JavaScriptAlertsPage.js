class JavaScriptAlertsPage {

  static getJsAlertBtn() {
    return cy.get('button[onclick="jsAlert()"]');
  }
  static getJsConfirmBtn() {
    return cy.get('button[onclick="jsConfirm()"]');
  }
  static getJsPromptBtn() {
    return cy.get('button[onclick="jsPrompt()"]');
  }
  static getResult() {
    return cy.get('p[id="result"]');
  }



}

export default JavaScriptAlertsPage;