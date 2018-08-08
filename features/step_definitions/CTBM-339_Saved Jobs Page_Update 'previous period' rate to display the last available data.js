var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^user is viewing the saved jobs page$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.selectJobSubFamily(globalData.testData.jobDetails.jobSubFamilyName, function () {
        homePage.searchPage.search(function () {
          searchResultsPage.saveJobs(2, function () {//saveJobs(2, function () {
            searchResultsPage.headerPage.navigateToHome(function () {
              done();
            });
          });
        });
      });
    });
  });
  When(/^user views a specific saved job record$/, function (done) {
    searchResultsPage.getJobRecord(1, function (savedJob) {
      expect(savedJob).notEqual("");
      done();
    });
  });
  Then(/^user views the previous available \(not current available\) rate for the job\.$/, function (done) {
    keyword.expectVisible(searchResultsPage.oldPrice, function () {
      searchResultsPage.getPreviousRate(searchResultsPage.oldPrice, function (previousrate) {
        expect(previousrate).contains("£");
        done();
      });
    });
  });

  Then(/^we are testing$/, function (callback) {
    callback.pending();
  });
});
