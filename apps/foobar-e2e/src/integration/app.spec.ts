import { getGreeting } from '../support/app.po';

describe('foobar', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to foobar!');
  });
});
