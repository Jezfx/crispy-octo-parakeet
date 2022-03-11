describe('shared-ui: LinearStepper component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=linearstepper--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LinearStepper!');
    });
});
