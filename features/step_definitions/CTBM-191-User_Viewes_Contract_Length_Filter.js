var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, Then, When}) {
  Given(/^user has not previously selected a Contract length in the Contract length filter option$/, function (done) {
    keyword.expectVisible('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  When(/^user views the Contract length filter option$/, function (done) {
    keyword.expectVisible('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  Given(/^user has previously selected a Contract length in the Contract length filter option$/, function (done) {
    keyword.performClick('Dashboard_Page|contract_length', function () {
      keyword.performClick('Dashboard_Page|per_day', function () {
        done();
      });
    });
  });
  Then(/^user will view the Contract length selected displayed in the Contract length filter option$/, function (done) {
    keyword.expectVisible('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  When(/^user clicks on the Contract length filter$/, function (done) {
    keyword.performClick('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  Then(/^system will display the Contract length filter open$/, function (done) {
    keyword.expectVisible('Dashboard_Page|per_day', function () {
      done();
    });
  });
  Then(/^user views a list of unique Contract lengths to select from$/, function (done) {
    keyword.expectVisible('Dashboard_Page|per_day', function () {
      done();
    });
  });
  Then(/^user views the Contract lengths sorted in ascending \(a\-z\) sort order by name$/, function (done) {
    keyword.expectVisible('Dashboard_Page|per_day', function () {
      done();
    });
  });
  Then(/^only Contract lengths related to the job being viewed in that month's contractor benchmarking job data are made available to select from$/, function (done) {
    done();
  });
  Given(/^user is viewing the Contract length filter open$/, function (done) {
    keyword.performClick('Dashboard_Page|contract_length', function () {
      keyword.expectVisible('Dashboard_Page|per_day', function () {
        done();
      });
    });
  });
  Given(/^user has not previously selected a Contract length in the filter$/, function (done) {
    keyword.expectVisible('Dashboard_Page|per_day', function () {
      done();
    });
  });
  When(/^user clicks on a de\-selected Contract length within the filter$/, function (done) {
    keyword.performClick('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  Then(/^system will display the Contract length selected$/, function (done) {
    keyword.performClick('Dashboard_Page|per_day', function () {
      done();
    });

  });
  Then(/^system will save the current state of the Contract length filter for utilization in the next application of the filter functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|choose_one_text', function () {
      done();
    });
  });
  Then(/^system will close the Contract length filter$/, function (done) {
    keyword.performClick('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  Then(/^system will display the currently selected Contract length within the filter$/, function (done) {
    keyword.expectVisible('Dashboard_Page|contract_length', function () {
      done();
    });
  });
  Given(/^user has previously selected a Contract length in the filter$/, function (done) {
    keyword.performClick('Dashboard_Page|contract_length', function () {
      keyword.performClick('Dashboard_Page|per_day', function () {
        done();
      });
    });
  });
  Then(/^system will display the selected Contract length selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|contract_length', function () {
      done();
    });
  });
});
