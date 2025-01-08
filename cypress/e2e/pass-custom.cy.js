/**
 * Custom accessibility tests.
 */

const { describe, it, expect, cy } = globalThis;

describe('Pass - Custom', () => {
  it('should have decorative images with empty ALT text', () => {
    cy.visit('/pass.html');

    cy.get('.decorative').should('have.length', 1);

    cy.get('.decorative').then(els => [...els].forEach(el => expect(el.alt).to.be.empty));

    // cy.task('log', { cyRoot: cy.root().constructor.name });
  });

  it('should have a page title ending in "ACME Corp"', () => {
    cy.visit('/pass.html');

    cy.get('head > title').should('include.text', ' | ACME Corp');

    cy.get('head > title')
      .invoke('text')
      .should('match', /[\w ]+ \| ACME Corp$/);
  });

  /* Fictional "ACME Corp" website is available in English and Simplified Chinese.
  */
  it('should have a "lang" attribute matching the specified pattern, (en|zh-Hans)', () => {
    cy.visit('/pass.html');

    cy.get('html')
      .should('have.attr', 'lang')
      .and('match', /^(en|zh-Hans)/);
  });
});
