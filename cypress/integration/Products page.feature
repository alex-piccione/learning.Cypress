Feature: Prodcts Page

  I want to open the products page
  
  @focus
  Scenario: Opening the products page
    Given I visit "/products" page
    Then I see "Products" in the header