var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  When(/^user is viewing the job details page this scenario$/, function (done) {
    keyword.expectVisible('Login_Page|refineJobSelectionInJobDetailsPage', function () {
      keyword.getText('Login_Page|refineJobSelectionInJobDetailsPage', function (txt) {
        done();
      });
    });
  });


  Given(/^user login into CB system and performs search$/, function (done) {
    browser.get(globalData.appURL[globalData.TestingEnvironment]);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'gaurav.saikia@mercer.com', function () {
          keyword.performClick('Login_Page|enterToAccountNow', function () {
            keyword.expectVisible("Login_Page|keyWordSearchBar", function () {
              keyword.setText('Login_Page|keyWordSearchBar', "Security", function () {
                keyword.performClick('Login_Page|jobFamily', function () {
                  keyword.performClick('Login_Page|hrId', function () {
                    keyword.performClick('Login_Page|searchButton', function () {
                      keyword.expectVisible('Login_Page|secondSearchedItem', function () {
                        keyword.performClick('Login_Page|secondSearchedItem', function () {
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
    });
  });


  Then(/^user will view the apply functionality$/, function (done) {
    keyword.expectVisible('Login_Page|applyButton', function () {
      done();
    });
  });


  When(/^user has not populated any of the filters \(location, organization size, contract type\) with a value$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilterButton', function () {
      keyword.getText('Login_Page|chooseLocationFilterButton', function (txt) {
        if (txt === 'Choose One') {
          done();
        }

        else {
          keyword.performClick('Login_Page|chooseLocationFilterButton', function () {
            keyword.performClick('Login_Page|chooseLocationLondon', function () {
              keyword.performClick('Login_Page|resetFilter', function () {
                done();
              });
            });
          });

        }
      });
    });
  });


  Then(/^user will view the apply functionality disabled$/, function (done) {
    expect(element(By.xpath('//button[@class="appybtn mos-c-button--sm mos-c-button"]')).isEnabled()).eventually.equal(false).then(function () {
      done();
    });//.eventually.equal(true);

  });

  When(/^user has populated at least one of the filters \(location, organization size, contract type\) with a value$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        done();
      });
    });
  });

  Then(/^user will view the apply functionality enabled$/, function (done) {
    expect(element(By.xpath('//button[@class="appybtn mos-c-button--sm mos-c-button"]')).isEnabled()).eventually.equal(true).then(function () {
      done();
    });
  });


  When(/^user initiates the apply functionality$/, function (done) {
    keyword.expectVisible('Login_Page|applyButton', function () {
      done();
    });
  });

  Then(/^the current month's data rate displayed in the job details section will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      keyword.getText('Login_Page|payRateCurrentMonth', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^the past month's data rate displayed in the job details section will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      keyword.getText('Login_Page|payRatePreviousMonth', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^the past and current month's data points displayed in the the Pay Rate over Time graph will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    })
  });

  Then(/^the future month's forecasted data points \(forecasted, high, Low\) displayed in the the Pay Rate over Time graph will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    })
  });

  Then(/^the pay Rate Aggregates graph will be refreshed$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^the pay rates displayed for each location in the Job Rates by Location graph will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    });
  });


  Then(/^the pay rate data points \(90th, 75th, Median, Average, 25th, 10th\) for the jobs displayed in the Pay Rate Aggregates graph will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^the rate trajectories displayed for each location in the Job Rates by Location graph will be updated to reflect the refined data set selected$/, function (done) {
    // keyword.expectVisible('Login_Page|jobRatesLondonLocation', function () {
    //     keyword.getText('Login_Page|jobRatesLondonLocation', function (txt) {
    //         console.log(txt);
    keyword.expectVisible('Login_Page|jobRatesFirstRate', function () {
      keyword.getText('Login_Page|jobRatesFirstRate', function (txt1) {
        console.log(txt1);
        done();
      });
    });
  });
  //     });
  // });

  Then(/^the annualized contractor pay rate displayed in the Full Time Pay Rate graph will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|fullTimeSalary', function () {
      keyword.getText('Login_Page|fullTimeSalary', function () {
        done();
      });
    });
  });

  Then(/^the full time pay rate displayed in the Full Time Pay Rate graph will be updated to reflect the refined data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|annualContractorSalary', function () {
      done();
    });
  });

  When(/^user has not populated any of the filters \(location, organization size, contract type\) with a value now$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationNothing', function () {
        done();
      });
    });
  });

  Then(/^user will view the reset all functionality disabled$/, function (done) {
    keyword.expectVisible('Login_Page|resetFilterDisabled', function () {
      done();
    });
  });

  Then(/^user will view the reset all functionality enabled$/, function (done) {
    expect(element(By.xpath("//a[@class='restbtn']")).isEnabled()).eventually.equal(true).then(function () {
      done();
    });
  });

  Given(/^the Job Rates by Location graph will be refreshed here$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      // keyword.getText('Login_Page|jobRatesFirstRate', function (txt1) {
      //     console.log(txt1);
      done();
    });
  });

  Given(/^the Full Time Pay Rate graph will be refreshed$/, function (done) {
    keyword.expectVisible('Login_Page|fullTimeSalary', function () {
      done();
    });
  });

  When(/^user clicks the reset all feature$/, function (done) {
    keyword.expectVisible('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|resetFilter', function () {
        done();
      });
    });
  });

  Then(/^user will see the filters \(location, organization size, contract type\) cleared$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        expect(txt === "Choose One");
        done();
      });
    });
  });

  Then(/^system refreshes the job details page for the job displaying the job data with no filters applied$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      keyword.getText('Login_Page|payRateCurrentMonth', function (txt) {
        console.log(txt);
        keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
          keyword.getText('Login_Page|payRatePreviousMonth', function (txt1) {
            console.log(txt1);
            done();
          });

        });
      });
    });
  });
});
