var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {

  Then(/^user views the first few lines of that job's Job Description within the Job Record\.$/, function (done) {
    keyword.getText(searchResultsPage.jobDescTxt, function (jobDescription) {
      expect(jobDescription).not.equal("");
      done();
    });
  });
  When(/^user hovers over the job record$/, function (done) {
    browser.actions().mouseMove(searchResultsPage.jobDescTxt).perform();
    done();
  });

  Then(/^no hover\-over is displayed$/, function (done) {
      keyword.verifyAttributeByLoc(searchResultsPage.jobTitleHeadrLnk, "title","",function () {
        done();
      });
  });
});
