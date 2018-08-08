exports.config = {
  projectName: 'Market Pricer',
  isApplicationAngular: true,
  specs: [
    'features/**/*.feature'
  ],
  //restartBrowserBetweenTests: true,
  ignoreUncaughtExceptions: true,
  allScriptsTimeout: 90000, //This is the overall Timeout
  getPageTimeout: 10000, //This is the Page timeout
  directConnect: true,
  //seleniumAddress:'http://localhost:4444/wd/hub',
  exclude: [],
  // Use cucumber for the tests
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // Contains additional settings for cucumber-js
  cucumberOpts: {
    format: ['json:reports/json/results.json', 'pretty'],
    require: ['features/step_definitions/*.js', 'support/*.js'],
    tags: ['@*', '@Regression', '@Smoke']
  },
  // These capabilities tell protractor about the browser
  // it should use for the tests. In this case chrome.
  capabilities: {
    browserName: 'chrome',//'firefox',//'chrome',
    chromeOptions: {
      args: ['--disable-extensions', '--start-maximized', '--disableChecks']
    }
  },  // This setting tells protractor to wait for all apps
  // to load on the page instead of just the first.
  onPrepare: () => {
    global.globalData = require('./testData/global.js');
      browser.ignoreSynchronization = true;
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    global.expect = chai.expect;

    var {defineSupportCode} = require("cucumber");
    defineSupportCode(function ({setDefaultTimeout}) {
      setDefaultTimeout(90000);
    });

    global.keyword = require('./utilities/keywords.js');


    global.Id = function (locator) {
      return element(by.id(locator));
    };
    global.Name = function (locator) {
      return element(by.name(locator));
    };

    global.Xpath = function (locator) {
      return element(by.xpath(locator));
    };

    global.ClassName = function (locator) {
      return element(by.className(locator));
    };

    global.Css = function (locator) {
      return element(by.css(locator));
    };
    global.CssAll = function (locator) {
      return element.all(by.css(locator));
    };
    global.Tagname = function (locator) {
      return element(by.tagName(locator));
    };

    global.LinkText = function (locator) {
      return element(by.linkText(locator));
    };

    global.ButtonText = function (locator) {
      return element(by.buttonText(locator.trim()));
    };

    global.Binding = function (locator) {
      return element(by.binding(locator));
    };
  }

};
