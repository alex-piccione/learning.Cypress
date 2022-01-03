import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("I visit {string} page", (url) => {
    cy.visit(url)
})

Then("I see {string} in the header", (header) => {
    cy.get('h1').should('contain', header)
})