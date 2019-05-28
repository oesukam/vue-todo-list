// https://docs.cypress.io/api/introduction/api.html

const timeout = 2000;
describe('My First Test', () => {
  it('Visits the app root url `/`', () => {
    cy.visit('/');
    cy.contains('h1', 'My Todos');
    cy.contains('div', 'Testing hints');
    cy.wait(timeout);
  });

  it('Type `My First New todo` then click on `Enter`', () => {
    cy.get('#input-text').type('My First New todo');
    cy.wait(timeout);
    cy.get('#input-text').type('{Enter}');
    cy.wait(timeout);
  });

  it('Type `My Second New todo` then click on `Add button`', () => {
    cy.get('#input-text').type('My Second New todo');
    cy.wait(timeout);
    cy.get('#add-btn').click();
  });

  it('Check `My First New todo` onclick', () => {
    cy.wait(timeout);
    cy.get('.btn-check')
      .eq(1)
      .click();
  });

  it('Delete todo `My First New todo` on click', () => {
    cy.wait(timeout);
    cy.get('.btn-delete')
      .eq(2)
      .click();
  });
});
