describe('shared-ui: ProductModal component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productmodal--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ProductModal!');
    });
});
