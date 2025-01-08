/**
 * Test with cypress-axe.
 */

const { describe, it, expect, cy } = globalThis;

describe('Pass', () => {
  it('should be accessible', () => {
    cy.visit('/pass.html');

    cy.checkA11yWithMultipleViewPorts();
  });
});
