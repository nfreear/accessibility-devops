/**
 * Test with cypress-axe.
 */

const { describe, it, cy } = globalThis;

describe('Pass', () => {
  it('should be accessible', () => {
    cy.visit('/pass.html');

    cy.checkA11yWithMultipleViewPorts();
  });
});
