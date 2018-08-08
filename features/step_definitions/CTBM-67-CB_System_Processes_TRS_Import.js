var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var globalData = require('../../testdata/global.js');
var robot = require('robot-js');
var outputcsv = [];
defineSupportCode(function ({Given, Then, When}) {
  Given(/^admin has selected a 'TRS' file type in the file type selection functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|trs', function () {
      keyword.performClick('Dashboard_Page|trs', function () {
        done();
      });
    });
  });
  Given(/^the CB system executes the TRS file validation process$/, function (done) {
    keyword.expectVisible('Dashboard_Page|fileUploadHistoryTable', function () {
      done();
    });
  });
  Given(/^CB system has executed the TRS file validation process$/, function (done) {
    keyword.performClick('Dashboard_Page|viewReport', function () {
      done();
    });
  });
  Given(/^CB system records the outcome of the validation checking if the column names in the uploaded file match the column names expected for the 'TRS' type of file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_ColumnName', function () {
      done();
    });
  });
  Given(/^CB system records the outcome of the validation checking if the column data types in the uploaded file match the column data types expected for the 'TRS' type of file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_ColumnDataType', function () {
      done();
    });
  });
  Given(/^the CB system executes the TRS file audit process$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_ColumnDataType', function () {
      done();
    });
  });
  When(/^none of the validations run against the file in the TRS file validation process recorded an error with the file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|viewReport', function () {
      done();
    });
  });
  Then(/^the CB system enables the file upload functionality$/, function (done) {
    keyword.isEnabled('Dashboard_Page|browse', function () {
      done();
    });
  });
});
