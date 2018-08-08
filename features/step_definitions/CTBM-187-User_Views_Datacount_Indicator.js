var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user has selected a specific job record to view the details for$/, function (done) {
    keyword.expectVisible('Login_Page|secondSearchedItem', function () {
      keyword.performClick('Login_Page|secondSearchedItem', function () {
        browser.sleep(data.veryShortWait);
        done();
      });
    });
  });

  Given(/^user has not applied any refinements$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        keyword.getText('Login_Page|chooseOrganizationFilter', function (txt1) {
          keyword.getText('Login_Page|chooseContractlengthFilter', function (txt2) {
            console.log("Location is" + txt + "Organization is" + txt1 + "Contract length is" + txt2);
            done();
          });
        });
      });
    });
  });

  When(/^user views the job details page for a job$/, function (done) {
    keyword.expectVisible('Login_Page|refineJobSelectionInJobDetailsPage', function () {
      done();
    });
  });

  Then(/^user views an indicator of the count of organization records that the job details are based off of$/, function (done) {
    keyword.expectVisible('Login_Page|organizationValue', function () {
      done();
    });
  });

  Then(/^user views an indicator of the count of observation records that the job details are based off of$/, function (done) {
    keyword.expectVisible('Login_Page|incumbentsValue', function () {
      done()
    });
  });

  Given(/^user has selected a specific job record to view the details$/, function (done) {
    browser.get(globalData.appURL[globalData.TestingEnvironment]);
    keyword.expectVisible("Login_Page|keyWordSearchBar", function () {
      keyword.performClick("Login_Page|keyWordSearchBar", function () {
        //keyword.setText('Login_Page|keyWordSearchBar', "Security", function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|second_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.expectVisible('Login_Page|fifthSearchedItem', function () {
                keyword.performClick('Login_Page|fifthSearchedItem', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });

  Given(/^user updates one or more refinement selections \(add or remove\)$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        done();
      });
    });
  });

  When(/^the  user clicks the apply acttion$/, function (done) {
    keyword.expectVisible('Login_Page|applyButton', function () {
      keyword.performClick('Login_Page|applyButton', function () {
        done();
      });
    });
  });

  Then(/^user views the indicator of the count of organization records that the job details are based off of, update to reflect the count of records given the refinements applied$/, function (done) {
    keyword.expectVisible('Login_Page|organizationValue', function () {
      keyword.getText('Login_Page|organizationValue', function (txt) {
        console.log(txt);
        done();
      });
    });////callback.pending();
  });

  Then(/^user views the indicator of the count of observation records that the job details are based off of, update to reflect the count of records given the refinements applied$/, function (done) {
    keyword.expectVisible('Login_Page|incumbentsValue', function () {
      keyword.getText('Login_Page|incumbentsValue', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^user has selected a specific job record to view the details for this scenario$/, function (done) {
    keyword.expectVisible('Login_Page|refineJobSelectionInJobDetailsPage', function () {
      done();
    });
  });

  When(/^user clears\/resets the refinement selections \(add or remove\)$/, function (done) {
    keyword.expectVisible('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|resetFilter', function () {
        done();
      });
    });
  });

  Then(/^user views the indicator of the count of organization records that the job details are based off of, update to reflect the count of records given no refinements applied$/, function (done) {
    keyword.expectVisible('Login_Page|organizationValue', function () {
      keyword.getText('Login_Page|organizationValue', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user views the indicator of the count of observation records that the job details are based off of, update to reflect the count of records given no refinements applied$/, function (done) {
    keyword.expectVisible('Login_Page|incumbentsValue', function () {
      keyword.getText('Login_Page|incumbentsValue', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^user perform job search$/, function (done) {
    keyword.expectVisible("Login_Page|keyWordSearchBar", function () {
      keyword.performClick("Login_Page|keyWordSearchBar", function () {
        //keyword.setText('Login_Page|keyWordSearchBar', "Security", function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|second_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              done();
            });
          });
        });
      });
    });
  });
});
