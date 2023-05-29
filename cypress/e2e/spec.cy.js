// example.spec.js
describe('Simple Web Application', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080'); // Update the URL with the appropriate port number
	});

	it('displays the correct title', () => {
		cy.title().should('contain', 'Simple Web Application');
	});

	it('has the expected content', () => {
		cy.contains('h1', 'Welcome to Simple Web Application!');
		cy.contains(
			'p',
			'This is a basic web application running on a local server.'
		);
	});
});
