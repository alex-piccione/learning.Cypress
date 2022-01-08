import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Before(() => {
    cy.visit("/products")
})

Given("I visit {string} page", (url) => {
    //cy.visit(url)
})

Then("I see {string} in the header", (header) => {
    cy.get('h1').should('contain', header)
})

Then("I see a table with the following headers:", (dataTable) => {    
    cy.get("table").as("table")
    cy.get("@table").should("exist")
    dataTable.rows().forEach((row: string[]) => 
        cy.get("@table").find(`thead tr th:Contains(${row[0]})`).should("exist")
    )
})