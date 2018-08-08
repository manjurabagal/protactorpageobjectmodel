/**
 * Created by yugandhar-gorrepati on 2/27/2018.
 */

var loginBtn = Xpath('//*[text()="Sign In"]');
var contractorPayLbl = Css('span.logotitle');
var emailInput = Id('ContentPlaceHolder1_TextBox1');
var nextBtn = Id('ContentPlaceHolder1_PassiveSignInButton');

function login(emailId, callback) {
  browser.get(globalData.appURL.QA);
  loginBtn.isPresent().then(function (logBtnPresent) {
    if (logBtnPresent) {
      keyword.performClick(loginBtn, function () {
        browser.sleep(4000);
        emailInput.isPresent().then(function (result) {
          if (result) {
            keyword.expectVisible(emailInput, function () {
              keyword.performClick(emailInput, function () {
                keyword.setText(emailInput, emailId, function () {
                  keyword.performClick(nextBtn, function () {
                    callback();
                  });
                });
              });
            });
          }
          else {
            return callback();
          }
        });
      });
    }
    else {
      return callback();
    }
  });


}



module.exports = {
  login: login,
  loginBtn: loginBtn
};
