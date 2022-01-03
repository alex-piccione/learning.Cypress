export default describe("Home page", ()=> {
  before(() => {
    cy.visit("/")
  })

  it("Has \"Welcome to Next.js!\" title", ()=> {
    cy.contains("h1", "Welcome to Next.js!")
  })

})
