var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user is viewing the additional search filters bar$/, function (done) {
    keyword.performClick('Login_Page|keyWordSearchNew', function () {
      keyword.expectVisible('Login_Page|jobFamily_new', function () {
        keyword.expectVisible('Login_Page|subFamily_New', function () {
          done();
        });
      });
    });
  });


  When(/^user clicks on the family filter$/, function (done) {
    keyword.performClick('Login_Page|jobFamily_new', function () {
      done();
    });
  });


  Then(/^system will display the family filter open$/, function (done) {
    expect(element(By.xpath("//*[@id='selectedFamilyButton']")).isDisplayed()).eventually.equal(true).then(function () {
      console.log("going to check the isenabled--2");
      done(); //ui-id-1 //tested with makemytrip site
    });
  });

  Then(/^user views the mercer job library families sorted in ascending \(a\-z\) sort order by title$/, function (done) {
    keyword.getText("Login_Page|first_JobFamily", function (text) {
      console.log(text);
      keyword.getText("Login_Page|second_JobFamily", function (text) {
        console.log(text);
        done();
      });
    });
  });

  Then(/^user views a list of mercer job library families available to select from$/, function (done) {
    expect(element(By.xpath("//*[@id='selectedFamilyButton']")).isEnabled()).eventually.equal(true).then(function () {
      console.log("going to check the isenabled--3");
      keyword.getText("Login_Page|first_JobFamily", function (text) {
        console.log(text);
        done();

      });
    });
  });

  Then(/^only families related to jobs data in the contractor benchmarking system are made available to select from$/, function (done) {
    done();  // Need clarification
  });

  Given(/^user is viewing the family filter open$/, function (done) {
    keyword.expectVisible('Login_Page|second_JobFamily', function () {
      done();
    });
  });

  Given(/^user has not previously selected a family in the family filter$/, function (done) {
    element(By.className(("mos-c-dropdown__container"))).getText().then(function (value) {
      if (value === '') {
        console.log("user has not made a selection in the family filter" + value);
        done();//return;
      } else {
        console.log("else part of user has not made a selection in the family filter");
        console.log(value);
        done();
      }
    });
  });

  When(/^user clicks on a de\-selected family within the family filter$/, function (done) {
    //keyword.performClick('Login_Page|jobFamily', function () {
    keyword.performClick('Login_Page|First_JobFamilyOption', function () {
      done();
    });
    // });

  });


  Then(/^system will display the family selected$/, function (done) {
    keyword.getText('Login_Page|jobFamily', function (txt) {
      expect(txt).contains("Distribution");
      done();
    });
  });

  Then(/^system will close the family filter$/, function (done) {
    keyword.performClick('Login_Page|jobFamily_new', function () {
      expect(element(By.xpath("(//div[@class='mos-c-dropdown__form-element pointer'])[2]")).isPresent()).eventually.equal(false);
      done();
    });
  });


  Given(/^user has previously selected a family in the family filter$/, function (done) {
    keyword.getText('Login_Page|jobFamily', function (txt) {
      expect(txt !== '');//.contains("Information Technology");
      done();
    });
  });


  When(/^user clicks on another de\-selected family within the family filter$/, function (done) {
    //keyword.performClick('Login_Page|jobFamily', function () {
    keyword.performClick('Login_Page|Second_JobFamilyOption', function () {
      done();
    });
    //});
  });


  Then(/^system will display the selected family selected$/, function (done) {
    keyword.getText('Login_Page|jobFamily', function (txt) {
      expect(txt).contains("Finance");
      done();
    });
  });


  Then(/^system will deselect any selections made in the sub\-family filter$/, function (done) {
    keyword.getText('Login_Page|jobFamily', function (txt) {
      expect(txt === 'Finance');
      done();
    });
  });


  Then(/^system will update the selections available in the Sub\-Family$/, function (done) {
    keyword.getText('Login_Page|jobFamily', function (txt) {
      expect(txt === 'Finance');
      done();
    });
  });

