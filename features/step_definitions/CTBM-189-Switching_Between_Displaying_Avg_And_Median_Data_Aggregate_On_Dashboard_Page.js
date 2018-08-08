var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user login inside and perform job search$/, function (done) {
    browser.get(globalData.appURL[globalData.TestingEnvironment]);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'gaurav.saikia@mercer.com', function () {
          keyword.performClick('Login_Page|enterToAccountNow', function () {
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
      });
    });
  });

  Given(/^user views the pay rate toggle$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggle', function () {
      keyword.getText('Login_Page|payRateToggle', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^user will view the pay rate toggle set to the selection the user had previously made on the pay rate toggle in the dashboard page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleAverageEnabledForFirstTimeToggle', function () {
      done();
    });
  });


  Then(/^user will view the pay rate toggle set to the selection the user had previously made on the pay rate toggle in the dashboard page now$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianEnabled', function () {
      done();
    });
  });


  Given(/^user has made a selection in the pay rate toggle to Average and to Median$/, function (done) {
    keyword.performClick('Login_Page|payRateToggleAverageDisabled', function () {
      keyword.performClick('Login_Page|payRateToggleMedianDisabled', function () { //coz we want to select Median
        done();
      });
    });
  });

  Given(/^user has made a selection in the pay rate toggle to Median$/, function (done) {
    keyword.performClick('Login_Page|payRateToggleMedianDisabledFirstTime', function () {
      done();
    });
  });


  Given(/^user views the dashboard page again$/, function (done) {
    browser.navigate().back();
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
      keyword.performClick('Login_Page|jobFamily', function () {
        keyword.performClick('Login_Page|administration', function () {
          keyword.performClick('Login_Page|searchButton', function () {
            keyword.expectVisible('Login_Page|secondSearchedItem', function () {
              keyword.getText('Login_Page|secondSearchedItem', function (txt) {
                console.log(txt);
                //expect(txt).contains("Security");
                //keyword.expectVisible('Login_Page|payRateToggleMedianEnabled', function () {
                done();
              });
            });
          });
        });
        //});
      });
    })
  });


  Then(/^user will view the pay rate toggle set to the selection the user had previously made on the pay rate toggle in the dashboard page now to Median$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleAverageEnabled', function () {
      done();
    });
  });


  Given(/^user views the pay rate toggle enabled now$/, function (done) {
    element(By.id("inputSearch")).clear();
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
          keyword.performClick('Login_Page|jobFamily', function () {
            keyword.performClick('Login_Page|hrId', function () {
              keyword.performClick('Login_Page|searchButton', function () {
                keyword.expectVisible('Login_Page|firstSearchedItem', function () {
                  keyword.getText('Login_Page|firstSearchedItem', function (txt) {
                    console.log(txt);
                    expect(txt).contains("Security");
                    keyword.expectVisible('Login_Page|payRateToggleMedianEnabled', function () {
                      keyword.getText('Login_Page|payRateToggleMedianEnabled', function (txt1) {
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


  When(/^user views the dashboard page now$/, function (done) {
    keyword.getText('Login_Page|secondSearchedItem', function (txt) {
      console.log(txt);
      //expect(txt).contains("Security");
      done();
    });
  });

  When(/^user views the dashboard page by navigate back$/, function (done) {
    browser.navigate().to(globalData.appURL[globalData.TestingEnvironment]);
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      done();
    });
  });

  When(/^job records are not visible on the page scenario$/, function (done) {
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.expectVisible('Login_Page|jobResult', function () {
        keyword.getText('Login_Page|jobResult', function (txt) {
          console.log(txt);
          done();
        });
      });
    });
  });

  When(/^user clicks 'median' here$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggleMedianDisabled', function () {
      keyword.performClick('Login_Page|payRateToggleMedianDisabled', function () {
        done();
      });
    });
  });

  Given(/^user views the pay rate toggle enabled for specific scenario$/, function (done) {
    keyword.expectVisible('Login_Page|payRateToggle', function () {
      done();
    });
  });

  Given(/^user has made a selection in the pay rate toggle again$/, function (done) {
    console.log("user has made a toggle");
    done();
  });

  When(/^user navigates to viewing the results page again$/, function (done) {
    console.log("user is in results page now");
    done();
  });
});
