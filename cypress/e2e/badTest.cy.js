const { add } = require('../../utils/badScript');

describe('Bad Test Suite', () => {
  it('should add but has poor logic', () => {
    expect(add(2, 3)).to.equal(5);
    expect(add(null, 3)).to.equal(3); // ❌ passes due to poor validation
  });

  it('has unnecessary waits', () => {
    cy.visit('https://example.com');
    cy.wait(10000); // ❌ Long static wait (bad practice)
    cy.contains('Example Domain');
  });
});
