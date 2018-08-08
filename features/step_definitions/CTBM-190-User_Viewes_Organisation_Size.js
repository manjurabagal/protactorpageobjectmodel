var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, Then, When}) {
  Given(/^user has not previously selected an organization size in the organization size filter option$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Location', function () {
      keyword.expectVisible('Dashboard_Page|contract_length', function () {
        keyword.expectVisible('Dashboard_Page|choose_one_text', function () {
        done();
      });
      });
    });
  });
  Then(/^user will view the text 'Choose One' in the filter option in OrganizationFilter/, function (done) {
    keyword.performClick('Dashboard_Page|Organization_size_dropdown', function () {
    keyword.expectVisible('Dashboard_Page|choose_one_text_Filter_Organization', function () {
      done();
    });
    });
  });
  Given(/^user has selected an organization size in the organization size filter option$/, function (done) {
    keyword.performClick('Dashboard_Page|Organization_size_dropdown', function () {
      keyword.expectVisible('Dashboard_Page|choose_one_text_Filter_Organization', function () {
        keyword.expectVisible('Dashboard_Page|Large_Organization_size_filterOption', function () {
          keyword.performClick('Dashboard_Page|Large_Organization_size_filterOption', function () {
            browser.sleep(2000);
           done();
          });
        });
      });
    });
  });
  Then(/^user will view the organization size selected displayed in the organization size filter option$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Large_Organization_size', function () {
      done();
    });
  });
  When(/^user clicks on the organization size filter$/, function (done) {
    keyword.performClick('Dashboard_Page|Organization_size_dropdown', function () {
      keyword.expectVisible('Dashboard_Page|small_dropdown', function () {
        done();
      });
    });
  });
  Given(/^user views the job details page for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Location', function () {
      done();
    });
  });
  Then(/^system will display the organization size filter open$/, function (done) {
    keyword.performClick('Dashboard_Page|Organization_size_dropdown', function () {
     done();
    });
  });
  Then(/^user views the following list of static options to select from: Small, Medium, Large$/, function (done) {
    keyword.expectVisible('Dashboard_Page|choose_one_text_Filter_Organization', function () {
      keyword.expectVisible('Dashboard_Page|Large_Organization_size_filterOption', function () {
        keyword.expectVisible('Dashboard_Page|Small_Organization_size_filterOption', function () {
          keyword.expectVisible('Dashboard_Page|Medium_Organization_size_filterOption', function () {
           done();
          });
        });
      });
    });
  });
  Given(/^user is viewing the organization size filter open$/, function (done) {
    keyword.performClick('Dashboard_Page|Organization_size', function () {
      done();
    });
  });
  Given(/^user has not previously selected an organization size in the filter$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Organization_size', function () {
      done();
    });
  });
  Given(/^user has not previously selected an organization size in the filter$/, function (done) {
    keyword.expectVisible('Dashboard_Page|large', function () {
      done();
    });
  });
  When(/^user clicks on a de\-selected organization size within the filter$/, function (done) {
    keyword.performClick('Dashboard_Page|reset_all', function () {
      done();
    });
  });
  Then(/^system will display the organization size de-selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|choose_one_text', function () {
      done();
    });
  });
  Then(/^system will save the current state of the organization size filter for utilization in the next application of the filter functionality$/, function (done) {
    keyword.performClick('Dashboard_Page|large', function () {
      keyword.expectVisible('Dashboard_Page|Organization_size', function () {
        done();
      });
    });
  });
  Given(/^user has previously selected a organization size in the filter$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Organization_size', function () {
      done();
    });
  });
  Then(/^system will display the selected organization size selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Organization_size', function () {
      done();
    });
  });
  Then(/^system will deselect any previous selection made in the filter$/, function (done) {
    keyword.performClick('Dashboard_Page|reset_all', function () {
      done();
    });
  });
});

