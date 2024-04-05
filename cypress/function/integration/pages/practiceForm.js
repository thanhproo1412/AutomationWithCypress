class PracticeFormPage {
    constructor() {
      this.firstNameInput = cy.get("#firstName");
      this.lastNameInput = cy.get("#lastName");
      this.genderRadio1 = cy.get("#gender-radio-1");
      this.emailInput = cy.get("#userEmail");
      this.submitButton = cy.get("#submit");
      this.thanksModalTitle = cy.get("#example-modal-sizes-title-lg");
    }
  
    fillForm(firstName, lastName, gender, email) {
      this.firstNameInput.type(firstName);
      this.lastNameInput.type(lastName);
      this.genderRadio1.click();
      this.emailInput.type(email);
      this.submitButton.click();
    }
  
    getThanksModalTitle() {
      return this.thanksModalTitle.text();
    }
  }
  
  export default PracticeFormPage;
  