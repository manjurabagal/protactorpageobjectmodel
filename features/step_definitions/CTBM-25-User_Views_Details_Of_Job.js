var {defineSupportCode} = require("cucumber");
var jobDetailsPage = require('../../Pages/JobDetailsPage');
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');

defineSupportCode(function ({Given, When, Then}) {


  Given(/^user has selected a job to view the details for$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        searchResultsPage.clickOnJobRecord(0, function () {
          done();
        })
      })
    });
  });

  When(/^user views job details page for a specific job$/, function (done) {
    keyword.expectVisible(jobDetailsPage.jobDescTxt, function () {
      done();
    });
  });

  Then(/^user views the family associated with that job$/, function (done) {
    keyword.expectVisible(jobDetailsPage.jobFamilyTxt, function () {
      keyword.verifyTextContains(jobDetailsPage.jobFamilyTxt, globalData.testData.jobDetails.jobFamilyName, function () {
        done();
      });
    });
  });


  Then(/^user views the sub\-family associated with that job$/, function (done) {
    keyword.expectVisible(jobDetailsPage.jobFamilyTxt, function () {
      keyword.verifyTextContains(jobDetailsPage.jobFamilyTxt, globalData.testData.jobDetails.jobSubFamilyName, function () {
      done();
    });
  });
  });

  Then(/^user views the title associated with that job$/, function (done) {
    keyword.expectVisible(jobDetailsPage.jobTitle, function () {
      done();
    });
  });


  Then(/^user views the job description associated with that job$/, function (done) {
    keyword.expectVisible(jobDetailsPage.jobDescTxt, function () {
      done();
    });
  });


  Then(/^user views the pay rate \(amount\/period\) for that job for the current month$/, function (done) {
    keyword.verifyTextContains(jobDetailsPage.payRateCurrentMonth, globalData.testData.jobDetails.jobCurrency, function () {
      keyword.verifyText(jobDetailsPage.ratePerHourTxt, 'PER HOUR', function () {
        done();
      });
    });
  });


  Then(/^user views the pay rate \(amount\/period\) for that job for the previous month$/, function (done) {
    keyword.verifyTextContains(jobDetailsPage.payRatePreviousMonth, globalData.testData.jobDetails.jobCurrency, function () {
      done();
    });
  });


  Then(/^user views the pay rates displayed in the currency that the data is collected in$/, function (done) {
    keyword.verifyTextContains(jobDetailsPage.payRateCurrentMonth, globalData.testData.jobDetails.jobCurrency, function () {
      done();
    });

  });


  Then(/^user views an icon indicating the trajectory \(increasing\/decreasing\) of the rate for that job$/, function (done) {
    keyword.expectVisible(jobDetailsPage.trajectoryIcon, function () {
      done();
    });
  });

  Then(/^user views the 'tag job' icon in it's last saved state\.$/, function (done) {
    keyword.verifyText(jobDetailsPage.saveJobBtn, 'Save Job', function () {
      done();
    });
  });

  Given(/^user views the job details page for a specific job$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        searchResultsPage.clickOnJobRecord(0, function () {
          done();
        })
      })
    });
  });


  Given(/^CB system has sufficient data to display the pay rate for the job given the refinements applied$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrency', function () {
      done();
    });
  });


  When(/^user is viewing the details of a job record$/, function (done) {
    keyword.expectVisible('Login_Page|searchedDescription', function () {
      done();
    });
  });


  Then(/^user views the pay rate \(amount\/period\) for that job for the current month for the data collected for that job$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      done();
    });
  });


  Then(/^user views the pay rate \(amount\/period\) for that job for the previous month for the data collected for that job$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      done();
    });
  });


  Given(/^CB system has insufficient data to display the pay rate for the job given the refinement applied$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
              keyword.performClick('Login_Page|chooseContractlengthHourly', function () {
                keyword.performClick('Login_Page|applyButton', function () {
                  keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
                    keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
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
    });
  });


  Given(/^job being viewed has sufficient data to display the job with no refinements applied$/, function (done) {
    keyword.getText('Login_Page|searchedItemTitleName', function (txt) {
      console.log(txt);
      keyword.expectVisible('Login_Page|trajectoryGreen', function () {
        keyword.getText('Login_Page|searchedItemFamilyName', function (txt) {
          var index = txt.indexOf("/");
          console.log(txt.substr(0, index));
          expect(txt === "Human Resources");
          done();

        });
      });
    });
  });


  Given(/^user has applied a refinement to the job$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
              keyword.performClick('Login_Page|chooseContractlengthHourly', function () {
                keyword.performClick('Login_Page|applyButton', function () {
                  keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
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
  });


  Then(/^CB system clears the applied refinement$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      done();
    });
  });


  Given(/^user has applied two \(2\) refinements to the job$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            keyword.performClick('Login_Page|applyButton', function () {
              done();
            });
          });
        });
      });
    });
  });

