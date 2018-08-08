var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^admin has accessed the admin dashboard page url$/, function (done) {
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      browser.sleep(data.veryShortWait);
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.performClick('Login_Page|userNameMSSO', function () {
          browser.sleep(data.veryShortWait);
          keyword.setText('Login_Page|userNameMSSO', data.users.QA.generalUser.username, function () {
            keyword.performClick('Login_Page|enterToAccountNow', function () {
              keyword.performClick('Dashboard_Page|Profile_dropdown', function () {
                keyword.performClick('Dashboard_Page|CB_admin_dashborad', function () {
                  done();
                });
              });
            });
          });
        });
      });
    });
  });
  Given(/^admin has successfully authenticated into the MSSO$/, function (done) {
    done();
  });
});


