import PracticeFormPage from './practiceForm'; // Import the page object

describe("Practice Form Page", () => {
  it("should fill out the practice form", () => {
    const practiceFormPage = new PracticeFormPage();

    practiceFormPage.fillForm("Bard", "AI", "Male", "bard@google.com");

    practiceFormPage.getThanksModalTitle().should("contain", "Thanks for submitting the form");
  });
});
