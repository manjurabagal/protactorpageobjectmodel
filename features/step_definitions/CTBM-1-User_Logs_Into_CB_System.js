var {defineSupportCode} = require("cucumber");
loginPage = require('../../Pages/LoginPage');
homePage = require('../../Pages/HomePage');
defineSupportCode(function ({Given, When, Then}) {


  Given(/^user navigated to MSSO login page$/, function (done) {
    browser.get(globalData.appURL.QA);
    done();
  });

  Given(/^user doesn’t have cookies saved for MSSO$/, function (done) {
    browser.manage().deleteAllCookies().then(function () {
      done();
    });
  });


  When(/^user inputs correct credentials$/, function (done) { //When functionality need to check
    loginPage.login(globalData.users.QA.generalUser.email, function () {
      done();
      });
  });

  When(/^user initiates log in to the system$/, function (done) {
        done();

  });

  Then(/^the system will validate provided credentials as correct$/, function (done) {
    keyword.verifyAttributeByLoc(homePage.searchPage.keyWordSearchInput, "placeholder", "Search for a job by keywords (Help Desk, Remote, etc.)", function () {
        done();
      });
  });

  Then(/^dashboard page will be shown to user$/, function (done) {
    keyword.expectVisible(homePage.searchPage.keyWordSearchInput, function () {
      done();
    });

  });

  Then(/^user will be granted permissions to access contractor benchmarking system functionality$/, function (done) {
    keyword.expectVisible(homePage.searchPage.keyWordSearchInput, function () {
        done();
    });
  });


  Then(/^the system log the user into the contractor benchmarking system$/, function (done) {
    keyword.expectVisible(homePage.searchPage.keyWordSearchInput, function () {
        done();
    });
  });


  Then(/^the MSSO system will validate provided credentials as correct$/, function (done) {
    keyword.verifyAttributeByLoc(homePage.searchPage.keyWordSearchInput, "placeholder", "Search for a job by keywords (Help Desk, Remote, etc.)", function () {
        done();
      });
  });

  Given(/^user is authorized to access the contractor benchmarking system$/, function (done) {
    done();
  });


Then(/^the system authenticate user to the contractor benchmarking system$/, function (done) {
  keyword.expectVisible(homePage.searchPage.keyWordSearchInput, function () {
   done();
  });
});
});



