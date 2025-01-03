
const { describe, it, expect, cy } = globalThis;

describe('Fail', () => {
  it('should be accessible', () => {
    cy.visit('/fail.html');
    cy.checkA11yWithMultipleViewPorts();
  });

  it('should have decorative images with empty ALT text', () => {
    cy.visit('/fail.html');

    cy.get('.decorative').should('have.length', 1);

    cy.get('.decorative').then(els => [...els].forEach(el => expect(el.alt).to.be.empty));
  });
});
