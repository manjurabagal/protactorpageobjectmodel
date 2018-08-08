/**
 * Created by yugandhar-gorrepati on 2/27/2018.
 */
var headerPage = require('../Pages/HeaderPage');
var searchPage = require('../Pages/SearchPage');
var savedjobsTxt = Css('h6.jobtitle');
var dontHvSavedJobsTxt = Css('h4.firsttext');
var saveJobBtn = Css("div[class*='savejobdiv large-3 medium-6 small-6'] button[class^='unsavedJob']");
var saveJobBtnAll = by.css('div[class*="savejobdiv large-3 medium-6 small-6"] button[class^="unsavedJob"]');
var pagninationTxt = Css('span[class*="pagination"]');
var jobRecordLnks = by.css('div[id*="JobRecord"]');
var jobRecordLnk = Css('div[id*="JobRecord"]');
var jobTitleLnkTxt = by.css('span.sunfamtitlenew');
var jobTitleHeadrLnk=Xpath("//span[@class='sunfamtitlenew']/..");
var savedJobBtns = by.css('div[class="savejobdiv large-2 medium-6 small-6"] button[class^="savedJob"]');
var savedJobBtn = Css('div[class="savejobdiv large-2 medium-6 small-6"] button[class^="savedJob"]');
var jobSubFamilyHeaderTxtAll = by.css('div.subfamilytitle h4.jobtitle');
var jobSubFamilyHeaderTxt = Css('h4.jobtitle');
var tagIcon = Css('div[class="savejobdiv large-2 medium-6 small-6"] button[class^="savedJob"]>span');
var jobFamilyTitleTxt = Css('familyTitle.jobtitle');
var prevPriceLabel = Css('div[class$="prevpricediv"] span.priceon');
var jobDescTxt=Css("div[id*='JobRecord'] span.disctextJob");
function saveJobs(totalJobs, callback) {
  keyword.expectVisible(saveJobBtn, function () {
    keyword.getElements(saveJobBtnAll, function (listOfSaveBtns) {
      for (var i = 0; i < totalJobs; i++) {
        listOfSaveBtns[i].click();
      }

      callback();
    });
  });

}
function clickOnJobRecord(jobRecordIndex, callback) {
  keyword.expectVisible(jobRecordLnk, function () {
    keyword.getElements(jobRecordLnks, function (jobs) {
      keyword.performClick(jobs[jobRecordIndex], function () {
        callback();
      });

    });
  });
}

function getJobRecord(jobRecordIndex, callback) {
  keyword.expectVisible(jobRecordLnk, function () {
    keyword.getElements(jobRecordLnks, function (jobs) {
      callback(jobs[jobRecordIndex]);
    });
  });
}

function getSavedJobBtn(savedJobBtnIndex, callback) {
  keyword.expectVisible(saveJobBtn, function () {
    keyword.getElements(savedJobBtns, function (allSavedJobBtns) {
      callback(allSavedJobBtns[savedJobBtnIndex]);
    });
  });
}
module.exports =
  {
    headerPage: headerPage,
    searchPage: searchPage,
    saveJobs: saveJobs,
    getJobRecord: getJobRecord,
    clickOnJobRecord: clickOnJobRecord,
    saveJobBtn: saveJobBtn,
    pagninationTxt: pagninationTxt,
    jobRecordLnks: jobRecordLnks,
    savedJobBtns: savedJobBtns,
    tagIcon: tagIcon,
    getSavedJobBtn: getSavedJobBtn,
    saveJobBtn: saveJobBtn,
    savedJobBtn: savedJobBtn,
    jobRecordLnk: jobRecordLnk,
    jobTitleLnkTxt: jobTitleLnkTxt,
    jobSubFamilyHeaderTxtAll: jobSubFamilyHeaderTxtAll,
    jobSubFamilyHeaderTxt: jobSubFamilyHeaderTxt,
    jobFamilyTitleTxt: jobFamilyTitleTxt,
    savedjobsTxt: savedjobsTxt,
    dontHvSavedJobsTxt: dontHvSavedJobsTxt,
    prevPriceLabel: prevPriceLabel,
    jobDescTxt:jobDescTxt,
    jobTitleHeadrLnk:jobTitleHeadrLnk
  };
