@CTBM-20 @Regression
Feature:CTBM-20-Search_Option_Viewing
  User searches for a job: search option viewing (Dashboard Page):
  User has the ability to keyword/filter search for jobs in the CB tool

  Background:
    Given user is logged into the CB system

  @CTBM-20:1 @Smoke
  Scenario: 1. User views the keyword search bar (dashboard page)
    Given user is logged into the CB system
    When user views the page
    Then user will see the keyword search bar displayed

  @CTBM-20:2 @Smoke
  Scenario: 2. User views the search filters
    Given user is viewing the keyword search bar
    When user clicks into the keyword search bar
    Then user will view a family search filter option
    And user will view a sub-family search filter option

  @CTBM-20:3
  Scenario: 3. User views the search initiation disabled (keyword/filters; Search Button)
    Given user is viewing the keyword search bar
    When user clicks into the keyword search bar
    And user has not typed in any characters into the keyword search bar
    And user has not made a selection in the family filter
    Then user will view the search initiation functionality disabled

  @CTBM-20:4
  Scenario: 4. User views the search initiation enabled (keyword; Search Button)
    Given user is viewing the keyword search bar
    When user clicks into the keyword search bar
    And user begins to type keyword search criteria as "test data" in CB System
    Then user will view the search initiation functionality enabled

  @CTBM-20:5
  Scenario: 5. User views the search initiation enabled (filters; Search Button)
    Given user is viewing the keyword search bar with the filters open
    And user has not typed in any text into the Keyword Search bar
    When user clicks into the keyword search bar
    When user selects a family in the family filter
    Then user will view the search initiation functionality enabled