// Given(/^CB system has insuff icient data to display the pay rate for the job given the two refinements applied$/, function (done) {
//     keyword.getText('Login_Page|insufficientDateMessage', function (txt) {
//         console.log(txt);
//             done();
//         });
//     });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the current month for the data collected for the job with no refinements applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      done();
    });
  });

  Then(/^user views the blended pay rate \(amount\/period\) for the job for the previous month for the data collected for the job with no refinements applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      done();
    });
  });


  Given(/^CB system has insufficient data to display the pay rate for the job given the two refinements applied$/, function (done) {
    //keyword.performClick('Login_Page|applyButton', function () {
    keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
      keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
        console.log(txt);
        done();
      });
      //});
    });
  });

  Given(/^one of the applied refinements is the 'Location' refinement$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^the 'Location' refinement applied to the job by itself has sufficient data to display for the job$/, function (done) {
    keyword.expectVisible('Login_Page|graphOrSummary', function () {
      done();
    });
  });


  Given(/^CB system was not able to display data using the 'Location' refinement alone \(Scenario 4\)$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|chooseLocationFilter', function () {
        keyword.performClick('Login_Page|chooseLocationLondon', function () {
          //keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
          expect(element(By.xpath("//p[@class='messagesection']")).isPresent()).eventually.equal(false);
          //console.log(txt);
          done();
        });
      });
    });
    //});
  });


  Given(/^one of the applied refinements is not the 'Location' refinement$/, function (done) {
    keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
      keyword.performClick('Login_Page|chooseContractlengthHourly', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            done();
          });
        });
      });
    });
  });


  Given(/^sign on the site$/, function (done) {
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.setText('Login_Page|userNameMSSO', "gaurav.saikia@mercer.com", function () {
        done();
      });
    });
  });


  Then(/^CB system clears the applied refinement that is not the 'Location' refinement \(i\.e\. 'Location' refinement remains applied by itself\)$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|chooseLocationFilter', function () {
        keyword.performClick('Login_Page|chooseLocationLondon', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            done();
          });
        });
      });
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the current month for the data collected for the job with the 'Location' refinement applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      done();
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the previous month for the data collected for the job with the 'Location' refinement applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      done();
    });
  });


  Then(/^CB system clears the applied refinements$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      done();
    });
  });


  Then(/^CB system applies the contract length refinement alone$/, function (done) {
    keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
      keyword.performClick('Login_Page|chooseContractlengthDaily', function () {
        keyword.performClick('Login_Page|applyButton', function () {
          done();
        });
      });
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the current month for the data collected for the job with the contract length refinement applied$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      done();
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the previous month for the data collected for the job with the contract length refinement applied$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      done();
    });
  });
