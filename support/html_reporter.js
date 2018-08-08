"use strict";
var Cucumber = require("cucumber");
var {defineSupportCode} = require("cucumber");
var fs = require("fs");
var mkdirp = require("mkdirp");
var conf = require("../conf.js").config;
var reporter = require("cucumber-html-reporter");
var report = require("cucumber-html-report");

var jsonReports = process.cwd() + "/reports/json";
var htmlReports = process.cwd() + "/reports/html";
var targetJson = jsonReports + "/cucumber_report.json";

defineSupportCode(function ({After, registerListener}) {

  After(function (scenario) {
    if (scenario.isFailed()) {
      var attach = this.attach; // cucumber's world object has attach function which should be used
      return browser.takeScreenshot().then(function (png) {
        var decodedImage = new Buffer(png, "base64");
        return attach(decodedImage, "image/png");
      });
    }
  });

  var cucumberReportOptions = {
    source: targetJson,
    dest: htmlReports,
    name: "cucumber_report.html",
    title: "Mercer OS Automation Report"
  };
  var cucumberReporteroptions = {
    name: conf.projectName,
    brandTitle: 'QA Automation Report',
    storeScreenshots: true,
    screenshotsDirectory: htmlReports + "/images",
    theme: "bootstrap",
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: false,
    launchReport: false,
    metadata: {
      "App Version": "0.3.2",
      "Test Environment": globalData.TestingEnvironment,
      "Browser": conf.capabilities.browserName,
      "Platform": process.platform,
      "Parallel": "Scenarios",
      "Executed": "Remote"
    }
  };

  var logFn = string => {
    if (!fs.existsSync(jsonReports)) {
      mkdirp.sync(jsonReports);
    }
    try {
      fs.writeFileSync(targetJson, string);
      reporter.generate(cucumberReporteroptions); //invoke cucumber-html-reporter
      report
        .create(cucumberReportOptions)
        .then(function () {
          console.log("cucumber_report.html created successfully!");
        })
        .catch(function (err) {
          if (err) {
            console.error(err);
          }
        });
    } catch (err) {
      if (err) {
        console.log("Failed to save cucumber test results to json file.");
        console.log(err);
      }
    }
  }
  var jsonformatter = new Cucumber.JsonFormatter({
    log: logFn
  });
  registerListener(jsonformatter);
});
