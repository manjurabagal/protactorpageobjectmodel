var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {

  When(/^user views the results page after search$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|first_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.expectVisible('Login_Page|secondSearchedItem', function () {
                keyword.getText('Login_Page|secondSearchedItem', function (txt) {
                  console.log(txt);
                  done();
                });
              });
            });
          });
        });
      });
    });
  });


  When(/^user has not previously selected a value in the pay rate toggle$/, function (done) {
    jobDetailsPage.averageSelectedByDefault(function () {
      done();
    });
  });


  Then(/^user will view the pay rate toggle$/, function (done) {
    jobDetailsPage.payRateToggleVisible(function () {
      done();
    });
  });


  Then(/^user will view the pay rate toggle set to 'average' on default\.$/, function (done) {
    jobDetailsPage.averageSelected(function () {
      done();
    });
  });


  When(/^user has previously selected a value in the pay rate toggle$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
      keyword.performClick('Login_Page|payRateToggleMedianDisabledFirstTime', function () { //once you click on mediandisable, then its state will become medianenable and we need to expect visibility of that
        done();
      });
    });
  });


  Then(/^user will view the pay rate toggle set to their last selection$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianEnabled', function () {
      done();
    });
  });


  When(/^job records are visible on the page$/, function (done) {
    keyword.getText('Login_Page|secondSearchedItem', function (txt) {
      console.log(txt);
      done();
    });
  });


  When(/^job records are not visible on the page$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        keyword.setText('Login_Page|keyWordSearchNew', 'finappp', function () {
          keyword.performClick('Login_Page|searchButton', function () {
            keyword.expectVisible('Login_Page|jobResult', function () {
              keyword.getText('Login_Page|jobResult', function (txt) {
                console.log(txt);
                done();
              });
            });
          });
        });
      });
    });
  });


  Then(/^user will not view the pay rate toggle$/, function (done) {
    expect(element(By.xpath("//span[@class='mos-u-align-right toggle-holder']")).isPresent()).eventually.equal(false);
    done();
  });


  Given(/^user views the pay rate toggle enabled$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|first_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.expectVisible('Login_Page|secondSearchedItem', function () {
                keyword.getText('Login_Page|secondSearchedItem', function (txt) {
                  console.log(txt);
                  keyword.expectVisible('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
                    keyword.getText('Login_Page|payRateToggleMedianDisabledFirstTime', function (txt1) {
                      console.log(txt1);
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


  Given(/^pay rate toggle is set to 'median'$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianDisabledFirstTime', function () { //here we are not verifying the median toggle button visibility only but we are verifying the state also, as we have captured the xpath based on that
      keyword.performClick('Login_Page|payRateToggleMedianDisabledFirstTime', function () { //once you click on mediandisable, then its state will become medianenable and we need to expect visibility of that
        done();
      });
    });
  });


  When(/^user clicks 'average'$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianEnabled', function () {
      keyword.expectVisible('Login_Page|payRateToggleAverageDisabled', function () {
        keyword.expectVisible('Login_Page|payRateInDashboardPage', function () {
          keyword.getText('Login_Page|payRateInDashboardPage', function (txt) {
            console.log(txt);
            keyword.performClick('Login_Page|payRateToggleAverageDisabled', function () {
              done();
            });
          });
        });
      });
    });
  });


  Then(/^pay rate toggle will be updated to show 'average' selected$/, function (done) {
    jobDetailsPage.averageSelected(function () {
      done();
    });
  });


  Then(/^the current month's data rate displayed in each job record will be updated to display the average pay rate of the data set selected$/, function (done) {
    keyword.expectVisible('Job_Details_Page|payRateInDashboardPage', function () {
      keyword.getText('Job_Details_Page|payRateInDashboardPage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^the past month's data rate displayed in each job record will be updated to display the average pay rate of the data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateInDashboardPage', function () {
      keyword.getText('Login_Page|payRateInDashboardPage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Given(/^pay rate toggle is set to 'average'$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleAverageEnabled', function () {
      done();
    });
  });


  When(/^user clicks 'median'$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
      keyword.performClick('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
        done();
      });
    });
  });

  Then(/^pay rate toggle will be updated to show 'median' selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianEnabledJobDetailsPage', function () {
      done();
    });
  });


  Then(/^the current month's data rate displayed in each job record will be updated to display the median pay rate of the data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRateInDashboardPage', function () {
      keyword.getText('Login_Page|payRateInDashboardPage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^the past month's data rate displayed in each job record will be updated to display the median pay rate of the data set selected$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonthInDashboardPage', function () {
      keyword.getText('Login_Page|payRatePreviousMonthInDashboardPage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^the job records will be refreshed$/, function (done) {
    keyword.expectVisible('Login_Page|payRateInDashboardPage', function () {
      keyword.getText('Login_Page|payRateInDashboardPage', function (txt) {
        console.log(txt);
        keyword.expectVisible('Login_Page|payRatePreviousMonthInDashboardPage', function () {
          keyword.getText('Login_Page|payRatePreviousMonthInDashboardPage', function (txt1) {
            console.log(txt1);
            done();
          });
        });
      });
    });
  });


  Given(/^user has made a selection in the pay rate toggle$/, function (done) {
    keyword.performClick('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
      done();
    });
  });


  When(/^user navigates to viewing the job details page$/, function (done) {
    homePage.searchPage.selectSearchedJob(1, function () {
      jobDetailsPage.insideJobdetailspage(function () {
        done();
      });
    });
  });


  Then(/^user will view the pay rate toggle set to the selection the user had previously made on the pay rate toggle in the results page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleAverageEnabledForFirstTimeToggle', function () {
      done();
    });
  });


  Given(/^user views the results page again$/, function (done) {
    browser.navigate().back();
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.performClick('Login_Page|jobFamily', function () {
        keyword.performClick('Login_Page|first_JobFamily', function () {
          keyword.performClick('Login_Page|searchButton', function () {
            keyword.expectVisible('Login_Page|secondSearchedItem', function () {
              keyword.getText('Login_Page|secondSearchedItem', function (txt) {
                console.log(txt);
                done();
              });
            });
          });
        });
      });
    });
  });

  Given(/^user views the pay rate toggle enabled again$/, function (done) {
    browser.navigate().to(globalData.appURL[globalData.TestingEnvironment]);
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|first_JobFamily', function () {
            keyword.expectVisible('Login_Page|searchButton', function () {
              keyword.performClick('Login_Page|searchButton', function () {
                keyword.expectVisible('Login_Page|secondSearchedItem', function () {
                  keyword.getText('Login_Page|secondSearchedItem', function (txt) {
                    console.log(txt);
                    keyword.expectVisible('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
                      keyword.getText('Login_Page|payRateToggleMedianDisabledFirstTime', function (txt1) {
                        console.log(txt1);
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

  Given(/^user views the pay rate toggle enabled for this$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggle', function () {
      done();
    });
  });

  Given(/^user has made a selection in the pay rate toggle in this$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleAverageDisabled', function () {
      keyword.performClick('Login_Page|payRateToggleAverageDisabled', function () {
        done();
      });
    });
  });

  When(/^user navigates to viewing the dashboard page for this$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      console.log("user is in the dashboard page");
      done();
    });
  });
});
