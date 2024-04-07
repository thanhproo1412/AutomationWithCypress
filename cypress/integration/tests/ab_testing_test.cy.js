import ABTestingPage from '../pages/ABTestingPage'; // Import the ABTestingPage object

describe('A/B Testing', () => {
  it('should load a version of the A/B Testing page', () => {
    cy.visit('https://the-internet.herokuapp.com/abtest'); // Replace with actual URL
    const abTestingPage = new ABTestingPage();

    abTestingPage.verifyVersionALoaded(); // Call the specific verification method

    // If you have a version B element and verification method, uncomment and use here
    // abTestingPage.verifyVersionBLoaded();
  });
});
