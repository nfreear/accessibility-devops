/*!

  NDF, 15-August-2024.
*/

const { expect, cy, Cypress } = globalThis;

/* Child command.
*/
Cypress.Commands.add('ariaDescribedby', { prevSubject: true }, (subject) => {
  return cy.wrap(subject).then(elem => {
    expect(elem).to.have.attr('aria-describedby');

    const ID = Cypress.$(elem).attr('aria-describedby');

    cy.wrap(ID).should('not.be.empty');

    return cy.wrap(ID).then(id => {
      // cy.task('log', { errorId: id });

      // expect(Cypress.$(`#${id}`).text()).to.match(/error/i);
      return {
        subject,
        id,
        elem,
        elem2: Cypress.$(`#${id}`),
        text: Cypress.$(`#${id}`).text()
      };
    });
  });
});
