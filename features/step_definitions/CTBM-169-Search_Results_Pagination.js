let {defineSupportCode} = require("cucumber");
let data = require('../../testData/global.js');
defineSupportCode(function ({Given, Then, When}) {

  Then(/^user has entered into job search$/, function (done) {
    keyword.expectVisible('Dashboard_Page|GlobalSearch_Input', function () {
      keyword.performClick('Dashboard_Page|GlobalSearch_Input', function () {
        done();
      });
    });
  });
  Given(/^User set the value in searchbox$/, function (done) {

    keyword.expectVisible('Dashboard_Page|GlobalSearch_Input', function () {
      keyword.setText('Dashboard_Page|GlobalSearch_Input', 'analyst', function () {
        done();
      });
    });
  });
  Given(/^User Clicks on Search Button$/, function (done) {
    keyword.performClick('Dashboard_Page|Search_Button', function () {
      done();
    });
  });
  Given(/^user views the job search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Rows_Div', function () {
      keyword.expectVisible('Dashboard_Page|Columns_Div', function () {
        done();
      });
    });
  });
  Given(/^user views a page hyperlink for each set of up to (\d+) records in the search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
      done();
    });
  });
  Then(/^user views the pagination controls at the bottom of the search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid_dropdown', function () {
      done();
    });
  });
  Then(/^user views a hyperlink control to navigate to the next page of search results$/, function (done) {
    keyword.performClick('Dashboard_Page|Next_click', function () {
      done();
    });
  });
  Then(/^user views a hyperlink control to navigate to the previous page of search results$/, function (done) {
    keyword.performClick('Dashboard_Page|Previous_click', function () {
      done();
    });
  });
  Then(/^user views text indicating the numbers of the currently viewed set of records in the search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_RecordList', function () {
      done();
    });
  });
  Then(/^user views text indicating the total count of records in the search results$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_RecordList', function () {
      done();
    });
  });
  Given(/^the executed search has returned results$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Customer_care', function () {
      keyword.scrollToelement('Dashboard_Page|Customer_care', function () {
        done();
      });

    });
  });
  Given(/^the executed search has less than (\d+) records\/results$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid_below40', function () {
      done();
    });
  });
  Then(/^user will not view the pagination controls at the bottom of the search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid_below40', function () {
      done();
    });
  });
  Given(/^Given User set the "([^"]*)" value in searchbox$/, function (done, searchtext) {
    keyword.setText('Dashboard_Page|GlobalSearch_Input', searchtext, function () {
      done();
    });
  });
  Given(/^pagination controls are visible with the search results grid$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Qulityanalysis_visible', function () {
      done();
    });
  });
  When(/^user clicks a hyperlink control to a specific page of the search results$/, function (done) {
    keyword.performClick('Dashboard_Page|Pagination_Grid_dropdown', function () {
      keyword.performClick('Dashboard_Page|Pagination_Grid_dropdown_selction', function () {
        done();
      });
    });
  });
  Then(/^user will see the search results grid updated to display the records associated with that page$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_RecordList', function () {
      done();
    });
  });
  Given(/^user is not viewing the first page of the results$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
      done();
    });
  });
  When(/^user clicks the previous page hyperlink control$/, function (done) {
    keyword.performClick('Dashboard_Page|Previous_click', function () {
      done();
    });
  })
  Then(/^user will see the search results grid updated to display the records associated with the page previous to the current page displayed in sequence$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_RecordList', function () {
      done();
    });
  });
  Given(/^user is viewing the first page of the results$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
      done();
    });
  });
  When(/^user views the pagination control for this scenario$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_RecordList', function () {
      done();
    });
  });
  Then(/^user will not see the 'previous' icon$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_RecordList', function () {
      done();
    });
  });
  Given(/^user is not viewing the last page of the results for this scenario$/, function (done) {
    keyword.performClick('Dashboard_Page|Search_Button', function () {
      keyword.performClick('Dashboard_Page|Pagination_Grid_dropdown_Last_selction', function () {
        keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
          done();
        });
      });
    });
  });
  When(/^user clicks the next page hyperlink control for this scenario$/, function (done) {
    keyword.performClick('Dashboard_Page|Pagination_Grid_dropdown_Last_selction', function () {
      keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
        done();
      });
    });
  });
  Then(/^user will see the search results grid updated to display the records associated with the page after the current page displayed in sequence$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
      done();
    });
  });
  Given(/^user is viewing the last page of the results$/, function (done) {
    keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
      done();
    });
  });
  Then(/^user will not see the 'next' icon$/, function (done) {
    keyword.performClick('Dashboard_Page|Pagination_Grid_dropdown_Last_selction', function () {
      keyword.expectVisible('Dashboard_Page|Pagination_Grid', function () {
        done();
      });
    });
  });


});
