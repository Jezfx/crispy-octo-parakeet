describe('shared-ui: StaticDateRangePickerDemo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=staticdaterangepickerdemo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to StaticDateRangePickerDemo!');
    });
});
