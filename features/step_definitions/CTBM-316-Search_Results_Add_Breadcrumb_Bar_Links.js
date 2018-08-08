var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');

defineSupportCode(function ({Given, When, Then}) {

  Given(/^user is viewing the search results page$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        done();
      });
    });
  });

  Then(/^user views a breadcrumb bar displaying the following text items: Home, Search Results$/, function (done) {
    keyword.verifyText(homePage.headerPage.homeLink, 'Home', function () {
      keyword.verifyText(homePage.headerPage.searchResultsLink, 'Search Results', function () {
        done();
      });
    });
  });


  Then(/^the home text will be a clickable hyperlink$/, function (done) {
    keyword.verifyTagName(homePage.headerPage.searchResultsLink, 'a', function () {
      done();
    });
  });

  Then(/^the search results text will appear as static text$/, function (done) {
    homePage.headerPage.clickOnSearchResults(function () {
      keyword.verifyText(homePage.headerPage.searchResultsLink, 'Search Results', function () {
        done();
      });
    });
  });


  Given(/^user views the breadcrumb bar links$/, function (done) {
    keyword.expectVisible(homePage.headerPage.breadcrumbBarLinks, function () {
      done();
    });
  });
  When(/^user clicks on the home clickable hyperlink$/, function (done) {
    homePage.headerPage.clickOnBreadCrumbLink('Home', function () {
      done();
    })
  });
  Then(/^user will be taken to viewing the saved jobs page with no search criteria entered$/, function (done) {


    keyword.verifyAttributeByLoc(homePage.searchPage.keyWordSearchInput, "placeholder", "Search for a job by keywords (Help Desk, Remote, etc.)", function () {
      keyword.verifyTextContains(homePage.savedjobsTxt, ' Saved', function () {
        homePage.getTotalTaggedJobs(function (totalSavedJobs) {
          //Below code to un tag the saved jobs
          homePage.unTagJob(function () {
            keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
              done();
            });
          });
        });
      });
    });
  });
  When(/^user clicks on save job$/, function (done) {
    searchResultsPage.saveJobs(1, function () {
      done();
    });
  });
});
