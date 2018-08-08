var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {
  When(/^user is viewing the job search functionality$/, function (done) {
    keyword.expectVisible(searchPage.searchBtn, function () {
      done();
    });
  });

  Then(/^user views the family filter drop\-down on default$/, function (done) {
    keyword.expectVisible(searchPage.jobFamilyDropdwnLnk, function () {
      done();
    });
  });
  Then(/^user views the sub\-family filter drop\-down on default$/, function (done) {
    keyword.expectVisible(searchPage.jobSubFamilyDropdwnLnk, function () {
      done();
    });
  });

  When(/^user is viewing the job search functionality for the saved page$/, function (done) {
    keyword.expectVisible(homePage.searchPage.jobSubFamilyDropdwnLnk, function () {
      done();
    });
  });

  Then(/^user views the family filter drop\-down on default for the saved page$/, function (done) {
    keyword.expectVisible(homePage.jobFamilyDropDwntxt, function () {
      done();
    });
  });
});
