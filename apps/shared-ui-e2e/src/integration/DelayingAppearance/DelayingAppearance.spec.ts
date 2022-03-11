describe('shared-ui: DelayingAppearance component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=delayingappearance--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DelayingAppearance!');
    });
});
