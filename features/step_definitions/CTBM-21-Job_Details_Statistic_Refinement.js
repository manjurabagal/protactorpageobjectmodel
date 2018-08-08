var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Given(/^user has not previously selected a location in the location filter option$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|applyButton', function () {
          keyword.performClick('Login_Page|resetFilter', function () { //here we are selecting and then resetting as otherwise it might possible that nothing is selected and we are trying to click on the reset button, which will be disable at that time
            done();
          });
        });
      });
    });
  });
  When(/^user views the location filter option$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      done();
    });
  });


  Then(/^user will view the text 'Choose One' in the filter option$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        done();
      });
    });
  });


  Given(/^user views job details page$/, function (done) {
    keyword.expectVisible('Login_Page|searchedResultPage', function () {
      keyword.getText('Login_Page|searchedResultPage', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Given(/^user has previously selected a location in the location filter option$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationLondon', function () {
        keyword.performClick('Login_Page|applyButton', function () {
          done();

        });
      });
    });
  });


  Then(/^user will view the location selected displayed in the location filter option$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  When(/^user clicks on the location filter$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      done();
    });
  });


  Then(/^user views a list of unique locations to select from$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.expectVisible('Login_Page|chooseLocationCambridge', function () {
        done();
      });
    });
  });


  Then(/^user views the locations sorted in ascending \(a\-z\) sort order by name$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        keyword.expectVisible('Login_Page|chooseLocationCambridge', function () {
          keyword.getText('Login_Page|chooseLocationCambridge', function (txt) {
            console.log(txt);
            done();
          });
        });
      });
    });
  });


  Then(/^only locations related to the job being viewed in that month's contractor benchmarking job data are made available to select from$/, function (done) {
    done();
  });


  Given(/^user has not previously selected an location in the filter$/, function (done) {
    //keyword.performClick('Login_Page|chooseLocationFilter', function () {
    //keyword.expectVisible('Login_Page|chooseLocationLondon', function () {
    //keyword.performClick('Login_Page|chooseLocationCambridge', function () {
    //keyword.performClick('Login_Page|applyButton', function () {
    keyword.performClick('Login_Page|resetFilter', function () { //here we are selecting and then resetting as otherwise it might possible that nothing is selected and we are trying to click on the reset button, which will be disable at that time
      done();
    });
  });
  //});
  //});
  //});
  //});


  When(/^user clicks on a de\-selected location within the filter$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|chooseLocationFilter', function () {
        keyword.performClick('Login_Page|secondLocationRefinementFilter', function () {
          keyword.performClick('Login_Page|applyButton', function () {
            done();
          });
        });
      });
    });
  });

  Then(/^system will display the location selected$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^system will save the current state of the location filter for utilization in the next application of the filter functionality$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        done();
      });
    });
  });


  Then(/^system will close the location filter$/, function (done) {
    expect(element(By.xpath("(//div[@class='mos-c-dropdown__form-element'])[3]")).isPresent()).eventually.equal(false);
    done();
  });


  Then(/^system will display the currently selected location within the filter$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        done();
      });
    })
  });


  Given(/^user is viewing the location filter open$/, function (done) {
    keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
        keyword.expectVisible('Login_Page|chooseLocationCambridge', function () {
          done();
        });
      });
    });
  });


  Given(/^user has previously selected a location in the filter$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      //keyword.performClick('Login_Page|chooseLocationFilter', function () {
      keyword.performClick('Login_Page|firstLocationRefinementFilter', function () {
        keyword.performClick('Login_Page|applyButton', function () {
          done();
        });
      });
      //});
    });
  });
  Then(/^system will display the selected location selected$/, function (done) {
    keyword.expectVisible('Login_Page|chooseLocationFilter', function () {
      keyword.getText('Login_Page|chooseLocationFilter', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

});
