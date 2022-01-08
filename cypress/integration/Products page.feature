Feature: Prodcts Page

  I want to open the products page
  and see the header and the products table populated
  
  Background:
    When I visit "/products" page

  #@focus
  Scenario: Has the products page loaded?
    Then I see "Products" in the header

  Scenario: Has the products table populated?
    Then I see a table with the following headers:
      | Header |
      | Brand  |
      | Name   |