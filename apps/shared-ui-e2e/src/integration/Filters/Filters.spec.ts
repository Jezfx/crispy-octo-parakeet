describe('shared-ui: Filters component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=filters--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Filters!');
    });
});
