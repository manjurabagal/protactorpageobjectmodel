var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  When(/^user populates the keyword search bar with keyword search criteria$/, function (done) {
    keyword.setText('Login_Page|keyWordSearchNew', 'Security', function () {
      done();
    });
  });

  Then(/^user will see the keyword search bar populated with their typed\/pasted\/talked text$/, function (done) {
    keyword.getAttribute('Login_Page|keyWordSearchNew', 'value', function (txt) {
      console.log(txt);
      done();
    });
  });


  Then(/^user will view the additional search filters bar appear$/, function (done) {
    keyword.expectVisible('Login_Page|jobFamily', function () {
      keyword.expectVisible('Login_Page|subFamily', function () {
        done();
      });
    });
  });


  When(/^user modifies the previously provided keyword search bar text$/, function (done) {
    element(By.id("inputSearch")).clear();
    keyword.setText('Login_Page|keyWordSearchBar', 'Information', function () {
      done();
    });
  });


  Then(/^user will see the keyword search bar populated with their updated typed text$/, function (done) {
    keyword.getAttribute('Login_Page|keyWordSearchBar', 'value', function (txt) {
      expect(txt === 'Information');
      done();
    });
  });


  Given(/^user has not provided other filter criteria \(family\/Sub\-family\)$/, function (done) {
    keyword.performClick('Login_Page|jobFamily', function () {
      keyword.performClick('Login_Page|hrId', function () {
        keyword.performClick('Login_Page|clearFamilyFilter', function () { //to assure that no family filter is selected
          keyword.performClick('Login_Page|clearFamilyFilter', function () {
            done();
          });
        });
      });
    });
  });


  Given(/^user has provided keyword criteria$/, function (done) {
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        done();
      });
    });
  });

  When(/^user clicks the clear keyword search feature$/, function (done) {
    //keyword.performClick('Login_Page|clearFamilyFilter',function() {
    keyword.performClick('Login_Page|clearFamilyFilter', function () {
      done();

      //  });
    });
  });


  Then(/^user will see the keyword search bar cleared$/, function (done) {
    // keyword.getAttribute('Login_Page|keyWordSearchBar',"value",function(txt){
    //     console.log("The keyword search contains---" + txt);
    //         expect(txt===' ').then(function(){
    done();
    //         });
    //     });
  });


  Given(/^user has provided other filter criteria \(family\/Sub\-family\)$/, function (done) {
    keyword.performClick('Login_Page|jobFamily', function () {
      keyword.performClick('Login_Page|hrId', function () {
        done();
      });
    });
  });


  When(/^user has provided text in the keyword search bar$/, function (done) {
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        done();
      });
    });
  });


  Then(/^user views the clear keyword search feature$/, function (done) {
    keyword.expectVisible('Login_Page|clearFamilyFilter', function () {
      done();
    });
  });


  When(/^user has not provided text in the keyword search bar$/, function (done) {
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () { // writting and then deleting to double sure that no text is present. As otherwise cancel button clicking might fail due to unavailability of the button, in case no text present
        keyword.performClick('Login_Page|clearFamilyFilter', function () {
          done();
        });
      });
    });
  });


  Then(/^user does not view the clear keyword search feature$/, function (done) {
    keyword.expectNotPresent('Login_Page|clearFamilyFilter', function () {
      done();
    });
  });


  Given(/^user has not made any selections in the family filter$/, function (done) {
    keyword.getText('Login_Page|jobFamily_text', function (txt) {
      //expect(txt==='');
      console.log(txt);
      done();
    });
  });


  Given(/^user has not made any selections in the sub\-family filter$/, function (done) {
    keyword.getText('Login_Page|subFamilyHolder', function (txt) {
      console.log(txt);
      done();

    });
  });


  Then(/^The search functionality will search for job\(s\) whose titles match one or more words provided in the keyword search$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt).contains("Security");
      console.log(txt);
      done();
    });
  });


  Then(/^The search functionality will return the top\-N job\(s\) results$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt !== '');
      console.log(txt);
      done();
    });

  });


  Then(/^the search will display the results in the Search Results Grid$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt).contains("Security");
      keyword.getText('Login_Page|searchedResult', function (txt) {
        expect(txt).contains("HR");
        console.log(txt);
        done();
      });
    });
  });

  Given(/^user has provided text in the keyword search box that matches part or all of one or more Job Titles here$/, function (done) {
    keyword.performClick('Login_Page|clearFamilyFilter', function () {
      //keyword.performClick('Login_Page|clearFamilyFilter',function() {
      keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        done();
      });
    });
  });
  //});


  Then(/^the search will display the results in the Search Results Grid without family and sub\-family$/, function (done) {
    keyword.getText('Login_Page|searchedResult', function (txt) {
      expect(txt).contains("Security");
      keyword.getText('Login_Page|searchedResult', function (txt) {
        expect(txt).contains("DIS");
        console.log(txt);
        done();
      });
    });
  });


  Then(/^The search functionality will search for and return no results from the Contractor Benchmarking data$/, function (done) {
    keyword.getText('Login_Page|jobResults', function (txt) {
      expect(txt === 'No Result Found');
      done();
    });
  });


  Then(/^the search will display the no search results message in the Search Results Grid$/, function (done) {
    keyword.getText('Login_Page|jobResults', function (txt) {
      expect(txt === 'No Result Found');
      done();
    });
  });


  Given(/^user has entered keyword text in the search bar$/, function (done) {
    element(By.id('inputSearch')).clear();
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () {
        done();
      });
    })
  });


  When(/^user views the job keyword search functionality$/, function (done) {
    keyword.expectEnabled('Login_Page|searchButton', function () {
      done();
    });
  });


  Then(/^user will see the clear keyword search feature$/, function (done) {
    keyword.expectVisible('Login_Page|clearFamilyFilter', function () {
      keyword.performClick('Login_Page|clearFamilyFilter', function () {
        done();
      });
    });
  });


  Given(/^user has not entered keyword text in the search bar$/, function (done) {
    keyword.performClick('Login_Page|keyWordSearchBar', function () {
      keyword.setText('Login_Page|keyWordSearchBar', 'Security', function () { // writting and then deleting to double sure that no text is present. As otherwise cancel button clicking might fail due to unavailability of the button, in case no text present
        keyword.performClick('Login_Page|clearFamilyFilter', function () {
          done();
        });
      });
    });
  });


  When(/^user views the job keyword search functionality button$/, function (done) {
    keyword.expectVisible('Login_Page|searchButton', function () {
      done();
    });
  });


  Then(/^user will not see the clear keyword search feature$/, function (done) {
    expect(element(By.xpath("//mercer-icon[@alt='Clear Family Filter' and @icon='cancel']")).isPresent()).eventually.equal(false).then(function () {
      done();
    });

  });
});
