var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^only a single data point is available to display in the pay rate over time graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });
  Then(/^user views the y \(vertical\) axis populated with a range of values as is normally displayed when multiple data points are present in the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });

  Given(/^User is viewing the job details page for a specific Job$/, function (done) {
    keyword.expectVisible('Login_Page|dashboardLink', function () {
      keyword.performClick('Login_Page|dashboardLink', function () {
        keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
          keyword.performClick('Login_Page|keyWordSearchNew', function () {
            keyword.performClick('Login_Page|jobFamily', function () {
              keyword.performClick('Login_Page|first_JobFamily', function () {
                keyword.performClick('Login_Page|searchButton', function () {
                  keyword.expectVisible('Login_Page|firstSearchedItem', function () {
                    keyword.performClick('Login_Page|firstSearchedItem', function () {
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  When(/^no forecasted data is available to display for the job$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });

  Then(/^user views one additional month in advance of the current month displayed in the x \(horizontal\) axis of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });

});
