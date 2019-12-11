describe ('App launches', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with restaurant information', () => {
    cy.visit ('/');
    cy.get('[data-cy=cardOfRes]').should('contain', 'Lunch, Dinner Available');
  });

  it('adds the correct restaurant to poll when the add to list button is clicked', () => {
    cy.visit ('/');
    cy.get('[data-cy=addRest2]').click();
    cy.get('[data-cy=pollRestaurants]').should('contain', 'Shinsen Evanston');
  });



});