////*[@class='highcharts-graph highcharts-zone-graph-2 ']

  Given(/^the organization size refinement when applied alone produces more data than when the contract length refinement is applied alone\.$/, function (done) {
    keyword.expectVisible('Login_Page|graphOrSummary', function () {
      done();
    });
  });


  Then(/^CB system applies the organization size refinement alone$/, function (done) {
    keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
      keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
        keyword.performClick('Login_Page|applyButton', function () {
          done();
        })
      })
    })
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the current month for the data collected for the job with the organization size refinement applied$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      done();
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the previous month for the data collected for the job with the organization size refinement applied$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      done();
    });
  });

  Then(/^user views the message 'Due to the limited data for one or more of your refinements, the results have been altered to include only Organization Size'$/, function (done) {
    keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
      keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^CB system was not able to display data using the other refinement alone \(Scenario 5\)$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
        keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
              keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
                console.log(txt);
                done();
              });
            });
          });
        });
      });
    });
  });

  Given(/^neither of the refinements applied to the job by itself has sufficient data to display for the job$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            keyword.performClick('Login_Page|applyButton', function () {
              keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
                keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
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

  Given(/^user has applied three \(3\) refinements to the job$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationCambridge', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
              keyword.performClick('Login_Page|chooseContractlengthHourly', function () {
                keyword.performClick('Login_Page|applyButton', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });


  Given(/^CB system has insufficient data to display the pay rate for the job given the three refinements applied$/, function (done) {
    keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
      keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^the refinement combination \(Organization Size \+ Location\) when applied produces more data than when the refinement combination \(Contract Length \+ Location\) is applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|graphOrSummary', function () {
      done();
    });
  });


  Then(/^CB system applies the \(Organization Size \+ Location\) refinement combination$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|chooseOrganizationFilter', function () {
          keyword.performClick('Login_Page|chooseOrganizationSmall', function () {
            keyword.performClick('Login_Page|applyButton', function () {
              done();
            });
          });
        });
      });
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the current month for the data collected for the job with the identified refinements applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|payRateCurrentMonth', function () {
      done();
    });
  });


  Then(/^user views the blended pay rate \(amount\/period\) for the job for the previous month for the data collected for the job with the identified refinements applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|payRatePreviousMonth', function () {
      done();
    });
  });


  Then(/^user views the message 'Due to the limited data for one or more of your refinements, the results have been altered to include only Location and Organization Size'$/, function (done) {
    keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
      console.log(txt);
      done();
    });
  });


  Given(/^the refinement combination \(Contract Length \+ Location\) when applied produces more data than when the refinement combination \(Organization Size \+ Location\) is applied\.$/, function (done) {
    keyword.expectVisible('Login_Page|graphOrSummary', function () {
      done();
    });
  });


  Then(/^CB system applies the \(Contract Length \+ Location\) refinement combination$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationCambridge', function () {
        keyword.performClick('Login_Page|chooseContractlengthFilter', function () {
          keyword.performClick('Login_Page|chooseContractlengthHourly', function () {
            keyword.performClick('Login_Page|applyButton', function () {
              done();
            });
          });
        });
      });
    });
  });


  Then(/^user views the message 'Due to the limited data for one or more of your refinements, the results have been altered to include only Location and Contract Length'$/, function (done) {
    keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
      console.log(txt);
      done();
    });
  });


  Given(/^user login inside$/, function (done) {
    browser.get(globalData.appURL[globalData.TestingEnvironment]);
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
  //     });
  // });


  Given(/^CB system was not able to display data using either of the refinement combinations listed in \(scenario 7\) above$/, function (done) {
    keyword.expectVisible('Login_Page|insufficientDataMessage', function () {
      keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^CB system clears the applied refinements that are not the 'Location' refinement \(i\.e\. 'Location' refinement remains applied by itself\)$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|chooseLocationFilter', function () {
        keyword.performClick('Login_Page|chooseLocationLondon', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            done();
          });
        })
      });
    });
  });


  Given(/^CB system was not able to display data using the 'Location' refinement alone \(Scenario 8\)$/, function (done) {
    keyword.performClick('Login_Page|resetFilter', function () {
      keyword.performClick('Login_Page|chooseLocationFilter', function () {
        keyword.performClick('Login_Page|chooseLocationLondon', function () {
          //keyword.getText('Login_Page|insufficientDataMessage', function (txt) {
          //expect(element(By.xpath("//p[@class='messagesection']")).isPresent()).eventually.equal(false);
          //console.log(txt);
          done();
        });
      });
    })
  });
});
