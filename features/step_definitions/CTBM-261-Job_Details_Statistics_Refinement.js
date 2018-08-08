var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^user is viewing the job details page in this scenario$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|first_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.expectVisible('Login_Page|secondSearchedItem', function () {
                keyword.performClick('Login_Page|secondSearchedItem', function () {
                  keyword.expectVisible('Login_Page|refineJobSelectionInJobDetailsPage', function () {
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

  When(/^user clicks on the Contract type filter$/, function (done) {
    keyword.expectVisible('Login_Page|chooseContractlengthFilter', function () {
      keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
        done();
      });
    });
  });

  Then(/^system will display the Contract type filter open$/, function (done) {
    keyword.expectVisible('Login_Page|perHour', function () {
      done();
    });
  });

  Then(/^user views a list of unique Contract types to select from$/, function (done) {
    keyword.expectVisible('Login_Page|perHour', function () {
      keyword.expectVisible('Login_Page|perDay', function () {
        done();
      });
    });
  });

  Then(/^user views the Contract types sorted by name as follows \(top\-to\-bottom, left\-to\-right\): Per Hour, Per Day, Per Month, Per Annum$/, function (done) {
    keyword.expectVisible('Login_Page|perHour', function () {
      keyword.getText('Login_Page|perHour', function (txt) {
        keyword.getText('Login_Page|perDay', function (txt1) {
          keyword.getText('Login_Page|perMonth', function (txt2) {
            keyword.getText('Login_Page|perAnnum', function (txt3) {
              console.log("first option" + txt + "second option" + txt1 + "third option" + txt2 + "fourth option" + txt3);
              done();
            });
          });
        });
      });
    });
  });
});
