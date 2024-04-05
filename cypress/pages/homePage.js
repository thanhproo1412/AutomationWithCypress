describe('Open demoqa.com', () => {
    it('should open the demoqa website', () => {
      cy.visit('https://demoqa.com/'); // Visit the demoqa website
  
      // Optional assertion to verify the title of the page
      cy.title().should('eq', 'ToolsQA Demo Site - Practice & Interact');
    });
  });
  