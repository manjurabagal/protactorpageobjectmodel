/**
 * Created by yugandhar-gorrepati on 2/27/2018.
 */
var homePage = require('./HomePage');

var homeIconLnk = Css('a.logoanchor');
var profileIconLnk = Css('mercer-dropdown-label#account>a div.mos-c-avatar');
var logoutBtn = Id('headerlogout');
var adminDashboardLnk = Id('headerManagedata');
var viewProfileLnk = Id('headerShowProfile');
var dashBoardLnk = Xpath('//a[@id="dashboardlink"]');
var nameLabel = Css('h3[class$="title"]');
var loginBtn = Xpath('//*[text()="Sign In"]');
var breadCrumbLnk;
var homeLink = Xpath("//span[contains(text(),'Home')]/..");
var searchResultsLink = Xpath("//span[contains(text(),'Search Results')]/..");
var jobDetailsLink = Xpath("//span[contains(text(),'Job Details')]/..");
var breadcrumbBarLinks = Css("div[class^='mos-c-tabs--header mos-c-side-scroller mos-u-position--relative']");
var dontHvSavedJobsTxt = Css('h4.firsttext');
var savedJobsBtnBy = by.css('div.savejobdiv.large-3.medium-6.small-6.taggedjobs_section button[class^="savedJob"]');
var savedJobsBtn = Css('div.savejobdiv.large-3.medium-6.small-6.taggedjobs_section button[class^="savedJob"]');
var removeJobBtn = Css('div[class="savejobdiv large-3 medium-6 small-6 taggedjobs_section"] button[class^="removeJob"]')


function clickOnBreadCrumbLink(breadCrumbLink, callback) {
  breadCrumbLnk = Xpath("//span[contains(text(),'" + breadCrumbLink + "')]");
  keyword.performClick(breadCrumbLnk, function () {
    callback();
  });
}

function navigateToHome(callback) {
  keyword.performClick(homeIconLnk, function () {
    callback();
  });
}
function clickOnProfile(callback) {
  keyword.performClick(profileIconLnk, function () {
    callback();
  });
}

function clickOnSearchResults(callback) {
  keyword.performClick(searchResultsLink, function () {
    callback();
  });
}
function navigateToAdminDashboard(callback) {
  clickOnProfile(function () {
    keyword.performClick(adminDashboardLnk, function () {
      callback();
    });
  });
}

function navigateToViewProfile(callback) {
  clickOnProfile(function () {
    keyword.performClick(viewProfileLnk, function () {
      callback();
    });
  });
}
function doLogout(callback) {
  clickOnProfile(function () {
    keyword.performClick(logoutBtn, function () {
      keyword.expectVisible(loginBtn, function () {
        callback();
      });
    });
  });
}
function logout(callback) {
  //before logout to untag saved jobs
  navigateToHome(function () {
    browser.sleep(3000);
    dontHvSavedJobsTxt.isPresent().then(function (dontHvSavdJobTxt) {
      if (dontHvSavdJobTxt) {
        doLogout(function () {
          callback();
        })
      }
      else {
        keyword.getElementsCount(savedJobsBtnBy, function (size) {
          for (var i = 0; i < size; i++) {
            untagJob(function () {
            })
          }
          doLogout(function () {
            callback();
          })
        })
      }
    });
  });

}
function untagJob(callback) {
  keyword.expectVisible(savedJobsBtn, function () {
    keyword.performClick(savedJobsBtn, function () {
      keyword.expectVisible(removeJobBtn, function () {
        keyword.performClick(removeJobBtn, function () {
          browser.sleep(2000);
          callback();
        })
      })
    })
  })
}
module.exports = {
  navigateToHome: navigateToHome,
  clickOnProfile: clickOnProfile,
  navigateToAdminDashboard: navigateToAdminDashboard,
  navigateToViewProfile: navigateToViewProfile,
  logout: logout,
  clickOnSearchResults: clickOnSearchResults,
  clickOnBreadCrumbLink: clickOnBreadCrumbLink,
  profileIconLnk: profileIconLnk,
  adminDashboardLnk: adminDashboardLnk,
  viewProfileLnk: viewProfileLnk,
  nameLabel: nameLabel,
  logoutBtn: logoutBtn,
  homeLink: homeLink,
  searchResultsLink: searchResultsLink,
  jobDetailsLink: jobDetailsLink,
  breadcrumbBarLinks: breadcrumbBarLinks,
  dontHvSavedJobsTxt: dontHvSavedJobsTxt,
  savedJobsBtnBy: savedJobsBtnBy
};
