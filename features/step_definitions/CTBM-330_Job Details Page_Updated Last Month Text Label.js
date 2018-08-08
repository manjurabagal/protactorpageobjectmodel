var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^user is viewing the job details page$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        homePage.clickOnJobRecordLnk(1, function () {
          keyword.expectVisible(jobDetailsPage.jobTitle, function () {
            done();
          });
        });
      });
    });
  });
  When(/^user views the previous rate label$/, function (done) {
    keyword.expectVisible(searchResultsPage.prevPriceLabel, function () {
      done();
    });
  });
  Then(/^user views the effective month and year of the previous available \(not current available\) rate for the job\.$/, function (done) {
    keyword.getText(searchResultsPage.prevPriceLabel, function (dateYearTxt) {
      var month = dateYearTxt.substr(0, 3);
      var year = dateYearTxt.substr(4, 4);
      expect(globalData.testData.jobDetails.monthList).to.be.an('array').that.includes(month);
      expect(globalData.testData.jobDetails.yearList).to.be.an('array').that.includes(year);
      done();
    });

  });
});
