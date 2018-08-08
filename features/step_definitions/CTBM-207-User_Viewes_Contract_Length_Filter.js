var {defineSupportCode} = require("cucumber");
var global_url = require('../../testData/global');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
var searchPage = require('../../Pages/SearchPage');
var searchResultsPage = require('../../Pages/SearchResultsPage');

defineSupportCode(function ({Given, Then, When}) {
  Given(/^user is viewing the job detail page$/, function (done) {
    searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      browser.sleep(2000);
      searchPage.search(function () {
        searchResultsPage.clickOnJobRecord('0', function () {
          done();
        });
      });
    });
  });


  When(/^user views the 'Contract Length' filter$/, function (done) {
    keyword.expectVisible(jobDetailsPage.contractType, function () {
      done();
    });
  });
  Then(/^user will view the title text of the filter updated to 'Contract Type'$/, function (done) {
    keyword.verifyText(jobDetailsPage.contractType, 'Contract Type', function () {
      done();
    });
  });
});
