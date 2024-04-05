describe('Practice Form', () => {
  it('should fill and submit the practice form', () => {
    cy.visit('https://demoqa.com/forms'); // Visit the forms page

    // Find form elements using appropriate selectors
    const firstNameInput = cy.get('#firstName');
    const lastNameInput = cy.get('#lastName');
    const userEmailInput = cy.get('#userEmail');
    const submitButton = cy.get('#submitButton');

    // Fill form with sample data
    firstNameInput.type('John');
    lastNameInput.type('Doe');
    userEmailInput.type('johndoe@example.com');

    // Submit the form
    submitButton.click();

    // Optional assertions to verify form submission (if applicable)
    // ... add assertions here ...
  });
});
