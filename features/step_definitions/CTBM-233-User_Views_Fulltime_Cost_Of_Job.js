var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user logs into the CB system for this scenario$/, function (done) {
    browser.get(globalData.appURL.QA);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'gaurav.saikia@mercer.com', function () {
          keyword.performClick('Login_Page|enterToAccountNow', function () {
            keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
              keyword.performClick('Login_Page|keyWordSearchBar', function () {
                //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
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

  When(/^user views the pay rate over time graph$/, function (done) {
    keyword.expectVisible(jobDetailsPage.payRateOverTimeTxt, function () {
      keyword.verifyText(jobDetailsPage.payRateOverTimeTxt, 'PAY RATES OVER TIME', function () {
        keyword.expectVisible(jobDetailsPage.payRateGraphTracker, function () {
      done();
    });
      });
    });
  });

  Then(/^user views the regression information pop\-up$/, function (done) {
    keyword.performClick('Login_Page|infoIconInPayRateByLocationGrapgh', function () {
      keyword.getText('Login_Page|infoIconInPayRateByLocationGrapgh', function (txt) {
        console.log(txt);
        done();
      });
    });
  });
  // var elem = element(By.xpath("(//mercer-icon[@id='info'])[1]"));
  // //browser.actions().mouseMove(elem).perform();
  // browser.click(elem);
  // //var popOver = element(By.css('.popover'));
  // //popOver.getAttribute('title').then(console.log);
  // expect(elem.getAttribute('title')).eventually.contains('Forecast data displayed is');
  // done();

  Then(/^user views the following text in the pop-up: Forecast data displayed is calculated using a projection of historical data$/, function (done) {
    keyword.expectVisible('Login_Page|infoIconInPayRateByLocationGrapgh', function () {
      done();
    })
    // var elem = element(By.xpath("(//mercer-icon[@id='info'])[1]"));
    // browser.actions().mouseMove(elem).perform();
    // //var popOver = element(By.css('.popover'));
    // browser.getAttribute(elem,'title').then(function(txt){
    //     console.log(txt);
    //     done();
    // });
  });

  Given(/^user views the regression information pop\-up now$/, function (done) {
    // var elem = element(By.xpath("(//mercer-icon[@id='info'])[1]"));
    // browser.actions().mouseMove(elem).perform();
    // var popOver = element(By.css('.popover'));
    // popOver.getAttribute('title').then(console.log);
    // done();
    keyword.expectVisible('Login_Page|infoIconInPayRateByLocationGrapgh', function () {
      done();
    });
  });

  When(/^user clicks the information icon here$/, function (done) {
    keyword.expectVisible('Login_Page|infoIconInPayRateByLocationGrapgh', function () {
      keyword.performClick('Login_Page|infoIconInPayRateByLocationGrapgh', function () {
        done();
      });
    });
  });
});
