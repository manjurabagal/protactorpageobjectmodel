var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  When(/^user views the sub\-family filter$/, function (done) {
    keyword.expectVisible('Login_Page|subFamily_New', function () {
      done();
    })
  });

  Then(/^System displays the filter control disabled$/, function (done) {
    keyword.performClick('Login_Page|subFamily_New', function () {
      expect(element(By.xpath("(//label[@id='namelabel'])[1]")).isPresent()).eventually.equal(false).then(function () {
        done();
      });
    });
  });


  Given(/^user has executed a job search with keyword search only$/, function (done) {
    //browser.get(globalData.appURL.QA);
    keyword.performClick('Login_Page|dashboardLink', function () {
      keyword.performClick('Login_Page|keyWordSearchBar', function () {
        keyword.setText('Login_Page|keyWordSearchBar', 'Welding', function () {
          done();
        });
      });
    });
  });

  Then(/^system will not open the sub\-family filter$/, function (done) {
    expect(element(By.className('mos-c-dropdown__form-element')).isPresent()).eventually.equal(false).then(function () {
      done();
    });

    // keyword.expectNotPresent('Login_Page|filterDropDown',function(){
    //     done();
    // })
  });


  When(/^user clicks the sub\-family filter$/, function (done) {
    keyword.performClick('Login_Page|subFamily', function () {
      done();
    });
  });

  When(/^user clicks on the sub\-family filter$/, function (done) {
    keyword.performClick('Login_Page|subFamily', function () {
      done();
    });
  });

  Then(/^system will display the sub\-family filter open$/, function (done) {
    keyword.expectVisible('Login_Page|filterDropDown', function () {
      done();
    })
  });

  Then(/^user views a list of mercer job library sub\-families available to select from$/, function (done) {
    keyword.expectVisible('Login_Page|firstSubFamilyOption_1', function () {
      //keyword.performClick('Login_Page|firstSubFamilyOption_1',function(){
      done();
    })
  });


  Then(/^user views a list of mercer job library sub\-families related to the family selected in the family filter$/, function (done) {
    keyword.verifyText('Login_Page|firstSubFamilyOption_1', "Application Developement", function () {
      done();
    });
  });

  Then(/^user views the mercer job library sub\-families sorted in ascending \(a\-z\) sort order by title$/, function (done) {
    keyword.verifyText('Login_Page|firstSubFamilyOption_1', "Application Developement", function () {
      keyword.verifyText('Login_Page|firstSubFamilyOption_2', "Network Engineering", function () {
        done();
      });

    });
  });

  Then(/^only sub\-families related to jobs data in the contractor benchmarking system are made available to select from$/, function (done) {
    keyword.expectEnabled('Login_Page|firstSubFamilyOption_1', function () {
      keyword.expectEnabled('Login_Page|firstSubFamilyOption_2', function () {
        done();
      });
    });
  });


  Given(/^user is viewing the sub\-family filter open$/, function (done) {
    keyword.expectVisible('Login_Page|firstSubFamilyOption_window_or_selectAll', function () {
      done();
    });
  });

  When(/^user clicks on a de\-selected sub\-family within the sub\-family filter$/, function (done) {
    keyword.performClick('Login_Page|firstSubFamilyOption_2', function () {
      done();
    });
  });


  Then(/^system will display the sub\-family selected\.$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', " Network Engineering ", function () {
      done();
    });
  });


  Given(/^user has previously selected a sub\-family within the sub\-family filter$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', " Network Engineering ", function () {
      done();
    });
  });


  When(/^user clicks on a selected sub\-family within the family filter$/, function (done) {
    keyword.performClick('Login_Page|firstSubFamilyOption_2', function () {
      done();
    });
  });


  Then(/^system will display the sub\-family de\-selected\.$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', "  ", function () {
      done();
    });
  });


  Given(/^user is now viewing the additional search filters bar \(keyword already provided\)$/, function (done) {
    keyword.expectEnabled('Login_Page|jobFamily', function () {
      keyword.expectEnabled('Login_Page|subFamily', function () {
        done();
      });
    });
  });

  When(/^user clicks the select all sub\-family filter feature$/, function (done) {
    keyword.performClick('Login_Page|firstSubFamilyOption_window_or_selectAll', function () {
      done();
    });
  });


  Then(/^system will display all sub\-families displayed within the sub\-family filter selected$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', " Network Engineering ", function () {
      keyword.verifyText('Login_Page|subFamily', " Application Development ", function () {
        keyword.verifyText('Login_Page|subFamily', " Security ", function () {
          done();
        });
      });
    });
  });


  When(/^user clicks the de\-select all sub\-family filter feature$/, function (done) {
    keyword.performClick('Login_Page|firstSubFamilyOption_window_or_selectAll', function () {
      done();
    });
  });


  Then(/^system will display all sub\-families displayed within the sub\-family filter de\-selected$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', "  ", function () {
      done();
    });
  });


  Then(/^user will see the sub\-family filter cleared$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', "  ", function () {
      done();
    });
  });

  Given(/^user has previously added\/modified the selections within the sub\-family filter$/, function (done) {
    keyword.performClick('Login_Page|firstSubFamilyOption_1', function () {
      done();
    });
  });


  When(/^user clicks out of the sub\-family filter drop\-down$/, function (done) {
    keyword.performClick('Login_Page|searchButton', function () {
      done();
    });
  });


  Then(/^system will save the current state of the sub\-family filter for utilization in the next search$/, function (done) {
    keyword.getText('Login_Page|subFamily', function () {
      done();
    });
  });


  Then(/^system will close the sub\-family filter$/, function (done) {
    expect(element(By.xpath('//*[text()="Select All?"]')).isPresent()).eventually.equal(false).then(function () {
      done();
    });
  });

  Then(/^system will display the currently selected sub\-families within the additional search filters bar$/, function (done) {
    keyword.getText('Login_Page|subFamily', function () {
      done();
    });
  });


  Given(/^user has updated the family filter from a previous selection \(family cleared or new family selected\)$/, function (done) {
    keyword.performClick('Login_Page|jobFamily', function () {
      keyword.performClick('Login_Page|First_JobFamilyOption', function () {
        done();
      });
    });
  });

  Then(/^user will view the sub\-family filter updated to display the correct sub\-families associated with the selected family$/, function (done) {
    keyword.getText('Login_Page|dropDownFamilyFilter', function () {
      done();
    })
  });


  Then(/^user will see the sub\-family filter cleared of any previous selections$/, function (done) {
    keyword.verifyText('Login_Page|subFamily', "  ", function () {
      done();
    });
  });


  Given(/^user has optionally selected one or more sub\-families in the sub\-family filter$/, function (done) {
    keyword.performClick('Login_Page|subFamily', function () {
      keyword.performClick('Login_Page|firstSubFamilyOption_window_or_selectAll', function () {
        done();
      });
    });
  });
  Then(/^search functionality will search for job\(s\) whose sub\-family matches one of the sub\-families selected within the sub\-family filter$/, function (done) {
    keyword.getText('Login_Page|subFamilyGroupTitle', function (txt) {
      expect(txt).contains("APPLICATION DEVELOPMENT");
      console.log(txt);
      done();
    })
  });
});
