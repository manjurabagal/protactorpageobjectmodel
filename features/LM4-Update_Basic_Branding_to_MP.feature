@LM-4 @Regression
Feature:LM-4-Update the Landing Page and naming in the MarketPricer system to refer to MarketPricer
Short Description:
Update the Landing Page and naming in the MarketPricer system to refer to MarketPricer

Story:
As a User
I want to see the correct MarketPricer branding in the MarketPricer system
So that I know which system I am interacting with.

Background:
- Change the name in the System from CP to MP
- Change name on Landing Page, and remove data/images and replace with dummy data (goal is to make this quick)

@LM-4:1
Scenario: 1. Update the Landing Page and naming in the MarketPricer system to refer to MarketPricer
Given user is on MP Landing page
Then user views Change name on Landing Page
Given user is logged into the MP system
Then user views Change the name in the System from CP to MP
Then user will be logged out of the MP system

