var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  When(/^user clicks the link in the invitation e\-mail$/, function (done) {
    keyword.click("Login_Page|first_searchedemail", function () {
      keyword.click("Login_Page|Link_inmail", function () {
        done();

      });
    });
  });

  Then(/^user will view their default web browser open$/, function (done) {
    browser.wait(element(by.id('login--username-input')).isDisplayed, 5000).then(function () {
      done();
    });
  });

  Then(/^user will view the contractor benchmarking landing page\.$/, function (done) {

    keyword.expectVisible("Login_Page|Link_inmail", function () {
      done();
    });

    // element(By.id('id of the CB heading in the page')).getText().then(function (text) {
    //     console.log(text);
    //     expect(text).contains("welcome to CB");
    //     done();
    // });
  });


  Given(/^user receives a invitation e\-mail to access the contractor benchmarking system$/, function (done) {
    //browser.get(globalData.webMailURL);
// browser.get("https://apac1mail.mmc.com/OWA/#path=/mail");
// keyword.setText('Login_Page|')
    console.log("getting link");

    // keyword.setText('Login_Page|inputUsernameof_mercer_mail', 'abc@testYKmfw2.com', function () {
    //     keyword.setText('Login_Page|inputPassword', 'Welcome1!', function () {
    //         keyword.click('Login_Page|email_loginbutton', function () {
    //             browser.wait(element(by.id('home-page-ofmail')).isDisplayed, 5000).then(function () {
    //                 keyword.setText('Login_Page|email_searchfield', 'invitation!', function () { //searching for the email
    //                     keyword.click('Login_Page|email_searchbutton', function () {
    done();
  });
  //});
  //                 });
  //             });
  //         });
  //     });
  // });

  Given(/^user has a link to the contractor benchmarking landing page$/, function (done) {
    browser.get('http://usdf23v0218.mrshmc.com:5014/').then(function () {
      done();
    });
  });


  When(/^user clicks the link or enters the link into their web browser's address bar$/, function (done) {
    browser.wait(element(by.id('login--username-input')).isDisplayed, 5000).then(function () {
      done();
    })
  });

  Given(/^user login into CB system with new login$/, function (done) {
    //browser.get(globalData.appURL[globalData.TestingEnvironment]);
    browser.get(globalData.appURL.QA);
    keyword.performClick('Login_Page|loginButtonMSSO', function () {
      keyword.expectVisible('Login_Page|userNameMSSO', function () {
        keyword.setText('Login_Page|userNameMSSO', 'user3.gaurav,saikia@gisqa.mercer.com', function () { //narasimhudu.manthri@mercer.com
          keyword.performClick('Login_Page|enterToAccountNow', function () {
            keyword.expectVisible('Login_Page|newLogin', function () {
              keyword.setText('Login_page|newLogin', 'user3.gaurav,saikia@gisqa.mercer.com', function () {
                keyword.setText('Login_Page|newPassword', '123456', function () {
                  keyword.performClick('Login_Page|enterButton', function () {
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
