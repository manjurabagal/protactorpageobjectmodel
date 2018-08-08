/**
 * Created by yugandhar-gorrepati on 2/27/2018.
 */

var keyWordSearchInput = Xpath('(//input[@name="searchText"])[1]');
var searchButton = Css('button[class^="searchButton"]');
var jobFamilyDropdwnLnk = Css('button.ButtonsearchbyFamily');
var jobFamilyLiItem;
var jobSubFamilyDropdwnLnk = Css('mercer-dropdown[class^="subfamilydrpdwn"] mercer-badge>div');
var jobSubFamilyLiItem;
var searchBtn = Xpath('//button[text()="SEARCH"]');
var clearFiltBtn = Css('span.clearFilterSpan');
var subfamilydropdownSave = ClassName('subfamilydropdownSave');
var removeJobSubFamilyLnk = Css('mercer-icon[class="colorBlack"]');

var noOfSelSubfamilies = Css('span.numberofSelectedSubfamilies.bold');

function clickOnJobFamilyDropDwn(callback) {
  keyword.performClick(jobFamilyDropdwnLnk, function () {
    callback();
  });
}
function clickOnJobSubFamilyDropDwn(callback) {
  keyword.performClick(jobSubFamilyDropdwnLnk, function () {
    callback();
  });
}

function selectJobFamily(value, callback) {

  clickOnJobFamilyDropDwn(function () {
    jobFamilyLiItem = Xpath('//div[contains(text(),"' + value + '")]');
    keyword.performClick(jobFamilyLiItem, function () {
      callback();
    });
  });


}

function removeJobSubFamily(callback) {
  keyword.performClick(removeJobSubFamilyLnk, function () {
    browser.sleep(2000);
    callback();
  });

}

function selectJobSubFamily(value, callback) {
  clickOnJobSubFamilyDropDwn(function () {
    jobSubFamilyLiItem = Xpath('//label[contains(text(),"' + value + '")]');
    keyword.performClick(jobSubFamilyLiItem, function () {
      callback();
    });

  });
}
function enterSearchKey(searchJobKeyword, callback) {
  keyword.setText(keyWordSearchInput, searchJobKeyword, function () {
    callback();
  });
}
function search(callback) {
  searchBtn.click();
    callback();
}
function clearFilters(callback) {
  keyword.performClick(clearFiltBtn, function () {
    callback();
  });
}
function saveJobSubFamily(callback) {
  keyword.performClick(subfamilydropdownSave, function () {
    browser.sleep(2000);
    callback();
  });

}


module.exports =
  {
    selectJobFamily: selectJobFamily,
    selectJobSubFamily: selectJobSubFamily,
    search: search,
    removeJobSubFamily: removeJobSubFamily,
    clearFilters: clearFilters,
    clickOnJobFamilyDropDwn: clickOnJobFamilyDropDwn,
    clickOnJobSubFamilyDropDwn: clickOnJobSubFamilyDropDwn,
    enterSearchKey: enterSearchKey,
    keyWordSearchInput: keyWordSearchInput,
    subfamilydropdownSave: subfamilydropdownSave,
    saveJobSubFamily: saveJobSubFamily,
    noOfSelSubfamilies: noOfSelSubfamilies,
    jobFamilyDropdwnLnk: jobFamilyDropdwnLnk,
    jobSubFamilyDropdwnLnk: jobSubFamilyDropdwnLnk


  };

