class CheckboxesPage {

  static getCheckBox1() {
    return cy.get('input[type="checkbox"]').eq(1);
  }

  static getCheckBox2() {
    return cy.get('input[type="checkbox"]').eq(2);
  }


}

export default CheckboxesPage;