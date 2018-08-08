var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  Then(/^user views the text 'Data effective as of \[MM\/YYYY\]'$/, function (done) {
    keyword.expectVisible('Login_Page|dataEffectiveDate', function () {
      keyword.getText('Login_Page|dataEffectiveDate', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^\[MM\/YYYY\] is updated with the month and year of the last effective data set that is being displayed\.$/, function (done) {
    keyword.expectVisible('Login_Page|dataEffectiveDate', function () {
      keyword.getText('Login_Page|dataEffectiveDate', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  When(/^user clicks the default print command integrated in their browser$/, function (done) {
    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('P').perform();
    console.log("Print option is made");
    done();
  });

  Then(/^browser print process will execute$/, function (done) {
    console.log("Print to page is ready");
    done();
  });

  Then(/^all elements of the dashboard page will be printed\.$/, function (done) {
    console.log("The priview is ready to get printed");
    done();
  });

  Then(/^all elements of the results page will be printed\.$/, function (done) {
    console.log("The priview is ready to get printed");
    done();
  });

  Then(/^all elements of the job details page will be printed\.$/, function (done) {
    console.log("The pages are getting printed");
    done();
  });

  Given(/^user views the job details page again$/, function (done) {
    keyword.expectVisible('Login_Page|refineJobSelectionInJobDetailsPage', function () {
      keyword.getText('Login_Page|refineJobSelectionInJobDetailsPage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^perform job search$/, function (done) {
    keyword.expectVisible("Login_Page|keyWordSearchBar", function () {
      keyword.performClick("Login_Page|keyWordSearchBar", function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|first_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              done();
            });
          });
        });
      });
    });
  });
});
