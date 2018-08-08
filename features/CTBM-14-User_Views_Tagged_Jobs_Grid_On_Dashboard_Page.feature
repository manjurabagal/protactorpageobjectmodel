@CTBM-14 @test25
Feature:CTBM-14-User_Views_Tagged_Jobs_Grid_On_Dashboard_Page
  User views the Tagged Jobs Grid on the Dashboard Page
  Description:
  User is able to view a grid that displays the Jobs that they have tagged in the system
  Related to CTBM-14

  #Ques: Do we need pagination controls on the Tagged Jobs Grid? (if so, add/review 14X)

  @CTBM-14:1
  Scenario: 1. user views the tagged jobs grid (grid contents)
    Given user is logged into the CB system
    Given user has accessed the CB system
    And user is viewing the dashboard page again
    When user views the tagged jobs grid
    Then user view all of jobs within the CB system that the user currently has tagged.
    And user will be logged out of the CB system

  @CTBM-14:3
  Scenario: 3. user views the tagged jobs grid (grid grouping & sorting)
    Given user is logged into the CB system
    Given user has accessed the CB system
    And user is viewing the dashboard page again
    When user views the tagged jobs grid
    Then user views the results grouped first by family
    And the sort order that the families are displayed in will follow the Aggregated Sort Order provided by the Mercer Job Catalog system for this scenario
    And user views the grid grouped within each family by subfamily
    And the sort order that the sub-families are displayed in within each family will follow the Aggregated Sort Order provided by the Mercer Job Catalog system
    And the sort order that the Jobs are displayed in within each sub-family will follow the Aggregated Sort Order provided by the Mercer Job Catalog system
    And user will be logged out of the CB system
  @CTBM-14:4
  Scenario: 4. user views a job record
    Given user is logged into the CB system
    Given user is viewing the dashboard page again
    And user views the tagged jobs grid
    When user views an individual job record within the tagged jobs grid
    Then user views the title of the job identified by that record
    And user views the pay rate (amount/period) for that job for the current month
    And user views the pay rate (amount/period) for that job for the previous month
    And user views the pay rates displayed in the currency that the data is collected in
    And user views an icon indicating the trajectory (increasing/decreasing) of the rate for that job
    And user views the 'tag job' icon in it's last saved state
    And user will be logged out of the CB system

 #Note: Trajectory is based on current month and last month's rates
  @CTBM-14:5
  Scenario: 5. User hovers over a job record (mouse based)

    Given user is logged into the CB system
    Given user is viewing the dashboard page again
    And user views the tagged jobs grid
    And user is using a computer with standard 'mouse' input device
    When user hovers their cursor over an individual job record within the search results grid
    Then user views the job description of that job in a 'hover-over' pop-up
    And user will be logged out of the CB system
 #Note: Hover-over capability of the job description will not be available for mobile/touch-based devices
  @CTBM-14:6

  Scenario: 6. User moves away from a hovered-over a job record
    Given user is logged into the CB system
    Given user is viewing the dashboard page again
    And user views the tagged jobs grid
    And user hovers their cursor over an individual job record within the search results grid
    And user is viewing the 'hover-over' pop-up for that specific job record
    When user moves their focus away from the individual job record within the search results grid
    Then user views 'hover-over' pop-up disappear
    And user will be logged out of the CB system

  @CTBM-14:7
  Scenario: 7. User clicks on a job record
    Given user is logged into the CB system
    Given user is viewing the dashboard page again
    And user views the tagged jobs grid
    When user clicks on a individual job
    Then user views the job details page appear
    And user views the Job Details page populated with information about the job record they clicked on
    And user will be logged out of the CB system

#      @CTBM-14:X
#  Scenario: 2. user views the empty state of the tagged jobs grid
#    Given user has accessed the CB system and navigate to the dashboard page
#    And user is viewing the dashboard page again
#    And user has not tagged jobs in the system_A
#    And user has not tagged jobs in the system_B
#    When user views the dashboard page
#    Then user does not view the tagged jobs grid
#    And user will view a message instructing the user to tag jobs (this message will be provided during the visual design updates)
