var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^there is insufficient data to display an annual market pay rate given the user applied refinements for the job being viewed\.$/, function (done) {
    keyword.expectVisible('Login_Page|chooseContractlengthFilter', function () {
      keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
        keyword.performClick('Login_Page|chooseContractlengthDaily', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            done();
          });
        });
      });
    });
  });

  When(/^user views the contractor\/full time pay rate graph for this scenario$/, function (done) {
    keyword.expectVisible('Login_Page|contractorFullTimePayTable_1', function () {
      done();
    });
  });

  Then(/^user views the title text of the graph updated to read 'Contractor Equivalent Annual Pay Rate'$/, function (done) {
    keyword.expectVisible('Login_Page|contractorTitleText', function () {
      done();
    });
  });


  Then(/^user does not view the sub\-section title \('FULL TIME'\) associated with the right sub\-section$/, function (done) {
    expect(element(By.xpath("//h3[contains(text(),'FULL TIME')]/..//h2[@class='pricetext']")).isPresent()).eventually.equal(false);
    done();
  });

  Then(/^user does not view the graph broken into two sub\-sections$/, function (done) {
    keyword.expectVisible('Login_Page|annualContractorSalary', function () {
      done();
    });
  });

  Then(/^user does not view the descriptive text \('F\/T MARKET RATE'\) associated with the right sub\-section$/, function (done) {
    expect(element(By.xpath("(//h4[@class='yearText'])[2]")).isPresent()).eventually.equal(false);
    done();
  });

  Then(/^user does not view the annual market pay rate$/, function (done) {
    expect(element(By.xpath("//h3[contains(text(),'FULL TIME')]/..//h2[@class='pricetext']")).isPresent()).eventually.equal(false);
    done();
  });

  Then(/^user views the left sub section title, descriptive text, and annualized contractor pay rate centered in the graph$/, function (done) {
    keyword.expectVisible('Login_Page|annualContractorSalary', function () {
      keyword.expectVisible('Login_Page|contractorTitle', function () {
        keyword.expectVisible('Login_Page|contractorFullTimePayTable_1', function () {
          done();
        });
      });
    });
  });

  Then(/^user views the following text in the pop\-up: Contractor annual rate is calculated using a 40 hour week$/, function (done) {
    keyword.expectVisible('Login_Page|contractorFullTimePayTable_1', function () {
      console.log("Contractor annual rate is calculated using a 40 hour week");
      done();
    });
  });

  Given(/^user login inside and perform job search and enters into the job details page of the application$/, function (done) {
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

  Given(/^there is insufficient data to display an annual market pay rate given any user applied refinements for the job being viewed again\.$/, function (done) {
    keyword.expectVisible('Login_Page|chooseContractlengthFilter', function () {
      keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
        keyword.performClick('Login_Page|chooseContractlengthDaily', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            done();
          });
        });
      });
    });
  });

  When(/^user clicks the information icon to$/, function (done) {
    keyword.performClick('Login_Page|infoIcon', function () {
      done();
    });
  });

  Then(/^user views the annualized pay rate information pop\-up message$/, function (done) {
    var elem = element(By.xpath("//mercer-icon[@id='info']"));
    browser.actions().mouseMove(elem).perform();
    done();
  });

  Given(/^user performs a job search$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
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
