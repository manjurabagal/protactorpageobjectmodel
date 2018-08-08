var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');
defineSupportCode(function ({Given, When, Then}) {

  Then(/^admin views the file upload history table$/, function (done) {
    keyword.expectVisible('Login_Page|fileUploadHistoryTable', function () {
      done();
    });
  });
  Then(/^admin views the primary title \('File Upload History'\) associated with the table$/, function (done) {
    keyword.expectVisible('Login_Page|fileUploadHistoryTableHeading', function () {
      keyword.getText('Login_Page|fileUploadHistoryTableHeading', function (txt) {
        expect(txt === 'File Upload History');
        done();
      });
    });
  });

  Then(/^user views the column headers for the columns in the table \(Left to Right: File Name, File Type, Admin Name, Submitted Date, Status, Action\)$/, function (done) {
    keyword.expectVisible('Login_Page|fileName', function () {
      keyword.expectVisible('Login_Page|fileType', function () {
        keyword.expectVisible('Login_Page|adminName', function () {
          keyword.expectVisible('Login_Page|submitteddDate', function () {
            keyword.expectVisible('Login_Page|status', function () {
              //keyword.expectVisible('Login_Page|action', function () {
              done();
            });
          });
          //});
        });
      });
    });
  });

  Then(/^user views the most recent (\d+) file upload records$/, function (arg1, done) {
    keyword.expectVisible('Login_Page|paginationInfoForFileUploadList', function () {
      keyword.getText('Login_Page|paginationInfoForFileUploadList', function (txt) {
        console.log("The list of items is " + txt);
        done();
      });
    });
  });

  Then(/^user views the records sorted according to the submitted date, newest to oldest \(top to bottom\)$/, function (done) {
    keyword.expectVisible('Login_Page|firstSubmittedForFileUploadList', function () {
      keyword.getText('Login_Page|firstSubmittedForFileUploadList', function (txt) {
        keyword.getText('Login_Page|secondSubmittedForFileUploadList', function (txt1) {
          keyword.getText('Login_Page|thirdSubmittedForFileUploadList', function (txt2) {
            console.log("first item---" + txt + " second item---" + txt1 + " third item---" + txt2);
            done();
          });
        });
      });
    });
  });

  Then(/^user views the file name, file type, submitting admin's name, date submitted, current status, and available file actions for each file record displayed in the table$/, function (done) {
    keyword.expectVisible('Login_Page|firstFileNameForFileUploadList', function () {
      keyword.getText('Login_Page|firstFileNameForFileUploadList', function (txt1) {
        keyword.getText('Login_Page|firstFileTypeForFileUploadList', function (txt2) {
          keyword.getText('Login_Page|firstAdminNameForFileUploadList', function (txt3) {
            keyword.getText('Login_Page|firstSubmittedForFileUploadList', function (txt4) {
              keyword.getText('Login_Page|firstCurrentStatusForFileUploadList', function (txt5) {
                keyword.getText('Login_Page|firstCurrentActionForFileUploadList', function (txt6) {
                  console.log("The file name is ---" + txt1 + " the file type is---" + txt2 + " the admin name is ---" + txt3 + " the time of submitted is ---" + txt4 + " the current status is---" + txt5 + " the current actions is ---" + txt6);
                  done();
                });
              });
            });
          });
        });
      });
    });
  });
  Given(/^admin is viewing the file upload history table$/, function (done) {
    keyword.expectVisible('Login_Page|fileUploadHistoryTable', function () {
      done();
    });
  });

  When(/^admin is viewing a record for a specific import file$/, function (done) {
    keyword.expectVisible('Login_Page|firstSubmittedForFileUploadList', function () {
      done();
    });
  });

  When(/^the status of the import file record being viewed is either 'In Progress', 'Failed' or 'Active'$/, function (done) {
    keyword.expectVisible('Login_Page|firstCurrentStatusForFileUploadList', function () {
      keyword.getText('Login_Page|firstCurrentStatusForFileUploadList', function (txt) {
        console.log(txt);
        if (txt === 'In progress') {
          console.log("The action is---" + txt);
          done();
        }
        else if (txt === 'ACTIVE') {
          console.log("The action is---" + txt);
          done();
        }

        else if (txt === 'Failed') {
          console.log("The action is---" + txt);
          done();
        }
        else {
          console.log("The test case is failed");
          done();
        }
      });
    });
  });
  Then(/^the action displayed in the action column for that record will be 'View Report'$/, function (done) {
    keyword.expectVisible('Login_Page|firstCurrentActionForFileUploadList', function () {
      keyword.getText('Login_Page|firstCurrentActionForFileUploadList', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  When(/^the status of the import file record being viewed is 'Ready'$/, function (done) {
    keyword.expectVisible('Login_Page|firstCurrentStatus', function () {
      keyword.getText('Login_Page|firstCurrentStatus', function (txt) {
        console.log("The value is ----" + txt);
        expect(txt === 'READY');
        done();
      });
    });
  });
  Then(/^the action displayed in the action column for that record will be 'Make Live'$/, function (done) {
    keyword.expectVisible('Login_Page|makeLiveStatus', function () {
      //keyword.getText('Login_page|makeLiveStatus', function (txt) {
      //console.log(txt);
      done();
    });
  });
  //});
  Given(/^admin has selected the 'view report' functionality for a specific file record$/, function (done) {
    keyword.expectVisible('Login_Page|viewReport', function () {
      keyword.performClick('Login_Page|viewReport', function () {
        done();
      });
    });
  });
  Given(/^the import file record is in either the 'active' or 'failed' status$/, function (done) {
    keyword.expectVisible('Login_Page|firstCurrentStatusForFileUploadList', function () {
      keyword.getText('Login_Page|firstCurrentStatusForFileUploadList', function (txt) {
        console.log(txt);
        done();
      });
    });
  });

  When(/^admin views the view report pop\-up for a specific file$/, function (done) {
    keyword.expectVisible('Login_Page|fileReviewReport', function () {
      done();
    });
  });

  Then(/^admin will view the title text 'File Review Report'$/, function (done) {
    keyword.expectVisible('Login_Page|fileReviewReport', function () {
      keyword.getText('Login_Page|fileReviewReport', function (txt) {
        console.log(txt);
      });
    });
  });

  Given(/^the import file record is in the 'in\-progress' status$/, function (done) {
    keyword.expectVisible('Login_Page|firstCurrentStatusForFileUploadList', function () {
      done();
    });
  });

  Then(/^admin will view the name of the import file that the pop\-up is being viewed for$/, function (done) {
    keyword.expectVisible('Login_Page|FileNameInFileReviewReport', function () {
      keyword.getText('Login_Page|FileNameInFileReviewReport', function (txt) {
        console.log(txt);
        done();
      });
    });
  });
});
