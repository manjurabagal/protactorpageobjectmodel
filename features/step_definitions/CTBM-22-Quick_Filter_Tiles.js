var {defineSupportCode} = require("cucumber");
var homePage = require('../../Pages/HomePage');
var searchResultsPage = require('../../Pages/SearchResultsPage');
var searchPage = require('../../Pages/SearchPage');

defineSupportCode(function ({Given, When, Then}) {

  Given(/^user has executed a job search$/, function (done) {
    homePage.searchPage.enterSearchKey(globalData.testData.jobDetails.jobSearchKeyword, function () {
      homePage.searchPage.search(function () {
        done();
      })
    })
  });
  Given(/^user has executed a job search with job family$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        done();
      })
    })
  });


  Given(/^executed job search has search results to display$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      done();
    });
  });


  Given(/^executed job search includes the use of the family filter \(family selected\)$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      element.all(searchResultsPage.jobTitleLnkTxt).each(function (element, index) {
        keyword.verifyTextContains(element, globalData.testData.jobDetails.jobFamilyName, function () {
          done();
        });
      });
    });
  });


  When(/^user is viewing the search results of a job search$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      done();
    })
  });


  Then(/^user will view sub\-family quick filter tiles related to the jobs displayed with the search results$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobSubFamilyHeaderTxt, function () {
      done();
    });
  });


  Then(/^quick filter tiles will display the names of the sub\-families of data included in the search results$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      element.all(searchResultsPage.jobSubFamilyHeaderTxtAll).each(function (jobSubFamilyTitle, index) {
        keyword.getText(jobSubFamilyTitle, function (jobSubFamilyTitleTxt) {
          expect(globalData.testData.jobDetails.jobSubFamilyList).to.be.an('array').that.includes(jobSubFamilyTitleTxt);
          done();
          // };


        });
      })

    });
  });


  Then(/^quick filter tiles will display the sub\-families one per tile$/, function (done) {
    done();
  });

  Then(/^quick filter tiles will display sorted alphabetically by sub\-family title, ascending \(a\-z\) left\-to\-right$/, function (done) {
    done();
    //});
  });

  Given(/^user is viewing job search results$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.search(function () {
        browser.sleep(2000);
        done();
      })
    })
  });

  When(/^user clicks on a sub\-family quick filter tile$/, function (done) {
    homePage.searchPage.selectJobSubFamily(globalData.testData.jobDetails.jobSubFamilyName, function () {
      homePage.searchPage.saveJobSubFamily(function () {
        browser.sleep(2000);
        homePage.searchPage.search(function () {
          done();
        });
      });
    });
  });

  Then(/^system will display search results related to the sub\-family represented by that sub\-family quick filter tile selected$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      element.all(searchResultsPage.jobSubFamilyHeaderTxtAll).each(function (jobSubFamilyTitle, index) {
        keyword.expectVisible(jobSubFamilyTitle, function () {
          done();
        });
      });
    });
  });


  Then(/^system will display the applied sub\-family quick filter selected$/, function (done) {
    keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
      element.all(searchResultsPage.jobSubFamilyHeaderTxtAll).each(function (jobSubFamilyTitle, index) {
        keyword.verifyTextContains(jobSubFamilyTitle, globalData.testData.jobDetails.jobSubFamilyName, function () {
          done();
        });
      });
    });
  });


  Given(/^a sub\-family quick filter tile is currently selected$/, function (done) {
    homePage.searchPage.selectJobSubFamily(globalData.testData.jobDetails.jobSubFamilyName, function () {
      homePage.searchPage.saveJobSubFamily(function () {
        browser.sleep(2000);
        homePage.searchPage.search(function () {
          browser.sleep(2000);
          done();
        });
      });
    });
  });

  When(/^user clicks the selected sub\-family quick filter tile$/, function (done) {
    searchPage.removeJobSubFamily(function () {
      browser.sleep(3000);
      done();
    });
  });


  Then(/^system will display the clicked sub\-family quick filter deselected$/, function (done) {
    keyword.verifyText(searchPage.noOfSelSubfamilies, '0', function () {
      done();
    });
  });

  Then(/^system will display search results related to the currently executed search \+ applied quick filter tiles$/, function (done) {
    keyword.verifyText(searchResultsPage.jobFamilyTitleTxt, function () {
      keyword.expectVisible(searchResultsPage.jobRecordLnk, function () {
        element.all(searchResultsPage.jobSubFamilyHeaderTxtAll).each(function (jobSubFamilyTitle, index) {
          keyword.getText(jobSubFamilyTitle, function (jobSubFamilyTitleTxt) {
            expect(globalData.testData.jobDetails.jobSubFamilyList).to.be.an('array').that.includes(jobSubFamilyTitleTxt);
            done();


          })
        });
      })

    });
  });

  When(/^user has not made a selection in the family filter$/, function (done) {
    element(By.xpath((data.users.QA.searchOptions.selectedFamilyButton))).getText().then(function (value) {
      if (value === '') {
        done();
      } else {
        return false;
        done();
      }

    });
  });
});
