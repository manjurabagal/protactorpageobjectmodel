var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^user is viewing the job details page for a job for the particular scenario$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
              keyword.expectVisible('Login_Page|sixthSearchedItem', function () {
                keyword.performClick('Login_Page|sixthSearchedItem', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });

  Given(/^user is viewing the job details page for a job having lower job unavailable$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
              keyword.expectVisible('Login_Page|seventhSearchedItem', function () {
                keyword.performClick('Login_Page|seventhSearchedItem', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });
  Given(/^user is viewing the job details page for a job upper job unavailable$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
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
  Given(/^user is viewing the job details page for a job blank value labels hidden$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
              keyword.expectVisible('Login_Page|eighthSearchedItem', function () {
                keyword.performClick('Login_Page|eighthSearchedItem', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });
  Given(/^only partial data is available for one or more of the Job being viewed$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });
  Then(/^user will only view associated graph elements where data points are available$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });
  Given(/^user is viewing the job details page for a job all data avaialable$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
              keyword.expectVisible('Login_Page|fourthSearchedItem', function () {
                keyword.performClick('Login_Page|fourthSearchedItem', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });
  Given(/^all data for the job being viewed is available$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });
  Given(/^user is viewing the job details page for a job data unavilable$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        browser.sleep(data.veryShortWait);
        keyword.performClick('Login_Page|jobFamily', function () {
          browser.sleep(data.veryShortWait);
          keyword.performClick('Login_Page|first_JobFamily', function () {
            browser.sleep(data.veryShortWait);
            keyword.performClick('Login_Page|searchButton', function () {
              browser.sleep(data.veryShortWait);
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


  Given(/^some data for the job being viewed is unavailable$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });

  Then(/^user views only those labels where data is available to display$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });
});
