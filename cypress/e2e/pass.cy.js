
describe('Pass', () => {
  it('should be accessible', () => {
    cy.visit('/pass.html')
    cy.checkA11yWithMultipleViewPorts()
  })
})
