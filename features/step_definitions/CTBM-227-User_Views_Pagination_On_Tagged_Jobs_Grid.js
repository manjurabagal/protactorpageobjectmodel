var {defineSupportCode} = require("cucumber");
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^user login inside and viewing dashboard page$/, function (done) {
    browser.get(globalData.appURL[globalData.TestingEnvironment]);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'gaurav.saikia@mercer.com', function () {
          keyword.performClick('Login_Page|enterToAccountNow', function () {
            keyword.expectVisible("Login_Page|keyWordSearchBar", function () {
              keyword.performClick("Login_Page|keyWordSearchBar", function () {
                done();
              });
            });
          });
        });
      });
    });
  });

  When(/^user views the tagged jobs grid$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.selectJobSubFamily(globalData.testData.jobDetails.jobSubFamilyName, function () {
        homePage.searchPage.search(function () {
          searchResultsPage.saveJobs(2, function () {
            searchResultsPage.headerPage.navigateToHome(function () {
              done();
            });
          });
        });

      });
    });
  });


  Then(/^user views the pagination controls at the bottom of the grid$/, function (done) {
    keyword.expectVisible('Login_Page|pagination', function () {
      done();
    });
  });

  Then(/^user views a page hyperlink for each set of up to 40 records in the grid$/, function (done) {
    keyword.expectVisible('Login_Page|paginationHyperlinkForTheRecords', function () {
      done();
    });
  });

  Then(/^user views a hyperlink control to navigate to the previous page of the grid$/, function (done) {
    keyword.expectVisible('Login_Page|paginationPrevious', function () {
      done();
    });
  });

  Then(/^user views a hyperlink control to navigate to the next page of the grid$/, function (done) {
    keyword.expectVisible('Login_Page|paginationNext', function () {
      done();
    });
  });

  Given(/^the tagged jobs grid has less than 40 records\/results$/, function (done) {
    keyword.expectVisible('Login_Page|tagJob', function () {
      keyword.performClick('Login_Page|firstTagToUntag', function () {
        keyword.expectVisible('Login_Page|secondTagToUntag', function () {
          keyword.performClick('Login_Page|secondTagToUntag', function () {
            keyword.expectVisible('Login_Page|thirTagToUntag', function () {
              keyword.performClick('Login_Page|thirTagToUntag', function () {
                done();
              });
            });
          });
        });
      });
    });
  });

  Then(/^user will not view the pagination controls at the bottom of the search results grid$/, function (done) {
    expect(element(By.xpath("//mercer-icon[@alt='Previous']")).isDisplayed()).eventually.equal(false);
    done();
  });

  Given(/^user is viewing the dashboard page again$/, function (done) {
    keyword.expectVisible(homePage.searchPage.keyWordSearchInput, function () {
      done();
    });
  });

  Given(/^pagination controls are visible with the grid$/, function (done) {
    keyword.performClick('Login_Page|dashboardLink', function () {
      keyword.expectVisible('Login_Page|keyWordSearchNew', function () {
        keyword.performClick('Login_Page|keyWordSearchNew', function () {
          keyword.performClick('Login_Page|jobFamily', function () {
            keyword.performClick('Login_Page|hrIdNew', function () {
              keyword.performClick('Login_Page|searchButton', function () {
                keyword.expectVisible('Login_Page|untagJob', function () {
                  keyword.performClick('Login_Page|untagJob', function () {
                    keyword.expectVisible('Login_Page|firstTagg', function () {
                      keyword.performClick('Login_Page|firstTagg', function () {
                        keyword.expectVisible('Login_Page|secondTagg', function () {
                          keyword.performClick('Login_Page|secondTagg', function () {
                            keyword.expectVisible('Login_Page|thirdTagg', function () {
                              keyword.performClick('Login_Page|thirdTagg', function () {
                                keyword.performClick('Login_Page|untagJob', function () {
                                  keyword.performClick('Login_Page|untagJob', function () {
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
          });
        });
      });
    });
  });

  When(/^user clicks a hyperlink control to a specific page of the search results$/, function (done) {
    keyword.performClick('Login_Page|dashboardLink', function () {
      keyword.expectVisible('Login_Page|paginationNext', function () {
        keyword.performClick('Login_Page|paginationNext', function () {
          done();
        });
      });
    });
  });

  Then(/^user will see the grid updated to display the records associated with that page$/, function (done) {
    keyword.expectVisible('Login_Page|paginationHyperlinkForTheRecords', function () {
      keyword.getText('Login_Page|paginationHyperlinkForTheRecords', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Given(/^user is not viewing the first page of the results$/, function (done) {
    keyword.expectVisible('Login_Page|paginationPrevious', function () {
      //keyword.performClick('Login_Page|paginationPrevious', function () {
      done();
      //});
    });
  });

  When(/^user clicks the previous page hyperlink control$/, function (done) {
    //keyword.expectVisible('Login_Page|paginationPrevious', function () {
    keyword.performClick('Login_Page|paginationPrevious', function () {
      done();
    });
  });
  //});

  Then(/^user will see the grid updated to display the records associated with the page previous to the current page displayed in sequence$/, function (done) {
    keyword.expectVisible('Login_Page|totalJobsTaggedinDashBoard', function () {
      keyword.getText('Login_Page|totalJobsTaggedinDashBoard', function (txt) {//paginationHyperlinkForTheRecords
        console.log(txt);
        done();
      });
    });
  });

  Given(/^user is viewing the first page of the results$/, function (done) {
    keyword.expectVisible('Login_Page|paginationNo', function () {
      keyword.getText('Login_Page|paginationNo', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  When(/^user views the pagination control$/, function (done) {
    keyword.expectVisible('Login_Page|paginationPrevious', function () {
      done();
    });
  });

  Then(/^user will not see the 'previous' icon$/, function (done) {
    expect(element(By.xpath("//mercer-icon[@alt='Previous']")).isDisplayed()).eventually.equal(false);
    done();
  });

  Given(/^user is not viewing the last page of the results$/, function (done) {
    keyword.expectVisible('Login_Page|pagination', function () {
      keyword.getText('Login_Page|pagination', function (txt) {
        console.log(txt);
        done();
      });
    });
  });
  When(/^user clicks the next page hyperlink control$/, function (done) {
    keyword.expectVisible('Login_Page|paginationNext', function () {
      keyword.performClick('Login_Page|paginationNext', function () {
        done();
      });
    });
  });

  Then(/^user will see the grid updated to display the records associated with the page after the current page displayed in sequence$/, function (done) {
    keyword.expectVisible('Login_Page|paginationHyperlinkForTheRecords', function () {
      keyword.getText('Login_Page|paginationHyperlinkForTheRecords', function (txt) {
        console.log(txt);
        done();
      });
    })
  });

  Given(/^user is viewing the last page of the results$/, function (done) {
    keyword.expectVisible('Login_Page|pagination', function () {
      keyword.getText('Login_Page|pagination', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  Then(/^user will not see the 'next' icon$/, function (done) {
    expect(element(By.xpath("//mercer-icon[@alt='Next'")).isDisplayed()).eventually.equal(false);
    done();
  });

  Given(/^pagination controls are visible with the grid again$/, function (done) {
    keyword.expectVisible('Login_Page|pagination', function () {
      done();
    });
  });
});

//Make the Administration,engineering and sales all jobs tagged, and if test case failed then again re do the tasks
