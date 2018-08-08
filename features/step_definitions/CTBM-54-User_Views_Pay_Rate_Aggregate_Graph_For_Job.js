var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');

defineSupportCode(function ({Given, When, Then}) {

  Given(/^user logs into the CB system$/, function (done) {
    //browser.get(globalData.appURL[globalData.TestingEnvironment]);
    browser.get(globalData.appURL.QA);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'gaurav.saikia@mercer.com', function () {
          keyword.performClick('Login_Page|enterToAccountNow', function () {
            done();
          });
        });
      });
    });
  });


  Then(/^user views the pay rate aggregate graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateGraph2', function () {
      done();
    })
  });


  Then(/^user views the title \('Pay Rate Aggregates'\) associated with the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregateTag', function () {
      done();
    });
  });

  Then(/^user views the guidance text \('Other related jobs may be included for comparison purposes\.'\) associated with the graph$/, function (done) {
    keyword.expectVisible('Login_Page|textWithPayRateGrapgh', function () {
      keyword.getText('Login_Page|textWithPayRateGrapgh', function (txt) {
        expect(txt).equal("Other related jobs may be included for comparison purposes");
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user views the label 'Rate' along the vertical axis$/, function (done) {

    done();

  });

  Then(/^user views the label 'Job Title' along the horizontal axis$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Given(/^data is available for the Job being viewed$/, function (done) {
    keyword.expectVisible('Login_Page|jobDetailPageDescription', function () {
      done();
    });
  });


  Given(/^user has selected a job to view the details for here$/, function (done) {
    globalData.isApplicationAngular = true;
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      //browser.sleep(10000);
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

  When(/^user views job details page for a specific job record$/, function (done) {
    keyword.expectVisible('Login_Page|secondSearchedItem', function () {
      keyword.performClick('Login_Page|secondSearchedItem', function () {
        done();
      });
    });
  });

  Given(/^data is available for a job with a lower career level$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Given(/^data is available for a job with a higher career level$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views a relevant range of rates along the vertical axis$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the job title of the next available job with a lower career level in the left column of horizontal axis of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the job title of the job being viewed in the job details page in the center column of horizontal axis of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the job title of the next available job with a higher career level in the right column of horizontal axis of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Given(/^data is not available for a job with a lower career level$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the job title of the job being viewed in the job details page in the left column of horizontal axis of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Given(/^data is not available for a job with a higher career level$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the job title of the job being viewed in the job details page in the right column of horizontal axis of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 90th %ile reported for the next available job with a lower career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 75th %ile reported for the next available job with a lower career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months median pay rate \(rate and bar\) reported for the next available job with a lower career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months average pay rate \(rate and bar\) reported for the next available job with a lower career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 25th %ile reported for the next available job with a lower career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });


  Then(/^in the left column of the graph the user views the current months 10th %ile reported for the next available job with a lower career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });


  Then(/^in the center column of the graph the user views the current months 90th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });


  Then(/^in the center column of the graph the user views the current months 75th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the center column of the graph the user views the current months median pay rate \(rate and bar\) reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the center column of the graph the user views the current months average pay rate \(rate and bar\) reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the center column of the graph the user views the current months 25th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done()
    });
  });

  Then(/^in the center column of the graph the user views the current months 10th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^the graph in the center column will contain unique shading to indicate it is the focus of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 90th %ile reported for the next available job with a higher career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 75th %ile reported for the next available job with a higher career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months median pay rate \(rate and bar\) reported for the next available job with a higher career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months average pay rate \(rate and bar\) reported for the next available job with a higher career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 25th %ile reported for the next available job with a higher career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 10th %ile reported for the next available job with a higher career level of the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 90th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 75th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months median pay rate \(rate and bar\) reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months average pay rate \(rate and bar\) reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 25th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the left column of the graph the user views the current months 10th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^the graph in the left column will contain unique shading to indicate it is the focus of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });//------

  Then(/^in the right column of the graph the user views the current months 90th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 75th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months median pay rate \(rate and bar\) reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });


  Then(/^in the right column of the graph the user views the current months average pay rate \(rate and bar\) reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 25th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^in the right column of the graph the user views the current months 10th %ile reported for the job being viewed in the job details page$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^the graph in the right column will contain unique shading to indicate it is the focus of the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  When(/^user hovers over a specific job's graph$/, function (done) {
    var elemOne = element(By.xpath("(//div[@class='mos-c-preloader__container'])[3]"));
    browser.actions().mouseMove(elemOne).perform();
    browser.sleep(1000);
    done();
  });


  Then(/^user views the the current months 90th %ile pay rate for the job being represented in that graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });//----

  Then(/^user views the the current months 75th %ile pay rate for the job being represented in that graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the the current months median pay value for the job being represented in that graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the the current months average pay value for the job being represented in that graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the the current months 25th %ile pay rate for the job being represented in that graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });

  Then(/^user views the the current months 10th %ile pay rate for the job being represented in that graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregatesGraph', function () {
      done();
    });
  });
});
