var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');

defineSupportCode(function ({Given, When, Then}) {


  Then(/^user views the job rates by location table$/, function (done) {
    keyword.expectVisible('Login_Page|payRatesByLocationTable', function () {
      done();
    });
  });

  Then(/^user views the primary title \('Pay Rates by Location'\) associated with the table/, function (done) {
    keyword.expectVisible('Login_Page|payRatesByLocationTable', function () {
      keyword.getText('Login_Page|payRatesByLocationTable', function (txt) {
        expect(txt).equal("Pay Rates By Location");
        done();
      });
    });
  });

  Given(/^user views the column headers for the columns in the table \(Left to Right: Location, Rate, Increase\/Decrease\)$/, function (done) {
    keyword.expectVisible('Login_Page|increaseDecreasePayRate', function () {
      keyword.getText('Login_Page|increaseDecreasePayRate', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^user has selected a job to view the details for now$/, function (done) {
    globalData.isApplicationAngular = true;
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
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

  Then(/^user views the top five \(5\) locations from the current month's data with the highest level\/quality of data including any user applied refinements\.$/, function (done) {
    keyword.expectVisible('Login_Page|jobRatesFirstRateLocation', function () {
      keyword.getText('Login_Page|jobRatesFirstRateLocation', function (txt) {
        console.log(txt);
        keyword.getText('Login_Page|jobRatesSecondRateLocation', function (txt1) {
          console.log(txt1);
          keyword.getText('Login_Page|jobRatesThirdRateLocation', function (txt2) {
            console.log(txt2);
            keyword.getText('Login_Page|jobRatesFourthRateLocation', function (txt3) {
              console.log(txt3);
              keyword.getText('Login_Page|jobRatesFifthRateLocation', function (txt4) {
                console.log(txt4);
                done();
              });
            });
          });
        });
      });
    });
  });

  Then(/^user views the locations sorted according to data quality best to worst Top to Bottom$/, function (done) {
    keyword.expectVisible('Login_Page|jobRatesFirstRateLocation', function () {
      keyword.getText('Login_Page|jobRatesFirstRateLocation', function (txt) {
        console.log(txt);
        keyword.getText('Login_Page|jobRatesSecondRateLocation', function (txt1) {
          console.log(txt1);
          keyword.getText('Login_Page|jobRatesThirdRateLocation', function (txt2) {
            console.log(txt2);
            keyword.getText('Login_Page|jobRatesFourthRateLocation', function (txt3) {
              console.log(txt3);
              keyword.getText('Login_Page|jobRatesFifthRateLocation', function (txt4) {
                console.log(txt4);
                done();
              });
            });
          });
        });
      });
    });
  });

  Given(/^user views the location title, current month's rate, and rate trajectory for each location displayed$/, function (done) {
    keyword.expectVisible('Login_Page|firstLocation', function () {
      keyword.getText('Login_Page|firstLocation', function (txt) {
        console.log(txt);
        keyword.getText('Login_Page|jobRatesSecondLocationRate', function (txt1) {
          console.log(txt1);
          keyword.getText('Login_Page|jobTrajectoryFirstLocationRate', function (txt2) {
            console.log(txt2);
            done();
          });
        });
      });
    });
  });

  Given(/^user has selected a job to view the details for by navigating to the dashboard page$/, function (done) {
    browser.navigate().back();
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|administrationFacilities', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.performClick('Login_Page|custoDialCleaning', function () {
                done();
                //});
              });
            });
          });
        });
      });
    });
  });
  Given(/^CB system does not have sufficient data to display any locations$/, function (done) {
    expect(element(By.xpath('//tr[2]/td[1]')).isPresent()).eventually.equal(false);
    done();
  });

  Then(/^user views no locations displayed in the graph$/, function (done) {
    expect(element(By.xpath('//tr[2]/td[1]')).isPresent()).eventually.equal(false);
    done();

  });

  Then(/^user views dashes in the graph in place of data$/, function (done) {
    keyword.expectVisible('Login_Page|jobRatesFirstRateLocation', function () {
      keyword.getText('Login_Page|jobRatesFirstLocation', function (txt) {
        console.log(txt);
        done();
      });
    });
  });
  Given(/^user has selected a job to view the details for again$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchBar', function () {
      //browser.sleep(10000);
      // keyword.performClick('Login_Page|keyWordSearchBar', function () {
      //     keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
      //         keyword.performClick('Login_Page|jobFamily', function () {
      //             keyword.performClick('Login_Page|hrId', function () {
      //                 keyword.performClick('Login_Page|searchButton', function () {
      keyword.expectVisible('Login_Page|refineJobSelectionInJobDetailsPage', function () {

        done();
      });
    });
  });


  Given(/^user has applied no data filters$/, function (done) {
    keyword.expectVisible('Login_Page|resetFilterDisabled', function () {
      // keyword.performClick('Login_Page|chooseLocationFilter',function(){
      //     keyword.performClick('Login_Page|chooseLocationLondon',function(){
      //         keyword.performClick('Login_Page|resetFilter',function(){
      //             done();
      //         })
      done();
    });

  });

  Given(/^CB system only has sufficient data to display less than 5 locations$/, function (done) {
    keyword.expectVisible('Login_Page|firstLocation', function () {
      keyword.expectVisible('Login_Page|secondLocation', function () {
        keyword.expectVisible('Login_Page|thirdLocation', function () {
          keyword.expectVisible('Login_Page|fourthLocation', function () {
            keyword.expectVisible('Login_Page|fifthLocation', function () {
              done();
            });
          });
        });
      });
    });
  });

  Then(/^user views the top available locations from the current month's data with the highest level\/quality of data\.$/, function (done) {
    keyword.expectVisible('Login_Page|firstLocation', function () {
      keyword.getText('Login_Page|firstLocation', function (txt) {
        console.log(txt);
        keyword.getText('Login_Page|secondLocation', function (txt1) {
          console.log(txt1);
          keyword.getText('Login_Page|thirdLocation', function (txt2) {
            console.log(txt2);
            keyword.getText('Login_Page|fourthLocation', function (txt3) {
              console.log(txt3);
              keyword.getText('Login_Page|fifthLocation', function (txt4) {
                console.log(txt4);
                done();
              });
            });
          });
        });
      });
    });
  });

  Given(/^user has selected a job to view the details for data available$/, function (done) {
    browser.navigate().back();
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
      //browser.sleep(10000);
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        //keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        keyword.performClick('Login_Page|jobFamily', function () {
          keyword.performClick('Login_Page|hrId', function () {
            keyword.performClick('Login_Page|searchButton', function () {
              keyword.performClick('Login_Page|secondSearchedItem', function () {
                done();
              });
            });
          });
        });
      });
    });
  });

  Given(/^user has applied one or more data filters$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationFilter', function () {
        keyword.performClick('Login_Page|chooseLocationLondon', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            done();
          });
        });
      });
    });
  });

  Then(/^user views the top available locations from the current month's data with the highest level\/quality of data including any user applied refinements\.$/, function (done) {
    keyword.expectVisible('Login_Page|firstLocation', function () {
      keyword.getText('Login_Page|firstLocation', function (txt) {
        console.log(txt);
        keyword.getText('Login_Page|secondLocation', function (txt1) {
          console.log(txt1);
          keyword.getText('Login_Page|thirdLocation', function (txt2) {
            console.log(txt2);
            keyword.getText('Login_Page|fourthLocation', function (txt3) {
              console.log(txt3);
              keyword.getText('Login_Page|fifthLocation', function (txt4) {
                console.log(txt4);
                done();
              });
            });
          });
        });
      });
    });
  });

  Then(/^testing step do nothing$/, function (done) {
    done();
  });
});
