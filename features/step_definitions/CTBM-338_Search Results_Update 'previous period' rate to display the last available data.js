var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {
  When(/^user views a specific job record$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      done();
    });
  });
});
