
const { describe, it, expect, cy } = globalThis;

describe('Pass', () => {
  it('should be accessible', () => {
    cy.visit('/pass.html');
    cy.checkA11yWithMultipleViewPorts();
  });

  it('should have decorative images with empty ALT text', () => {
    cy.visit('/pass.html');

    cy.get('.decorative').should('have.length', 1);

    cy.get('.decorative').then(els => [...els].forEach(el => expect(el.alt).to.be.empty));

    // cy.task('log', { cyRoot: cy.root().constructor.name });
  });
});
