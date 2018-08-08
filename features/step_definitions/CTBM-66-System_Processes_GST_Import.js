var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
var globalData = require('../../testdata/global.js');
var robot = require('robot-js');
var outputcsv = [];
defineSupportCode(function ({Given, Then, When}) {
  Given(/^admin has saved the 'GST' import file template to their local computer in a \.csv format$/, function (done) {

    keyword.readCSVByrow(globalData["GST_File"], 1, function (res) {
      console.log(JSON.stringify(res));
    });
  });
  //reading of csv data from csv file
  Given(/^User reads CSV format file$/, function (done) {

    keyword.readCSV(globalData["GST_File"], function (res) {

      outputcsv = res;
      done();
    });
  });

  Given(/^id is in the string format$/, function (done) {
//bug need to resolve

  });

  Given(/^admin views the "([^"]*)" column's data type is set to 'String' by "([^"]*)"$/, function (column, index, done) {
    var headers = outputcsv[0].split(",");
    if (headers[parseInt(index)] === column) {
      console.log(column + "  Column is found");
      done();
    }
  });
  //
  Given(/^admin views the "([^"]*)" column contain String data in "([^"]*)"$/, function (column, index, done) {
    var letterNumber = /^[0-9a-zA-Z]+$/
    for (var i = 1; i < outputcsv.length; i++) {
      var row = outputcsv[i].split(",");
      var cellvalue = row[parseInt(index)];
      if (cellvalue.match(letterNumber)) {
        expect(true).to.equals(false);
        break;
      }

    }
    done();
  });
  Given(/^admin views the "([^"]*)" column contains number data in "([^"]*)"$/, function (column, index, done) {
    var letterNumber = /^[0-9a-zA-Z]+$/
    for (var i = 1; i < outputcsv.length; i++) {
      var row = outputcsv[i].split(",");
      var cellvalue = row[parseInt(index)];
      if (Number(cellvalue) == NaN) {
        expect(true).to.equals(false);
        break;
      }

    }
    done();
  });
  Given(/^admin views the "([^"]*)" column cannot contains null data in "([^"]*)"$/, function (column, index, done) {
    var letterNumber = /^[0-9a-zA-Z]+$/
    for (var i = 1; i < outputcsv.length; i++) {
      var row = outputcsv[i].split(",");
      var cellvalue = row[parseInt(index)];
      if (!cellvalue && cellvalue == null) {
        expect(true).to.equals(false);
        break;
      }

    }
    done();
  });
  Given(/^admin has selected a 'GST' file type in the file type selection functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|gst', function () {
      keyword.performClick('Dashboard_Page|gst', function () {
        done();
      });
    });
  });
  Then(/^system creates a new record in the file upload history table$/, function (done) {
    keyword.performClick('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^system populates the record with the details of the file being uploaded \(File Name, File Type, Admin Name, Submitted Date\)$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_FileName', function () {
      keyword.expectVisible('Dashboard_Page|lbl_FileType', function () {
        keyword.expectVisible('Dashboard_Page|lbl_Status', function () {
          done();
        });
      });
    });
  });
  Then(/^the system updates the record with the current processing status to in\-progress$/, function (done) {
    keyword.expectVisible('Dashboard_Page|btn_ViewReport', function () {
      done();
    });
  });
  Then(/^the CB system executes the GST file validation process \(Sce 3\)$/, function (done) {
    keyword.expectVisible('Dashboard_Page|btn_ViewReport', function () {
      done();
    });
  });
  Given(/^CB system has executed the GST file validation process$/, function (done) {
    keyword.performClick('Dashboard_Page|btn_ViewReport', function () {
      done();
    });
  });
  When(/^CB system runs validations on the uploaded file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_ValidationChecklist', function () {
      done();
    });
  });
  Then(/^CB system records the outcome of the validation checking if the uploaded file is in a column delimited \(\.csv\) format$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_CSVFormat', function () {
      done();
    });
  });
  Given(/^User uploads "([^"]*)" file in "([^"]*)" in "([^"]*)"$/, function (testfile, locator, page, done) {
    keyword.expectVisible(page + "|" + locator, function () {
      keyword.performClick(page + "|" + locator, function () {
        keyword.uploadFile(globalData[testfile], function () {
          done();
        });
      });
    });
  });
  Given(/^CB system records the outcome of the validation checking if the column names in the uploaded file match the column names expected for the 'GST' type of file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_ColumnName', function () {
      done();
    });
  });
  Given(/^CB system records the outcome of the validation checking if the non\-nullable columns in the uploaded file don't contain null data$/, function (done) {
    //bug need to resolve
  });
  Given(/^CB system records the outcome of the validation checking if the column data types in the uploaded file match the column data types expected for the 'GST' type of file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_ColumnName', function () {
      done();
    })
  });
  Given(/^the CB system executes the GST file audit process \(Sce 4\)$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_MJCDataCreated', function () {
      done();
    });
  });
  Given(/^CB system has executed the GST file audit process$/, function (done) {
    keyword.performClick('Dashboard_Page|btn_Close', function () {
      done();
    });
  });
  When(/^all the validations run against the file in the GST file validation process passed without recording an error in the file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|viewReport', function () {
      done();
    });
  });
  Then(/^CB system updates the status of the uploaded file to 'Ready'$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_Ready', function () {
      done();
    });
  });
  Then(/^CB system records details of the successfully completed steps in the import log$/, function (done) {
    keyword.performClick('Dashboard_Page|btn_MakeLive', function () {
      done();
    });
  });
  When(/^one or more of the validations run against the file in the GST file validation process recorded an error with the file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|viewReport', function () {
      done();
    });
  });
  Then(/^CB system updates the status of the uploaded file to 'Failed'$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_Failed', function () {
      done();
    });
  });
  Then(/^CB system records details of the failed steps in the import log$/, function (done) {
    keyword.expectVisible('Dashboard_Page|fileUploadHistoryTable', function () {
      done();
    });
  });
  Then(/^CB system records the outcome of the validation checking if the number of columns in the uploaded file matches the number expected for the 'GST' type of file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_NumberOfColumns', function () {
      done();
    });
  });
  When(/^CB system runs audits on the uploaded file$/, function (done) {
    keyword.performClick('Dashboard_Page|viewReport', function () {
      done();
    });
  });
  Then(/^CB system records the number of unique Jobs records in the uploaded file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|lbl_UniqueRecords', function () {
      done();
    });
  });

});


