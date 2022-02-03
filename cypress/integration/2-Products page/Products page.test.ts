export default describe("Products page", () => {

    beforeEach(() => {
        cy.visit("/products")
    })

    it('has a "Products" title', () => {
        cy.get("h1:Contains(Products)").should("exist")
    })

    it('has a table with "Brand" and "Name"', () => {
        cy.get("table").as("table")
        cy.get("@table").should("exist")
        const headers = ["Brand", "Name"]
        headers.forEach(header => 
            cy.get("@table").find(`thead tr th:Contains(${header})`).should("exist")
        )
    })
})