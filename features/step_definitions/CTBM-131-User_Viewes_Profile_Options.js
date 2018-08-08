var {defineSupportCode} = require("cucumber");
var global_url = require('../../testData/global');
var homePage = require('../../Pages/HomePage');
var searchResultPage = require('../../Pages/SearchResultsPage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
var headerPage = require('../../Pages/HeaderPage');
var searchPage = require('../../Pages/SearchPage');
var loginPage = require('../../Pages/LoginPage');
var viewProfilePage = require('../../Pages/ViewProfilePage');
defineSupportCode(function ({Given, Then, When}) {
  When(/^the user views any page in the contractor benchmarking system$/, function (done) {
    keyword.expectVisible(homePage.headerPage.profileIconLnk, function () {
      done();
    });
  });
  Then(/^the user will view the user profile icon\.$/, function (done) {
    homePage.searchPage.selectJobFamily(globalData.testData.jobDetails.jobFamilyName, function () {
      homePage.searchPage.selectJobSubFamily(globalData.testData.jobDetails.jobSubFamilyName, function () {
        homePage.searchPage.search(function () {
          keyword.expectVisible(searchResultPage.headerPage.profileIconLnk, function () {
            searchResultPage.clickOnJobRecord(0, function () {
              keyword.expectVisible(jobDetailsPage.headerPage.profileIconLnk, function () {
                done();
              });
            });
          });
        });

      });

    });

  });

  When(/^user clicks on the user profile icon$/, function (done) {
    headerPage.clickOnProfile(function () {
      done();
    });
  });
  Then(/^user views the user profile drop\-down appear$/, function (done) {
    keyword.verifyText(headerPage.adminDashboardLnk, 'Admin Dashboard', function () {
      keyword.verifyText(headerPage.viewProfileLnk, 'View Profile', function () {
        headerPage.clickOnProfile(function () {
          done();
        });
      });
    });
  });
  Then(/^user will view their name$/, function (done) {

    keyword.expectVisible(headerPage.nameLabel, function () {
      done();

    });

  });
  Given(/^user will view a link to open the mercer account center profile page$/, function (done) {
    keyword.verifyText(headerPage.viewProfileLnk, 'View Profile', function () {
      done();
    });
  });
  Given(/^user will view a link to log out of the contractor benchmarking system$/, function (done) {
    keyword.verifyText(headerPage.logoutBtn, 'Logout', function () {
      headerPage.clickOnProfile(function () {
        done();
      });
    });
  });
  When(/^user clicks outside of the user profile drop\-down$/, function (done) {
    keyword.performClick(searchPage.keyWordSearchInput, function () {
      done();
    });
  });
  Then(/^user will view the user profile drop\-down close$/, function (done) {
    keyword.expectInvisible(headerPage.logoutBtn, function () {
      done();
    });
  });
  When(/^user clicks the link to view the mercer account center profile page \(View Profile\)$/, function (done) {
    headerPage.clickOnProfile(function () {
      headerPage.navigateToViewProfile(function () {
        done();
      });
    });
  });
  Given(/^user will view the mercer account center profile page for their MSSO account$/, function (done) {
    keyword.getAllWindowHandles(function (handles) {
      keyword.switchToWindow(handles[1], function () {
        keyword.verifyText(viewProfilePage.yourName, 'Your Profile', function () {
          browser.close();
          keyword.switchToWindow(handles[0], function () {
            done();
          });
        });
      });
    });
  });
  When(/^user clicks the link to log out of the contractor benchmarking system \(Logout\)$/, function (done) {
    headerPage.clickOnProfile(function () {
      headerPage.logout(function () {
        done();
      });
    });
  });
  Given(/^user will view the contractor benchmarking landing page$/, function (done) {
    keyword.expectVisible(loginPage.loginBtn, function () {
      done();
    });

  });

  Then(/^user will view a new browser window open$/, function (done) {
    keyword.getAllWindowHandles(function (handles) {
      expect(handles.length).greaterThan(1);
      done();
    });

  });


});
