export default describe("Products page", () => {
    it("open the page", () => {
        cy.visit("/products")

        cy.get("h1:Contains(Products)").should("exist")
    })
})