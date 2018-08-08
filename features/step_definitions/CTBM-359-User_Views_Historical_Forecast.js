var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var jobDetailsPage = require('../../Pages/JobDetailsPage');

var searchPage = require('../../Pages/SearchPage');
var searchResultsPage = require('../../Pages/SearchResultsPage');


defineSupportCode(function ({Given, When, Then}) {

  Then(/^user views the title \('Pay Rate Aggregates'\) of the graph associated with the graph$/, function (done) {
    keyword.expectVisible('Login_Page|payRateAggregateTag', function () {
      done();
    });
  });

  Then(/^user views the label 'Month' along the horizontal axis$/, function (done) {
    done();
  });

  Then(/^user views the relevant range of rates along the vertical axis$/, function (done) {
    keyword.expectVisible(jobDetailsPage.graphYAxis, function () {
      keyword.getElements(jobDetailsPage.verticalPayRatesAllTxt, function (payRatesList) {
        payRatesList.forEach(function (rate) {
          keyword.verifyTextContains(rate, globalData.testData.jobDetails.jobCurrency, function () {
          })
        })
        done();

      });
    });
  });

  Then(/^user views a line indicating the month at which the display of forecasted data begins$/, function (done) {
    keyword.expectVisible(jobDetailsPage.dispForeCastLine, function () {
      done();
    })
  });


  Then(/^And user views the past (\d+) periods based on the calculated statistical mode of the gaps in data available for the job in the horizontal axis$/, function (done) {
    keyword.expectVisible(jobDetailsPage.graphXAxis, function () {
      done();
    });
  });

  Then(/^And user views the future (\d+) periods based on the calculated statistical mode of the gaps in data available for the job in the horizontal axis$/, function (done) {
    keyword.expectVisible(jobDetailsPage.graphXAxis, function () {
      done();
    });
  });


  Then(/^user views the current month in the the horizontal axis$/, function (done) {
    getDateEffMonthFlag(function (flag) {
      expect(flag).to.be.true;
      done();
    })

  });


  Then(/^user views the past (\d+) periods based on the calculated statistical mode of the gaps in data available for the job in the horizontal axis$/, function (arg1, done) {
    keyword.expectVisible(jobDetailsPage.firstForeCastPoint, function () {
      keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (forecastList) {
        expect(forecastList.length).to.equal(8);
        done();

      })
    });
  });


  Then(/^user views the future (\d+) periods based on the calculated statistical mode of the gaps in data available for the job in the horizontal axis$/, function (arg1, callback) {
    keyword.expectVisible(jobDetailsPage.firstForeCastPoint, function () {
      keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (forecastList) {
        expect(forecastList.length).to.equal(8);
        callback();

      })
    });
  });
  Given(/^all periods of data needed to correctly display graph are available$/, function (callback) {
    keyword.expectVisible(jobDetailsPage.payRateGraphTracker, function () {
      callback();
    });
  });

  Then(/^user views a data point, where data is available, for the current month and each of the past (\d+) periods pay rates reported for the job being viewed in the job details page$/, function (arg1, callback) {

    keyword.expectVisible(jobDetailsPage.firstForeCastPoint, function () {
      keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (forecastList) {
        expect(forecastList.length).to.be.below(8);
        callback();
      })
    });
  });


  Given(/^user is viewing the job detail page with some data unavailable$/, function (callback) {
    searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      searchPage.search(function () {
        searchResultsPage.clickOnJobRecord('1', function () {
          callback();
        });
      });
    });
  });
  Given(/^one or more months\/periods of data needed to correctly display graph are unavailable$/, function (callback) {
    callback();
  });


  Then(/^user views a forecasted data point for each of the future (\d+) periods pay rates for the job being viewed in the job details page$/, function (arg1, callback) {
    getFutureForecastCount(function (count) {
      expect(count).to.equal(3);
      callback();
    })
  });

  Then(/^user views a forecasted margin of error range for each of the future (\d+) periods pay rates for the job being viewed in the job details page$/, function (arg1, callback) {
    keyword.expectVisible(jobDetailsPage.marginErrorArea, function () {
      callback();
    });
  });
  Then(/^user views a data point for the current month and each of the past (\d+) periods pay rates reported for the job being viewed in the job details page$/, function (arg1, callback) {
    browser.actions().mouseMove(jobDetailsPage.firstForeCastPoint).perform();
    browser.sleep(2000);
    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (cirPointsList) {
      cirPointsList.forEach(function (cirPoint) {
        browser.actions().mouseMove(cirPoint).perform();
        browser.sleep(2000);
        keyword.expectVisible(jobDetailsPage.mouseHoverGraphRateText, function () {
          keyword.verifyTextContains(jobDetailsPage.mouseHoverGraphRateText, globalData.testData.jobDetails.jobCurrency, function () {
          });
        });
      });
    })
    callback();
  })

  Then(/^user views a hover over box appear$/, function (done) {
    browser.actions().mouseMove(jobDetailsPage.firstForeCastPoint).perform();
    browser.sleep(2000);
    keyword.expectVisible(jobDetailsPage.mouseHoverGraphRateText, function () {
      done();
    });
  });

  Then(/^user views a hover over box appear for the future periods$/, function (done) {
    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (cirPointsList) {
      browser.actions().mouseMove(cirPointsList[7]).perform();
      keyword.expectVisible(jobDetailsPage.mouseHoverGraphRateText, function () {
        done();
      });
    });
  });
  When(/^user hovers over a specific data point for one of the future (\d+) periods$/, function (arg1, callback) {
    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (cirPointsList) {
      browser.actions().mouseMove(cirPointsList[7]).perform();
      browser.sleep(2000);
      callback();
    });
  });
  Then(/^user views that month\/periods pay rate for the job being viewed in the job details page$/, function (callback) {
    browser.actions().mouseMove(jobDetailsPage.firstForeCastPoint).perform();
    browser.sleep(2000);
    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (cirPointsList) {
      for (var i = 0; i < 5; i++) {
        browser.actions().mouseMove(cirPointsList[i]).perform();
        browser.sleep(2000);
        keyword.expectVisible(jobDetailsPage.mouseHoverGraphRateText, function () {
          keyword.verifyTextContains(jobDetailsPage.mouseHoverGraphRateText, globalData.testData.jobDetails.jobCurrency, function () {
          });
        });
      }
    })
    callback();
  });

  Then(/^user views that periods forecasted lower margin or error pay rate for the job being viewed in the job details page$/, function (callback) {
    keyword.expectVisible(jobDetailsPage.marginErrorArea, function () {
      callback();
    });
  });
  Then(/^user views that periods forecasted upper margin or error pay rate for the job being viewed in the job details page$/, function (callback) {
    keyword.expectVisible(jobDetailsPage.marginErrorArea, function () {
      callback();
    });
  });
  Then(/^user views that periods forecasted pay rate for the job being viewed in the job details page$/, function (callback) {

    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (cirPointsList) {
      for (var i = 5; i <= 7; i++) {
        browser.actions().mouseMove(cirPointsList[i]).perform();
        browser.sleep(2000);
        keyword.expectVisible(jobDetailsPage.mouseHoverGraphRateText, function () {
          keyword.verifyTextContains(jobDetailsPage.mouseHoverGraphRateText, globalData.testData.jobDetails.jobCurrency, function () {
            keyword.verifyTextContains(jobDetailsPage.mouseHoverGraphRateText, 'forecasted', function () {
            });
          });
        });
      }
    })
    callback();
  });
  When(/^user hovers over a specific data point for the current month or one of the past (\d+) periods$/, function (arg1, callback) {
    browser.actions().mouseMove(jobDetailsPage.firstForeCastPoint).perform();
    browser.sleep(2000);
    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (cirPointsList) {
      for (var i = 0; i < 5; i++) //curr month and past 4 months- total - 5
      {
        browser.actions().mouseMove(cirPointsList[i]).perform();
        browser.sleep(2000);
      }
    })
    callback();
  });


  function getDateEffMonthFlag(callback) {
    var count = 0;
    keyword.getText(jobDetailsPage.dataEffectiveTxt, function (dataEffectTxt) {
      var monthTxt = dataEffectTxt.indexOf("OF ");
      var month = dataEffectTxt.substr(monthTxt + 2, 3);
      month = parseInt(month);
      keyword.getCurrMonthName(month - 1, function (currMonthName) {
        keyword.getCurrYear(function (currYear) {
          currMonthName = currMonthName.substr(0, 3);
          keyword.getElements(jobDetailsPage.graphXAxisAll, function (list) {
            var size = list.length;
            list.forEach(function (element) {
              keyword.getText(element, function (monthText) {
                if (monthText.indexOf(currMonthName) >= 0 && monthText.indexOf(currYear) >= 0) {
                  callback(true);
                }
                else {
                  count = count + 1;
                  if (count == size)
                    callback(false);
                }
              })
            })
          });
        });
      })
    })
  }

  function getFutureForecastCount(callback) {
    browser.actions().mouseMove(jobDetailsPage.firstForeCastPoint).perform();
    browser.sleep(2000);
    var count = 0;
    var size = 0;
    keyword.getElements(jobDetailsPage.allMonthsForeCastPoint, function (forecastList) {
      var length = forecastList.length;
      forecastList.forEach(function (forecastPoint) {
        browser.actions().mouseMove(forecastPoint).perform();
        browser.sleep(2000);
        keyword.getText(jobDetailsPage.mouseHoverGraphRateText, function (foreCastTxt) {
          size = size + 1;
          if (foreCastTxt.indexOf('Forecasted') >= 0) {
            count = count + 1;
            if (size == length) {
              callback(count);
            }
          }
        })
      })
    })
  }
});





























