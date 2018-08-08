var {defineSupportCode} = require("cucumber");
loginPage = require('../../Pages/LoginPage');
landingPage = require('../../Pages/LandingPage');
dashboardPage = require('../../Pages/HomePage');

defineSupportCode(function ({Given, Then, When}) {

  Then(/^user will be logged out of the MP system$/, function (done) {
    dashboardPage.headerPage.logout(function () {
        done();
    });
  });

    Then(/^user views Change name on Landing Page$/, function (done) {
      keyword.verifyText(landingPage.logoTitle,globalData.testData.logoTitle,function () {
          done();
      })
    });

    Then(/^user views Change the name in the System from CP to MP$/, function (done) {
        keyword.verifyText(landingPage.logoTitle,globalData.testData.logoTitle,function () {
            done();
        })
    });



    Then(/^user is on MP Landing page$/, function (done) {
        browser.get(globalData.appURL.QA);
        done();
    });

  Then(/^user is logged into the MP system$/, function (done) {
    loginPage.login(globalData.users.QA.generalUser.email, function () {
      done();
    });
  });
});
