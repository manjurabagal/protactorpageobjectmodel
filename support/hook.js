var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({registerHandler}) {
  registerHandler("BeforeFeature", {timeout: 50 * 1000}, function () {

  });

  registerHandler("AfterFeature", {timeout: 50 * 1000}, function () {
  });
  registerHandler("BeforeScenario", {timeout: 60000}, function () {
    //browser.get(globalData.appURL.QA);


  });
  /*this.Before(function(scenario, callback) {
   browser.get(globalData.appURL.QA).then(function () {
   callback();

   });
   });*/
  /*
   module.exports = function () {
   this.Before(function(scenario,callback) {
   browser.get(globalData.appURL.QA).then(function () {
   callback();
   });
   });
   }*/
  registerHandler("AfterScenario", {timeout: 60000}, function () {
    //browser.restart();
  });
});
