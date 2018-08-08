var {defineSupportCode} = require("cucumber");
var globalData = require('../../testdata/global.js');
var data = require('../../testData/global.js');

defineSupportCode(function ({Given, Then, When}) {
  Given(/^admin is authorized to access the admin dashboard page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Profile_dropdown', function () {
      keyword.performClick('Dashboard_Page|Profile_dropdown', function () {
        keyword.performClick('Dashboard_Page|CB_admin_dashborad', function () {
          done();
        });
      });
    });
  });
  When(/^admin views the admin dashboard page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|trs', function () {
      keyword.expectVisible('Dashboard_Page|gst', function () {
        done()
      });
    });
  });
  Then(/^admin views the import section$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^admin views the file browse initiation functionality disabled by default$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^admin views the file upload functionality disabled by default$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Given(/^admin is viewing the admin dashboard page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|trs', function () {
      done();
    });
  });
  Then(/^admin views the text 'What type of file do you want to import\?' associated with the section$/, function (done) {
    keyword.expectVisible('Dashboard_Page|What_type_of_file_import', function () {
      done();
    });
  });
  Then(/^admin views the option to select from one of two file types: GST, TRS$/, function (done) {
    keyword.expectVisible('Dashboard_Page|trs', function () {
      done();
    });
  });
  Given(/^admin is viewing the import section on the admin dashboard page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|gst', function () {
      keyword.expectVisible('Dashboard_Page|browse', function () {
        done();
      });
    });
  });
  When(/^admin has not made a selection in the file type selection control$/, function (done) {
    keyword.expectVisible('Dashboard_Page|gst', function () {
      keyword.expectVisible('Dashboard_Page|browse', function () {
        done();
      });
    });
  });
  Then(/^CB system will show no file type selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^the file browse initiation functionality will appear disabled$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Given(/^file type selection does not currently show a file type selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|gst', function () {
      done();
    });
  });
  When(/^admin selects a file type to upload$/, function (done) {
    keyword.performClick('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^CB system will show that file type selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^the file browse initiation functionality will appear enabled$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Given(/^file type selection currently shows a file type selected$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^admin views functionality to initiate the operating system's file browsing functionality$/, function (done) {
    keyword.performClick('Dashboard_Page|browse', function () {
      done();
    });
  });
  Given(/^file browse initiation functionality is enabled$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  When(/^admin selects the file browse initiation functionality$/, function (done) {
    keyword.performClick('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^admin views functionality to initiate a file upload$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Given(/^admin is viewing the operating system's file browsing functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Given(/^admin has selected a file to upload$/, function (done) {
    keyword.performClick('Dashboard_Page|upload', function () {
      done();
    });
  });
  When(/^admin affirms to upload the file in the operating system's file browsing functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^admin views the operating system's file browsing functionality close$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^admin will view the file details \(name\) next to the file browse initiation functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    })
  })
  Then(/^admin will view the file upload functionality enabled$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  When(/^admin cancels the upload in the operating system's file browsing functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^admin will not view any file details \(name\) next to the file browse initiation functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|gst', function () {
      done();
    });
  });
  Then(/^admin will view the file upload functionality disabled$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Given(/^admin has selected a file type in the file type selection functionality$/, function (done) {
    keyword.performClick('Dashboard_Page|gst', function () {
      done();
    });
  });
  Given(/^admin has selected a file using the browse capability$/, function (done) {
    keyword.performClick('Dashboard_Page|browse', function () {
      done();
    });
  });
  Given(/^the file upload functionality is enabled$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  When(/^admin initiates the file upload functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^admin views the file processing indicator displayed while file is being uploaded$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^the CB system disables the file browse initiation functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^the CB system disables the file upload functionality$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^system uploads the selected file from the selected location into the CB system for processing$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^the system ceases to display the file processing indicator$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Given(/^admin has initiated a file upload$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  When(/^CB system uploads the file successfully$/, function (done) {
    keyword.performClick('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^CB system records the file uploaded successfully$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^uploaded file will be readied for validation and auditing$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^CB system clears the users file type selection$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  Then(/^CB system clears the users file browse selection$/, function (done) {
    keyword.expectVisible('Dashboard_Page|browse', function () {
      done();
    });
  });
  When(/^CB system fails to upload the file$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^CB system records details of the failure of the file upload$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^CB system records the final status of the uploaded file as 'Failed'$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
  Then(/^CB system halts the import process$/, function (done) {
    keyword.expectVisible('Dashboard_Page|upload', function () {
      done();
    });
  });
});
