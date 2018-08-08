var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^there is no data to display in the Pay Rates by Location Table$/, function (done) {
    keyword.expectVisible('Login_Page|jobRatesFirstLocationRate', function () {
      keyword.getText('Login_Page|jobRatesFirstLocationRate', function (txt) {
        expect(txt === '-');
        keyword.expectVisible('Login_Page|jobRatesSecondLocationRate', function () {
          keyword.getText('Login_Page|jobRatesSecondLocationRate', function (txt) {
            expect(txt === '-');
            done();

          });
        });
      });
    });
  });

  Given(/^user is viewing the job details page for a job for this scenario$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
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

  When(/^user views the Pay Rates by Location Table$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });

  Then(/^user views the following (\d+) locations populated in the table \(top to bottom\): London, North East, North West, South East, South West$/, function (arg1, done) {
    keyword.expectVisible('Login_Page|firstLocation', function () {
      keyword.getText('Login_Page|firstLocation', function (txt) {
        keyword.getText('Login_Page|secondLocation', function (txt1) {
          keyword.getText('Login_Page|thirdLocation', function (txt2) {
            keyword.getText('Login_Page|fourthLocation', function (txt3) {
              keyword.getText('Login_Page|fifthLocation', function (txt4) {
                expect(txt === 'London');
                expect(txt1 === 'North East');
                expect(txt2 === 'North West');
                expect(txt3 === 'South East');
                expect(txt4 === 'South West');
                done();
              });
            });
          });
        });
      });
    });
  });

  Then(/^each location will be shown with dashes in the related data columns in the table\.$/, function (done) {
    keyword.expectVisible('Login_Page|jobRatesFirstLocationRate', function () {
      keyword.getText('Login_Page|jobRatesFirstLocationRate', function (txt) {
        keyword.getText('Login_Page|jobRatesSecondLocationRate', function (txt1) {
          keyword.getText('Login_Page|jobTrajectorySecondLocationRate', function (txt2) {
            expect(txt === '-');
            expect(txt1 === '-');
            expect(txt2 === '-');
            done();
          });
        });
      });
    });
  });
});
