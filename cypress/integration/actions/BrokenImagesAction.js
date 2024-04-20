import BrokenImagesPage from '../pages/BrokenImagesPage.js'

class BrokenImagesAction {

    // action: verify the content text in ABTestingPage
    static verifyBrokenImage() {

        // Find all image elements
        cy.get('img').each((img) => {
            // Get the image source URL
            const imageUrl = img.attr('src');

            // Skip empty or non-existent image URLs
            if (!imageUrl) {
                return;
            }

            // Use Cypress promise to check image status with timeout
            cy.request('GET', imageUrl, {
                    timeout: 10000
                }) // Set a timeout (adjust as needed)
                .then((response) => {
                    // Expect status code to be 200 (successful)
                    expect(response.status).to.equal(200);
                })
                .then(null, (error) => {
                    // Log error message for debugging
                    console.error('Broken image:', imageUrl, error);
                    // Add a custom assertion to fail the test for broken images
                    expect(false, `Image '${imageUrl}' failed to load`).to.equal(true); // Example assertion

                });
        });

    }
}

export default BrokenImagesAction;