// Then(/^system will display the currently selected family within the additional search filters bar$/, function (done) {
//     element(By.className('famGrpTitle mos-u-hoverable')).getText().then(function (text) {
//         console.log(text);
//         expect(text).contains("DISTRIBUTION"); // id of the element, which after selecting human resource and clicking on search option, will show the heading as Human resource , that one
//         done();
//     });
//     });

  Then(/^system will display the currently selected family within the additional search filters bar$/, function (done) {
    element(By.className('famGrpTitle mos-u-hoverable')).getText().then(function (text) {
      console.log(text);
      keyword.getText('Login_Page|jobFamily', function (txt) {
        expect(text === txt);//.contains(txt); // id of the element, which after selecting human resource and clicking on search option, will show the heading as Human resource , that one
        done();
      });
    });
  });


  Then(/^system will save the current state of the family filter for utilization in the next search$/, function (done) {

    keyword.performClick('Login_Page|searchButton', function () {
      keyword.getText('Login_Page|jobFamily', function (txt) {
        //expect(txt).contains("Distribution");// since we are using it at many places
        console.log(txt);
        done();
      });//keyword-search-bar
    });
  });


  Then(/^user views the family filter close$/, function (done) {
    // expect(element(By.className('mos-c-dropdown__form-element')).isDisplayed()).eventually.equal(false).then(function () {
    console.log("going to check the isenabled--4"); // Need to check
    done();
  });


  Given(/^user opens the family filter$/, function (done) {
    keyword.performClick('Login_Page|jobFamily', function () {
      done();
    });
  });

  Then(/^system will display the previously selected family, deselected$/, function (done) {
    keyword.getText('Login_Page|jobFamily', function (txt) {
      expect(txt === 'Finance');
      done();
    });
  });


  Then(/^system will now close the family filter$/, function (done) {
    console.log("system is now close");
    done();
  });

  When(/^user has selected a family in the family filter$/, function (done) {
    keyword.performClick('Login_Page|jobFamily', function () {
      keyword.performClick('Login_Page|hrId', function () {
        done();
      });
    });
  });

  Then(/^user views the clear family filter feature$/, function (done) {
    keyword.expectVisible('Login_Page|clearFamilyFilter', function () {
      done();
    });
  });

  When(/^user has not selected a family in the family filter$/, function (done) {

    if (element(By.xpath("//mercer-icon[@alt='Clear Family Filter' and @icon='cancel']")).isPresent()) {
      keyword.performClick('Login_Page|clearFamilyFilter', function () {
        done();
      });
    }
    else {
      console.log("no sub family selected");
      done();
    }


  });


  Then(/^user will not see the clear family filter feature$/, function (done) {
    expect(element(By.xpath("//mercer-icon[@alt='Clear Family Filter' and @icon='cancel']")).isPresent()).eventually.equal(false).then(function () {
      done();
    });
  });


  Given(/^user is viewing the additional search filters bar \(keyword already provided\)$/, function (done) {
    keyword.expectVisible('Login_Page|keyWordSearchNew', function () {  //keyword-search-bar
      keyword.performClick('Login_Page|keyWordSearchNew', function () {
        keyword.expectVisible('Login_Page|jobFamily_new', function () {
          keyword.expectVisible('Login_Page|subFamily_New', function () {
            done();
          });
        });
      });
    });
  });

  Given(/^user is viewing the the family filter closed$/, function (done) {
    expect(element(By.xpath("(//div[@class='mos-c-dropdown__form-element pointer'])[2]")).isPresent()).eventually.equal(false).then(function () {
      done();
    });
  });


  When(/^user clicks the clear family filter feature$/, function (done) {
    keyword.performClick('Login_Page|clearFamilyFilter', function () {
      done();
    });
  });

  Then(/^user will see the family filter cleared$/, function (done) {
    keyword.getText('Login_Page|jobFamily_text', function (txt) {
      expect(txt === '');//.contains("Information Technology");
      console.log(txt);
      done();
    });
  });


  Given(/^user has provided text in the keyword search box that matches part or all of one or more Job Titles$/, function (done) {
    element(By.id("inputSearch")).clear();
    keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
      done();
    });
  });

  Given(/^user has optionally selected a family in the family filter$/, function (done) {
    keyword.performClick('Login_Page|jobFamily', function () {
      keyword.performClick('Login_Page|hrId', function () {
        done();
      });
    });
  });


  Given(/^user has has not selected a sub\-family in the sub\-family filter$/, function (done) {
    console.log("Not clicking on sub-family");
    done();
  });


  When(/^user initiates the search functionality$/, function (done) {
    keyword.performClick('Login_Page|searchButton', function () {  //keyword-search-bar
      done();
    });
  });


  Then(/^search functionality will search for job\(s\) whose titles match one or more words provided in the keyword search$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt).contains("Security");
      console.log(txt);
      done();
    });
  });

  Then(/^search functionality will search for job\(s\) whose family matches the family selected within the family filter$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt).contains("HR");
      console.log(txt);
      done();
    });
  });


  Then(/^search functionality will return the top\-N job\(s\) results$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt !== '');
      console.log(txt);
      done();
    });
  });


  Then(/^search will display the results in the Search Results Grid$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt).contains("Security");
      keyword.getText('Login_Page|searchedResult', function (txt) {
        expect(txt).contains("HR");
        console.log(txt);
        done();

      });
    });
  });


  Given(/^user has provided text in the keyword search box that matches none of any Job Titles$/, function (done) {
    keyword.setText('Login_Page|keyWordSearchBar', 'abc', function () {
      done();
    });
  });

  Then(/^search functionality will search for and return no results from the Contractor Benchmarking data$/, function (done) {
    keyword.getText('Login_Page|jobResult', function (txt) {
      expect(txt).contains("No Result Found");
      console.log(txt);
      done();
    });
  });


  Then(/^search will display the no search results message in the Search Results Grid$/, function (done) {
    keyword.getText('Login_Page|jobResult', function (txt) {
      expect(txt).contains("No Result Found");
      console.log(txt);
      done();
    });
  });


  When(/^user views the job search filter functionality$/, function (done) {
    expect(element(By.className("ng-tns-c5-1")).isEnabled()).eventually.equal(true).then(function () {
      // expect(element(By.id("keyword search filed id")).contains("keyword search")).then(function () {
      //     done();
      // });
      done();
    });
  });

  Then(/^user will see the clear family filter feature$/, function (done) {
    keyword.expectVisible('Login_Page|clearFamilyFilter', function () {
      done();
    });
  });

  Given(/^user has not selected a family in the family filter bar$/, function (done) {
    keyword.performClick('Login_Page|clearFamilyFilter', function () {
      keyword.performClick('Login_Page|clearFamilyFilter', function () {
      }); // This method requires 2 times clicking on clear button, as one is for keyword search clear and another for family filter clear, as both of them has got the same id
      done();
    });
  });
});
