export default describe("My first test", () => {
  it("does not do much", () => {
    // Arrange
    cy.visit("https://example.cypress.io")
    
    // Act
    cy.contains("type").click()

    // Assert
    cy.url()
      .should("include", "/commands/action")
  })
})

