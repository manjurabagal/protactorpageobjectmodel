var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
var currentMonthMedianPay = '47.5';
var lastMonthMedianPay = '47.5';
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user login inside and perform job search and enters into the job details page$/, function (done) {
    browser.get(globalData.appURL[globalData.TestingEnvironment]);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'gaurav.saikia@mercer.com', function () {
          keyword.performClick('Login_Page|enterToAccountNow', function () {
            keyword.expectVisible("Login_Page|keyWordSearchBar", function () {
              keyword.performClick('Login_Page|keyWordSearchBar', function () {
                //keyword.setText('Login_Page|keyWordSearchBar', "Security", function () {
                keyword.performClick('Login_Page|jobFamily', function () {
                  keyword.performClick('Login_Page|administration', function () {
                    keyword.performClick('Login_Page|searchButton', function () {
                      //keyword.expectVisible('Login_Page|firstSearchedResult', function () {
                      //keyword.performClick('Login_Page|firstSearchedResult', function () {
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    })
  });


  When(/^user navigates back and views the dashboard page$/, function (done) {
    homePage.headerPage.navigateToHome(function () {
      done();
    });
  });


  When(/^user has previously selected a value in the pay rate toggle to Median$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        homePage.searchPage.averageEnabledByDefault(function () {
          homePage.searchPage.selectMedian(function () {
            done();
          });
        });
      });
    });
  });


  Then(/^user will view the pay rate toggle set to Median$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianEnabled', function () {
      done();
    });
  });


  Then(/^user will view the pay rate toggle set to their last selection set to Median$/, function (done) {
    keyword.expectEnabled('Job_Details_Page|payRateToggleMedianEnabledJobDetailsPage', function () {
      done();
    });
  });


  Given(/^user views the pay rate toggle enabled in job details page$/, function (done) {
    jobDetailsPage.payRateToggleVisible(function () {
      done();
    });
  });


  Given(/^pay rate toggle is set to 'median' in job details page$/, function (done) {
    jobDetailsPage.medianSelected(function () {
      done();
    });
  });

  When(/^user clicks 'average' in job details page$/, function (done) {
    jobDetailsPage.selectAverage(function () {
      done();
    });
  });

  Then(/^the current month's data rate displayed in the job details section will be updated to display the average pay rate of the data set selected$/, function (done) {
    jobDetailsPage.dataRateUpdatedForTheCurrentMonthWithAverageToggle(function () {
      done();
    });
  });


  Then(/^the past month's data rate displayed in the job details section will be updated to display the average pay rate of the data set selected$/, function (done) {
    jobDetailsPage.dataRateUpdatedForThePastMonthWithAverageToggle(function () {
      done();
    });
  });


  Then(/^the past and current month's data points displayed in the the Pay Rate over Time graph will be updated to display the average pay rate of the data set selected$/, function (done) {
    jobDetailsPage.payRateGraphUpdated(function () {
      done();
    });
  });


  Then(/^the future month's forecasted data points \(forecasted, high, Low\) displayed in the the Pay Rate over Time graph will be updated to reflect the average \(forecasted, high, Low\) of the data set selected$/, function (done) {
    jobDetailsPage.payRateGraphUpdated(function () {
      done();
    });
  });

  Then(/^the Pay Rate over Time graph will be refreshed$/, function (done) {
    jobDetailsPage.payRateGraphUpdated(function () {
      done();
    });
  });


  Then(/^the pay rates displayed for each location in the Job Rates by Location graph will be updated to display the average pay rate of the data set selected$/, function (done) {
    jobDetailsPage.jobRateByLocationUpdatedWithAverageToggle(function () {
      done();
    });
  });

  Then(/^the rate trajectories displayed for each location for Average in the Job Rates by Location graph will be updated to reflect the updated pay rates$/, function (done) {
    jobDetailsPage.trajectoriesUpdatedWithAverageToggle(function () {
      done();
    });
  });

  Then(/^the rate trajectories displayed for each location in the Job Rates by Location graph will be updated to reflect the updated pay rates$/, function (done) {
    jobDetailsPage.trajectoriesUpdatedWithMedianToggle(function () {
      done();
    });
  });

  Then(/^the Job Rates by Location graph will be refreshed$/, function (done) {
    jobDetailsPage.jobRateByLocationUpdatedWithAverageToggle(function () {
      done();
    });
  });


  Then(/^the user views the annualized contractor pay rate within the left sub\-section of the contractor\/full time pay rate graph updated to display the average annualized contractor pay rate of the data set selected$/, function (done) {
    jobDetailsPage.annualizedPayRatesUpdatedToAverageWithAverageEnableToggle(function () {
      done();
    });
  });

  When(/^user clicks 'median' in job details page$/, function (done) {
    jobDetailsPage.selectMedian(function () {
      done();
    });
  });

  Then(/^pay rate toggle will be updated to show 'median' selected in job details page$/, function (done) {
    jobDetailsPage.medianSelected(function () {
      done();
    });
  });


  Then(/^the user views the annual market pay rate within the right sub\-section of the contractor\/full time pay rate graph updated to display the average annual market pay rate of the data set selected$/, function (done) {
    jobDetailsPage.contractorPayUpdatedToAverageWithAverageEnableToggle(function () {
      done();
    });
  });


  Then(/^the contractor\/full time pay rate graph will be refreshed$/, function (done) {
    jobDetailsPage.annualPayVisibility(function () {
      done();
    });
  });


  Given(/^pay rate toggle is set to 'average' in job details page$/, function (done) {
    jobDetailsPage.averageSelected(function () {
      done();
    });
  });


  Given(/^user checks for enable or disable$/, function (done) {
    if (false) {
      console.log("inside if statement");
      done();
    }
    // var PC = protractor.ExpectedConditions;
    // if(PC.visibilityOf(element(By.xpath("//button[@class='mos-c-button--sm mos-c-button mos-c-button--reverse avoid-clicks' and @id='FilterViaMedianLink']")))){
    //     console.log("inside if statement");
    //     done();
    // }
    else {
      keyword.performClick('Login_Page|payRateToggleMedianDisabled', function () {
        console.log("inside else statement");
        done();
      });
    }
  });


  Then(/^the current month's data rate displayed in the job details section will be updated to display the median pay rate of the data set selected$/, function (done) {
    jobDetailsPage.dataRateUpdatedForTheCurrentMonthWithMedianToggle(function () {
      done();
    });
  });


  Then(/^the past month's data rate displayed in the job details section will be updated to display the median pay rate of the data set selected$/, function (done) {
    jobDetailsPage.dataRateUpdatedForThePastMonthWithMedianToggle(function () {
      done();
    });
  });

  Then(/^the past and current month's data points displayed in the the Pay Rate over Time graph will be display the median pay rate of the data set selected$/, function (done) {
    jobDetailsPage.payRateGraphUpdated(function () {
      done();
    });
  });


  Then(/^the future month's forecasted data points \(forecasted, high, Low\) displayed in the the Pay Rate over Time graph will be updated to reflect the median \(forecasted, high, Low\) of the data set selected$/, function (done) {
    jobDetailsPage.payRateGraphUpdated(function () {
      done();
    });
  });

  Then(/^the pay rates displayed for each location in the Job Rates by Location graph will be updated to display the median pay rate of the data set selected$/, function (done) {
    jobDetailsPage.jobRateByLocationUpdatedWithMedianToggle(function () {
      done();
    });
  });


  Then(/^the user views the annualized contractor pay rate within the left sub\-section of the contractor\/full time pay rate graph updated to display the median annualized contractor pay rate of the data set selected$/, function (done) {
    jobDetailsPage.annualizedPayRatesUpdatedToMedianWithMedianEnableToggle(function () {
      done();
    });
  });

  Then(/^the user views the annual market pay rate within the right sub\-section of the contractor\/full time pay rate graph updated to display the median annual market pay rate of the data set selected$/, function (done) {
    jobDetailsPage.contractorPayUpdatedToMedianWithMedianEnableToggle(function () {
      done();
    });
  });

  When(/^user navigates to viewing the dashboard page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|dashBoard', function () {
      keyword.performClick('Dashboard_Page|dashBoard', function () {
        keyword.expectVisible('Dashboard_Page|jobFamily', function () {
          keyword.performClick('Dashboard_Page|jobFamily', function () {
            keyword.expectVisible('Dashboard_Page|first_JobFamily', function () {
              keyword.performClick('Dashboard_Page|first_JobFamily', function () {
                keyword.performClick('Dashboard_Page|searchButton', function () {
                  done();
                });
              });
            });
          });
        });
      })
    });
  });

  Then(/^user will view the pay rate toggle set to the selection the user had previously made on the pay rate toggle in the job details page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|payRateToggleAverageEnabled', function () {
      done();
    });
  });

  When(/^user navigates to viewing the results page$/, function (done) {
    keyword.expectVisible('Job_Details_Page|searchedPageIdentifier', function () {
      keyword.performClick('Job_Details_Page|searchedPageIdentifier', function () {
        done();
      });
    });
  });

  Given(/^user views the pay rate toggle enabled for this scenario$/, function (done) {
    jobDetailsPage.payRateToggleVisible(function () {
      done();
    });
  });

  Given(/^user views the job details page here$/, function (done) {
    keyword.expectVisible('Job_Details_Page|jobDetailsPageIdentifier', function () {
      done();
    });
  });

  Then(/^the Job Rates by Location graph will be refreshed again$/, function (done) {
    jobDetailsPage.jobRateByLocationUpdatedWithMedianToggle(function () {
      done();
    });
  });

  Given(/^user views the pay rate toggle enabled here$/, function (done) {
    keyword.expectVisible('Job_Details_Page|payRateToggleInJobDetailsPage', function () {
      keyword.getText('Job_Details_Page|payRateToggleInJobDetailsPage', function (txt) {
        expect(txt).contains("Average");
        expect(txt).contains("Median");
        done();
      });
    });
  });

  Given(/^user has made a selection in the pay rate toggle to Average$/, function (done) {
    keyword.expectVisible('Job_Details_Page|payRateToggleAverageDisabledJobDetailsPage', function () {
      done();
    });
  });
  Given(/^user has made a selection in the pay rate toggle here$/, function (done) {
    keyword.expectVisible('Job_Details_Page|payRateToggleAverageEnabledInJobDetailsPage', function () {
      done();
    });
  });


  Given(/^user has executed a job search and selects a job$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        done();
      });
    });
  });
  Given(/^user clicks on the icon$/, function (done) {
    keyword.performClick('Dashboard_Page|clickIcon', function () {
      done();
    });
  });
})
;
