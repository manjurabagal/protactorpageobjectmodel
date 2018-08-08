var {defineSupportCode} = require("cucumber");
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user views the dashboard page$/, function (done) {
    searchResultsPage.headerPage.navigateToHome(function () {
      done();
    });
  });


  Given(/^one or more tagged job records are visible on the page$/, function (done) {
    keyword.expectVisible(homePage.jobRecordLnks, function () {
        done();
    });
  });


  Given(/^user views a specific job record for a tagged job$/, function (done) {
    keyword.expectVisible(homePage.jobRecordLnks, function () {
      done();
    });
  });


  Given(/^user views a specific job record for a tagged job in result page$/, function (done) {

    keyword.expectVisible(searchResultsPage.savedJobBtn, function () {
      done();
    });

  });


  Given(/^user clicks the tagged job icon in search results page$/, function (done) {
    keyword.performClick(searchResultsPage.savedJobBtn, function () {
      done();
    });

  });


  When(/^user clicks the tagged job icon$/, function (done) {
    keyword.performClick(homePage.savedJobsBtn, function () {
      done();
    });

  });


  When(/^user clicks the tagged job icon in job details page$/, function (done) {
    jobDetailsPage.unTagJob(function () {
      done();
  });
  });


  Then(/^user will view the tagged job icon update to display 'Remove' confirmation$/, function (done) {

  });


  Given(/^the 'Remove' confirmation is visible on a specific tagged job record$/, function (done) {
    keyword.performClick(homePage.savedJobsBtn, function () {
      keyword.verifyText(homePage.removeJobBtn, 'Remove X', function () {
    done();
  });
    });
  });


  When(/^user clicks the 'Remove' confirmation on that job record$/, function (done) {
    keyword.performClick(homePage.removeJobBtn, function () {
      done();
    });
  });


  Given(/^user navigates back$/, function (done) {
    browser.navigate().back();
    browser.sleep(1000);
    keyword.performClick('Login_Page|dashBoard', function () {
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
          keyword.performClick('Login_Page|jobFamily', function () {
            keyword.performClick('Login_Page|hrId', function () {
              keyword.performClick('Login_Page|searchButton', function () {
                done();
              });
            });
          });
        });
      });
    })
  });


  Given(/^one or more tagged job records are visible on this page$/, function (done) {
    keyword.keyword.expectVisible('Login_Page|thirdUnTag', function () {
      done();
    })
  });


  Given(/^user views the job detailes page$/, function (done) {
    keyword.getText('Login_Page|searchedResultPage', function () {
      done();
    })
  });


  Then(/^that Job will be untagged$/, function (done) {
    keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
      done();
    })
  });


  Then(/^the tagged jobs section will be refreshed$/, function (done) {
    keyword.verifyText(homePage.dontHvSavedJobsTxt, "Looks like you don't have any saved jobs here.", function () {
      done();
    })
  });


  Then(/^user will view the tagged job icon update to display 'Remove' confirmation now$/, function (done) {
    keyword.verifyText(homePage.removeJobBtn, 'Remove X', function () {
      //Below code to untag saved job
      keyword.performClick(homePage.removeJobBtn, function () {
        done();
      })
  });
  });


  When(/^user clicks away from the 'Remove' confirmation on the job record$/, function (done) {
    homePage.clickOnJobSubFamilyHeader(function () {
      done();
    })
  });


  Then(/^user views the 'Remove' confirmation update back to the tagged job icon$/, function (done) {
    keyword.verifyTextContains(homePage.savedJobsBtn, 'Saved', function () {
      //below code to untag a job
      homePage.unTagJob(function () {
        done();
      })
    });
  });


  Then(/^user will view the tagged job icon update to untagged$/, function (done) {
    keyword.verifyText(searchResultsPage.saveJobBtn, 'Save Job', function () {
    done();
    });
  });


  Then(/^user will view the tagged job icon update to untagged in job details page$/, function (done) {
    keyword.verifyText(jobDetailsPage.saveJobBtn, 'Save Job', function () {
      done();
    });
  });
  Then(/^the Job will be untagged$/, function (done) {
    keyword.expectVisible(searchResultsPage.saveJobBtn, function () {
      done();
    });
  });


  Then(/^the Job will be untagged in job details page$/, function (done) {
    keyword.expectVisible(jobDetailsPage.saveJobBtn, function () {
      done();
    });
  });
  Given(/^the job being viewed is tagged$/, function (done) {
    jobDetailsPage.saveJob(function () {
      done();
    });
  });
});
