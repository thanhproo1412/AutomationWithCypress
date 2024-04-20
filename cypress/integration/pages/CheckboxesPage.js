class CheckboxesPage {

  static getCheckBox1() {
    return cy.get('input[type="checkbox"]').eq(0);
  }

  static getCheckBox2() {
    return cy.get('input[type="checkbox"]').eq(1);
  }


}

export default CheckboxesPage;