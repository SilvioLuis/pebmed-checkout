describe('Checkout e2e Test', () => {
  // VISIT HOME PAGE AND CHECK IF WAS RENDERED
  it('should return true if the page loads', () => {
    cy.visit('/');
    cy.contains('Estamos quase lá!').should('to.have.length', 1);
  });

  // CHECK IF PLANS OFFERS ARE LOADED
  it('should return true if offers load correctly.', () => {
    cy.visit('/');

    cy.intercept(
      'GET',
      'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer'
    ).as('getOffers');
    cy.wait(['@getOffers']);

    cy.get('h4').should('contain', 'Premium Anual');
  });

  // CHECK IF CHECKOUT IS WORKING
  it('should return true if the subscription is saved..', () => {
    // INPUT VALUES
    cy.get('[name=creditCardNumber]').type('4242424242424242');
    cy.get('[name=creditCardExpirationDate]').type('10/21');
    cy.get('[name=creditCardCVV]').type('123');
    cy.get('[name=creditCardHolder]').type('Silvio Sampaio');
    cy.get('[name=creditCardCPF]').type('867.123.555-12');

    // SUBMIT DATA
    cy.get('[name=button-save]').click();

    // WAITING API RETURNS
    cy.intercept(
      'POST',
      'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription'
    ).as('saveSubscription');

    cy.wait(['@saveSubscription']);

    // CHECK RESPONSE IN CHECKOUT PAGE
    cy.get('span').should('contain', 'Premium Anual');
    cy.get('span').should('contain', '867.123.555-12');
  });
});
