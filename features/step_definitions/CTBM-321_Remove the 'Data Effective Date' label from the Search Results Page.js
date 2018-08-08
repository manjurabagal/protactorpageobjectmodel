var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var headerPage = require('../../Pages/HeaderPage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {

  When(/^user is viewing the top of the page$/, function (done) {
    browser.actions().mouseMove(headerPage.profileIconLnk).perform();
    browser.sleep(2000);
        done();
      });

  Then(/^user does not view the 'Data Effective Date' label$/, function (done) {
      keyword.verifyTextNotPresent(searchResultsPage.outerFrame, "Data Effective", function () {
        done();

    });
  });

  Then(/^User does not view the Data Effective Date$/, function (done) {
    keyword.verifyTextNotPresent(searchResultsPage.outerFrame, "Data Effective", function () {
        done();
    });
  })
});
