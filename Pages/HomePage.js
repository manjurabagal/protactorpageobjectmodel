/**
 * Created by yugandhar-gorrepati on 2/27/2018.
 */
var savedjobsTxt = Css('h6.jobtitle');
var dontHvSavedJobsTxt = Css('h4.firsttext');
var savedJobsBtnBy = by.css('div.savejobdiv.large-3.medium-6.small-6.taggedjobs_section button[class^="savedJob"]');
var savedJobsBtn = Css('div.savejobdiv.large-3.medium-6.small-6.taggedjobs_section button[class^="savedJob"]');
var removeJobBtn = Css('div[class="savejobdiv large-3 medium-6 small-6 taggedjobs_section"] button[class^="removeJob"]');
var jobFamilyHeaderTxt = Css('h4[class^="familyTitle"]');
var jobSubFamilyTitleTxt = Css('mercer-card-content h4.jobtitle');
var jobFamilyTitleTxt = Xpath('//span[contains(text(),"Job Family:")]/../..//mercer-badge[@id="[object Object] "]/div');
var jobRecordLnks = Css('div[id*="JobRecord"]');
var jobRecordLnksAll = by.css('div[id*="JobRecord"]');
var logoTitle = ClassName('logotitle');

var jobFamilyDropDwntxt = Css('button.ButtonsearchbyFamily');
var headerPage = require('./HeaderPage');
var searchPage = require('./SearchPage');


function getTotalTaggedJobs(callback) {
  keyword.expectVisible(savedJobsBtn, function () {
    keyword.getElementsCount(savedJobsBtnBy, function (size) {
      callback(size);
    });
  });
}
function clickOnJobSubFamilyHeader(callback) {
  keyword.performClick(jobSubFamilyTitleTxt, function () {
    callback();
  });
}
function unTagJob(callback) {
  keyword.expectVisible(savedJobsBtn, function () {
    keyword.performClick(savedJobsBtn, function () {
      keyword.expectVisible(removeJobBtn, function () {
        keyword.performClick(removeJobBtn, function () {
          browser.sleep(2000);
          callback();
        });
      });
    });
  });

}
function clickOnJobRecordLnk(index, callback) {
  keyword.expectVisible(jobRecordLnks, function () {
    keyword.getElements(jobRecordLnksAll, function (jobRecords) {
      keyword.performClick(jobRecords[index], function () {
        callback();
      });
    });
  });

}

module.exports = {
  headerPage: headerPage,
  searchPage: searchPage,
  unTagJob: unTagJob,
  clickOnJobRecordLnk: clickOnJobRecordLnk,
  getTotalTaggedJobs: getTotalTaggedJobs,
  savedjobsTxt: savedjobsTxt,
  savedJobsBtn: savedJobsBtn,
  dontHvSavedJobsTxt: dontHvSavedJobsTxt,
  jobFamilyHeaderTxt: jobFamilyHeaderTxt,
  jobSubFamilyTitleTxt: jobSubFamilyTitleTxt,
  jobFamilyTitleTxt: jobFamilyTitleTxt,
  removeJobBtn: removeJobBtn,
  jobRecordLnks: jobRecordLnks,
  clickOnJobSubFamilyHeader: clickOnJobSubFamilyHeader,
  logoTitle: logoTitle,
  jobFamilyDropDwntxt: jobFamilyDropDwntxt
};
