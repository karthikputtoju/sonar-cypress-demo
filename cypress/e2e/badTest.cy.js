describe('Bad Test Case', () => {
  it('waits unnecessarily', () => {
    cy.visit('https://example.com');
    cy.wait(8000); // ❌ Hard wait
    cy.contains('Example Domain');
  });

  it('tests bad logic', () => {
    expect(2 + 2).to.equal(5); // ❌ Wrong assertion
  });
});
