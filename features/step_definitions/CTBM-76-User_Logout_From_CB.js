var {defineSupportCode} = require("cucumber");
loginPage = require('../../Pages/LoginPage');
dashboardPage = require('../../Pages/HomePage');
defineSupportCode(function ({Given, Then, When}) {

  Then(/^user will be logged out of the CB system$/, function (done) {
    dashboardPage.headerPage.logout(function () {
        done();
    });
  });

    Then(/^user will be directed to view the CB Landing Page$/, function (done) {
      keyword.expectVisible('Login_Page|loginBtn', function () {
        done();
      });
    });

  Then(/^user is logged into the CB system$/, function (done) {
    loginPage.login(globalData.users.QA.generalUser.email, function () {
      done();
    });
  });
});
