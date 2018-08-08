var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var globalData = require('../../testdata/global.js');

defineSupportCode(function ({Given, Then, When}) {

  Then(/^user will see the keyword search bar1 displayed$/, function (done) {
    keyword.expectVisible('Dashboard_Page|GlobalSearch_Input', function () {
      keyword.expectVisible('Dashboard_Page|Mercer_Icon_Home', function () {
        keyword.performClick('Dashboard_Page|Mercer_Icon_Home', function () {
          done();
        });
      });
    });
  });
  When(/^user selects a family in the family filters$/, function (done) {
    keyword.expectVisible('Dashboard_Page|GlobalSearch_Input', function () {
      keyword.performClick('Dashboard_Page|GlobalSearch_Input', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            done();
          });
        });
      })
    });
  });

});
