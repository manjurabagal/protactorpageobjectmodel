var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {


  Then(/^user views the contractor\/full time pay rate graph$/, function (done) {
    keyword.expectVisible('Login_Page|contractorFullTimePayTable', function () {
      done();
    });
  });

  Then(/^user views the primary title \('Contractor\/Full Time Annual Pay Rates'\) associated with the graph$/, function (done) {
    keyword.expectVisible('Login_Page|ftRate', function () {
      done();
    });
  });

  Then(/^user views the sub\-section title \('CONTRACTOR'\) associated with the left sub\-section$/, function (done) {
    keyword.expectVisible('Login_Page|annualContractorSalary', function () {
      keyword.getText('Login_Page|annualContractorSalary', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user views the descriptive text \('YEARLY SALARY'\) associated with the left sub\-section$/, function (done) {
    keyword.expectVisible('Login_Page|yearlySalary', function () {
      keyword.getText('Login_Page|yearlySalary', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user views the sub\-section title \('FULL TIME'\) associated with the right sub\-section$/, function (done) {
    keyword.expectVisible('Login_Page|fullTimeSalary', function () {
      keyword.getText('Login_Page|fullTimeSalary', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user views the descriptive text \('F\/T MARKET RATE'\) associated with the right sub\-section$/, function (done) {
    keyword.expectVisible('Login_Page|ftRate', function () {
      keyword.getText('Login_Page|ftRate', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user views an information icon$/, function (done) {
    keyword.expectVisible('Login_Page|infoIconInAnnualFullTimeGrapgh', function () {
      done();
    });
  });

  Given(/^user has selected a job to view the details for this scenario$/, function (done) {
    globalData.isApplicationAngular = true;
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|first_JobFamily', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              done();
            });
          });
        });
        //});
      });
    });
  });


  When(/^user views job details page for a specific job for this scenario$/, function (done) {
    keyword.expectVisible('Login_Page|secondSearchedItem', function () {
      keyword.performClick('Login_Page|secondSearchedItem', function () { //informationSecurityManagerM3
        done();
      });
    });
  });

  When(/^user clicks the information icon$/, function (done) {
    keyword.performClick('Login_Page|infoIconInAnnualFullTimeGrapgh', function () {
      done();
    });
  });

  Then(/^user views the annualized pay rate information pop\-up$/, function (done) {
    var elem = element(By.xpath("(//mercer-icon[@id='info'])[2]"));
    browser.actions().mouseMove(elem).perform();
    done();//.equal("Untag this job");
  });

  Then(/^user views the following text in the pop-up Contractor annual rate is calculated using a 40 hour week. Full time rates display Base Salary amounts$/, function (done) {

    var elem = element(By.xpath("(//mercer-icon[@id='info'])[2]"));
    browser.actions().mouseMove(elem).perform();
    done();
  });

  Then(/^user views the pop\-up close$/, function (done) {
    console.log("pop up is closed");
    done();
  });

  Given(/^there is sufficient data to display an annualized contractor pay rate given any user applied refinements for the job being viewed\.$/, function (done) {
    keyword.expectVisible('Login_Page|fullTimeSalary', function () {
      done();
    });
  });

  Then(/^user views the annualized contractor pay rate reflecting any user applied refinements within the left sub\-section$/, function (done) {
    keyword.expectVisible('Login_Page|fullTimeSalary', function () {
      done();
    });
  });

  Given(/^there is insufficient data to display an annualized contractor pay rate given any user applied refinements for the job being viewed\.$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|customerService', function () {
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

  Then(/^user views a dash within the left sub\-section where the annualized contractor pay rate would display$/, function (done) {
    expect(element(By.xpath("//h3[text()='FULL TIME']")).isPresent()).eventually.equal(false);
    done();
  });

  Given(/^there is sufficient data to display an annual market pay rate given any user applied refinements for the job being viewed\.$/, function (done) {
    //browser.navigate().back();
    browser.get(globalData.appURL.QA);
    //keyword.performClick('Login_Page|loginButtonMSSO', function () {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|informationTechnology', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.expectVisible('Login_Page|informationSecurityManagerM3', function () {
                keyword.performClick('Login_Page|informationSecurityManagerM3', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });
  //});

  Then(/^user views the annual market pay rate reflecting any user applied refinements within the right sub\-section$/, function (done) {
    keyword.expectVisible('Login_Page|fullTimeSalary', function () {
      done();
    });
  });

  Given(/^there is insufficient data to display an annual market pay rate given any user applied refinements for the job being viewed\.$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|customerService', function () {
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

  Then(/^user views a dash within the right sub\-section where the annual market pay rate would display$/, function (done) {
    expect(element(By.xpath("//h3[text()='FULL TIME']")).isPresent()).eventually.equal(false);
    done();
  });
});
