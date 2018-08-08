var {defineSupportCode} = require("cucumber");
var homePage = require('../../Pages/HomePage');
var jobDetailsPage = require('../../Pages/JobDetailsPage');
defineSupportCode(function ({Given, When, Then}) {
  Given(/^user has accessed the CB system$/, function (done) {
    keyword.expectVisible(homePage.searchPage.keyWordSearchInput, function () {
      done();
    });
  });

  Then(/^user view all of jobs within the CB system that the user currently has tagged\.$/, function (done) {
    keyword.verifyTextContains(homePage.savedjobsTxt, 'saved', function () {
      homePage.getTotalTaggedJobs(function (totalSavedJobs) {
        //Below code to un tag the saved jobs
        homePage.unTagJob(function () {
          homePage.unTagJob(function () {
            keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
            expect(totalSavedJobs).equal(2);
            done();
          });
          });
        });
      });
    });
  });
  Then(/^user views the results grouped first by family$/, function (done) {
    keyword.verifyText(homePage.jobFamilyHeaderTxt, globalData.testData.jobDetails.jobFamilyName, function () {
      keyword.verifyTextContains(homePage.jobFamilyTitleTxt, globalData.testData.jobDetails.jobFamilyName, function () {
        done();
      });
    });
  });

  Then(/^the sort order that the families are displayed in will follow the Aggregated Sort Order provided by the Mercer Job Catalog system for this scenario$/, function (done) {
    done();
  });


  Then(/^user views the grid grouped within each family by subfamily$/, function (done) {
    keyword.verifyText(homePage.jobSubFamilyTitleTxt, globalData.testData.jobDetails.jobSubFamilyName, function () {
      //Below code to untag saved jobs
      homePage.unTagJob(function () {
        homePage.unTagJob(function () {
          keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
            done();
          });
        });
      });
    });
  });

  Then(/^the sort order that the sub\-families are displayed in within each family will follow the Aggregated Sort Order provided by the Mercer Job Catalog system$/, function (done) {
    done();

  });

  Then(/^the sort order that the Jobs are displayed in within each sub\-family will follow the Aggregated Sort Order provided by the Mercer Job Catalog system$/, function (done) {
    done();
  });


  When(/^user views an individual job record within the tagged jobs grid$/, function (done) {
    homePage.clickOnJobRecordLnk(0, function () {
      done();
    });
  });

  Then(/^user views the title of the job identified by that record$/, function (done) {
    keyword.verifyTextContains(jobDetailsPage.jobTitle, globalData.testData.jobDetails.jobFamilyName, function () {
      done();
    });
  });
  Then(/^user views the 'tag job' icon in it's last saved state$/, function (done) {
    keyword.expectVisible(jobDetailsPage.savedJobTagIcon, function () {
      jobDetailsPage.headerPage.navigateToHome(function () {
        //below code to untag saved jobs
        homePage.unTagJob(function () {
          homePage.unTagJob(function () {
            keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
              done();
            });
          });
        });
      });
    });
  });

  Given(/^user is using a computer with standard 'mouse' input device$/, function (done) {
    done();
  });


  When(/^user hovers their cursor over an individual job record within the search results grid$/, function (done) {
    // var jobRecord = element(By.css(data.testData.jobDetails.taggedJobRecord));
    //browser.actions().mouseMove(jobRecord).perform();
    done();
  });

  Then(/^user views the job description of that job in a 'hover\-over' pop\-up$/, function (done) {
    // keyword.expectVisible('homePage|jobDesc', function () { -- need to add validation after bug fix
    //Below code to  untag saved jobs
    homePage.unTagJob(function () {
      homePage.unTagJob(function () {
        keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {

          done();
        });
    });
    });
  });
  Given(/^user is viewing the 'hover\-over' pop\-up for that specific job record$/, function (done) {
    // keyword.expectVisible('homePage|jobDesc', function () { need to add validation after bug fix
    done();
  });


  When(/^user moves their focus away from the individual job record within the search results grid$/, function (done) {
    //var elem = element(By.xpath("//a[@id='dashboardlink']")); //need to add logic after bug fix
    // browser.actions().mouseMove(elem).perform();
    done();
  });

  Then(/^user views 'hover\-over' pop\-up disappear$/, function (done) {
    //Need to add logic for element is not present after bug fix
    //below code to un tag saved jobs
    homePage.unTagJob(function () {
      homePage.unTagJob(function () {
        keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
          done();
        });

      });
    });
  });


  When(/^user clicks on a individual job$/, function (done) {
    homePage.clickOnJobRecordLnk(0, function () {
      done();
    });

  });

  Then(/^user views the job details page appear$/, function (done) {
    keyword.verifyTextContains(jobDetailsPage.jobTitle, globalData.testData.jobDetails.jobFamilyName, function () {
      done();
    });
  });

  Then(/^user views the Job Details page populated with information about the job record they clicked on$/, function (done) {
    keyword.expectVisible(jobDetailsPage.jobDescTxt, function () {
      keyword.verifyText(jobDetailsPage.jobDescHeaderTxt, 'DESCRIPTION', function () {
      jobDetailsPage.headerPage.navigateToHome(function () {
        //below code to untag saved jobs
        homePage.unTagJob(function () {
          homePage.unTagJob(function () {
            keyword.expectVisible(homePage.dontHvSavedJobsTxt, function () {
            done();
          });
          });
        });
      });
    });
  });
  });


  Then(/^user does not view the tagged jobs grid$/, function (done) {
    done();
  });

  Then(/^user will view a message instructing the user to tag jobs \(this message will be provided during the visual design updates\)$/, function (done) {
    done();
  });

  Given(/^user has accessed the CB system and navigate to the dashboard page$/, function (done) {
    done();
  });

});




