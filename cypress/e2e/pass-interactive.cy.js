
const { describe, it, expect, cy } = globalThis;

describe('Pass', () => {
  it('error should be associated with field', () => {
    cy.visit('/pass.html');

    cy.get('form').within(() => {
      // cy.get('input').type('');

      cy.get('button').click();

      cy.get('input').ariaDescribedby().then(({ text }) => expect(text).to.match(/error/i));

      // cy.ariaDescribedbyText('input').should('to.match', /error/i);

      /* .then(res => {
        expect(res.text).to.match(/error/i);
      }); */

      /* cy.get('input').then(input => {
        expect(input).to.have.attr('aria-describedby');
        // const id = input.getAttribute('aria-describedby');

        const ID = Cypress.$(input).attr('aria-describedby');

        cy.wrap(ID).should('not.be.empty');

        cy.wrap(ID).then(id => {
          cy.task('log', { errorId: id });
          // Cypress.$(`#${id}`).text().then(text => cy.task('log', { text }));

          expect(Cypress.$(`#${id}`).text()).to.match(/error/i);
        });
      }); */
    });
  });
});
