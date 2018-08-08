var {defineSupportCode} = require("cucumber");
var searchResultsPage = require('../../Pages/SearchResultsPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
var homePage = require('../../Pages/HomePage');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user views the results page$/, function (done) {
    keyword.expectVisible(searchResultsPage.saveJobBtn, function () {
      done();
    });
  });


  Given(/^one or more job records are visible on the page$/, function (done) {
    keyword.verifyTextContains(searchResultsPage.pagninationTxt, 'Showing 1', function () {
      done();
    });
  });


  Given(/^user views the job details page$/, function (done) {
    homePage.searchPage.enterSearchKey(globalData.testData.jobDetails.jobSearchKeyword, function () {
      homePage.searchPage.search(function () {
        homePage.clickOnJobRecordLnk(0, function () {
          done();
        });
      });
    });
  });


  Given(/^user views a specific job record for an untagged job$/, function (done) {
    searchResultsPage.getJobRecord(0, function (firstJobRec) {
      keyword.expectVisible(firstJobRec, function () {
        done();
      });
    });
  });

  When(/^user clicks the untagged job icon$/, function (done) {
    searchResultsPage.saveJobs(1, function () {
      done();
    });
  });


  Then(/^user will view the untagged job icon update to tagged$/, function (done) {
    searchResultsPage.getSavedJobBtn(1, function (firstSavedJobBtn) {
      keyword.verifyTextContains(firstSavedJobBtn, 'Saved', function () {
        done();
      });
    });
  });


  Then(/^the Job will be tagged$/, function (done) {
    keyword.expectVisible(searchResultsPage.tagIcon, function () {
      //below code to untag job
      searchResultsPage.headerPage.navigateToHome(function () {
        homePage.unTagJob(function () {
          keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
            done();
          });
        });
      });

    });
  });

  Given(/^user views the job details of the job record$/, function (done) {
    keyword.verifyText(jobDetailsPage.jobDescHeaderTxt, 'DESCRIPTION', function () {
      done();
    });
  });


  Given(/^the job being viewed is untagged$/, function (done) {
    keyword.verifyText(jobDetailsPage.saveJobBtn, 'Save Job', function () {
      done();
    });
  });


  When(/^user clicks this untagged job icon$/, function (done) {
    jobDetailsPage.saveJob(function () {
      done();
    });
  });


  Then(/^user will view the new untagged job icon update to tagged$/, function (done) {
    keyword.verifyTextContains(jobDetailsPage.saveJobBtn, ' Saved', function () {
      done();
    });
  });


  Then(/^the new Job will be tagged$/, function (done) {
    keyword.expectVisible(jobDetailsPage.savedJobTagIcon, function () {
      //below code to untag job
      jobDetailsPage.headerPage.navigateToHome(function () {
        homePage.unTagJob(function () {
          keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
            done();
          });
        });
      });

    });
  });
});
