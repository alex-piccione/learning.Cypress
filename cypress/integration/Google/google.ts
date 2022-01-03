// this is not working
// 1. it is usinf the support/step_definitions folder
// 2. it is using the .js fille but .ts file is not working

import { Given, Then } from "cypress-cucumber-preprocessor/steps"

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

Then("I see {string} in the title", (title) => {

})