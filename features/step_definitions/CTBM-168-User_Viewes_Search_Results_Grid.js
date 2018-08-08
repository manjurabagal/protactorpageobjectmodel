var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {
  When(/^user views the search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Search_grid', function () {
      keyword.scrollToelement('Dashboard_Page|Search_grid', function () {
        done();
      });
    });
  });
  Then(/^user views the results grouped first by family for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Network_Engineering', function () {
      done();
    });

  });
  Then(/^the sort order that the families are displayed in will follow the Aggregated Sort Order provided by the Mercer Job Catalog system$/, function (done) {
    keyword.performClick('Dashboard_Page|Job_Family_Dropdown', function () {
      keyword.performClick('Dashboard_Page|creative_design', function () {
        done();
      });
    });
  });
  Then(/^user views the search results grouped within each family by sub\-family$/, function (done) {
    keyword.performClick('Dashboard_Page|Sub_Family_Dropdown', function () {
      keyword.performClick('Dashboard_Page|SelectAll_Checkbox', function () {
        keyword.performClick('Dashboard_Page|Search_Button', function () {
          done();
        });
      });
    });
  });
  Then(/^the sort order that the sub\-families are displayed in within each family will follow the Aggregated Sort Order provided by the Mercer Job Catalog system for this scenario$/, function (done) {
    keyword.performClick('Dashboard_Page|Job_Family_Dropdown', function () {
      keyword.performClick('Dashboard_Page|Sub_Family_Dropdown', function () {
        keyword.performClick('Dashboard_Page|SelectAll_Checkbox', function () {
          keyword.performClick('Dashboard_Page|Search_Button', function () {
            done();
          });
        });
      });
    });
  });
  Then(/^the sort order that the Jobs are displayed in within each sub\-family will follow the Aggregated Sort Order provided by the Mercer Job Catalog system for this scenario$/, function (done) {
    keyword.performClick('Dashboard_Page|Job_Family_Dropdown', function () {
      keyword.performClick('Dashboard_Page|Sub_Family_Dropdown', function () {
        keyword.performClick('Dashboard_Page|SelectAll_Checkbox', function () {
          keyword.performClick('Dashboard_Page|Search_Button', function () {
            done();
          });
        });
      });
    });
  });
  When(/^user views an individual job record within the search results grid$/, function (done) {
    keyword.performClick('Dashboard_Page|search_clear', function () {
      keyword.performClick('Dashboard_Page|Job_Family_Dropdown', function () {
        keyword.performClick('Dashboard_Page|Job_fam_1', function () {
          keyword.performClick('Dashboard_Page|Sub_Family_Dropdown', function () {
            keyword.performClick('Dashboard_Page|SelectAll_Checkbox', function () {
              keyword.performClick('Dashboard_Page|Search_Button', function () {
                done();
              });
            });
          });
        });
      });
    });

  });
  Then(/^user views the title of the job identified by that record for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Job_page', function () {
      done();
    });
  });
  Then(/^user views the pay rate \(amount\/period\) for that job for the current month for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|current_month_payrate', function () {
      done();
    });
  });
  Then(/^user views the pay rate \(amount\/period\) for that job for the previous month for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|current_month_payrate', function () {
      done();
    });
  });
  Then(/^user views the pay rates displayed in the currency that the data is collected in for this scenario$/, function (done) {
    keyword.performclick('Dashboard_Page|GlobalSearch_Input', function () {
      keyword.performclick('Dashboard_Page|Job_Family_Dropdown', function () {
        keyword.performclick('Dashboard_Page|Distribution_Dropdown', function () {
          keyword.performclick('Dashboard_Page|Search_click', function () {
            keyword.expectVisible('Dashboard_Page|Payrate', function () {
              done();
            });
          });
        });
      });
    })
  });
  Then(/^user views an icon indicating the trajectory \(increasing\/decreasing\) of the rate for that job for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Tragectory_green', function () {
      done();
    });
  });
  Then(/^user views the 'tag job' icon in it's last saved state for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Tragectory_green', function () {
      done();
    });
  });
  Given(/^user is using a computer with standard 'mouse' input device for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Tragectory_green', function () {
      done();
    });
  });
  When(/^user hovers their cursor over an individual job record within the search results grid for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  Then(/^user views the job description of that job in a 'hover\-over' pop\-up for this scenario$/, function (done) {
    keyword.mouseOver('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  Given(/^user is hovering over a specific job record for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  Given(/^user is viewing the 'hover\-over' pop\-up for that specific job record for this scenario$/, function (done) {
    keyword.mouseOver('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  When(/^user moves their focus away from the individual job record within the search results grid for this scenario$/, function (done) {
    keyword.mouseDown('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  Then(/^user views 'hover\-over' pop\-up disappear for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  When(/^user clicks on a individual job for this scenario$/, function (done) {
    keyword.performClick('Dashboard_Page|mouse_hover', function () {
      done();
    });
  });
  Then(/^user views the job details page appear for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Location', function () {
      keyword.expectVisible('Dashboard_Page|contract_length', function () {
        done();
      });
    });
  });
  Then(/^user views the Job Details page populated with information about the job record they clicked on for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|contract_length', function () {
      done();
    });
  });

});





