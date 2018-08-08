/**
 * Created by yugandhar-gorrepati on 2/27/2018.
 */
var headerPage = require('../Pages/HeaderPage');
var jobTitle = Css('span.jobtitle');
var ratePerHourTxt = Css('div[class$="prevprice"]');
var payRateCurrentMonth = Css('div[class$="actlprice"]');
var prevMonthTxt = Css('span.priceon');
var jobDescHeaderTxt = Xpath('//div[@class="columns desptext"]//..//span[contains(text(),"DESCRIPTION")]');
var jobDescTxt = Css('div.columns.desptext');
var payRateCurrency = Xpath('//div[@class="large-12 medium-12 small-12 actlprice"]');
var trajectoryIcon = Css('mercer-icon[icon="remove"]');
var payRatePreviousMonth = Css('span.oldprice');
var savedJobTagIcon = Css('div[class*="showondesktab savejobdiv"] button span');
var saveJobBtn = Css('div[class*="showondesktab savejobdiv"] button');
var savedJobBtn = Css("div[class*='showondesktab savejobdiv'] button");
var yesBtn = Xpath('//button[text()="Yes"]');
var noBtn = Xpath('//button[text()="Yes"]');
var contractType = Xpath("//span[text()='Contract Type']");
var jobFamilyTxt = Css("span.smalltitle");
var payRateOverTimeTxt = Xpath("//span[contains(text(),'PAY RATES OVER TIME')]");
var payRateGraphTracker = Css('path.highcharts-tracker');
var graphYAxis = Css("g.highcharts-axis-labels.highcharts-yaxis-labels text");
var verticalPayRatesAllTxt = by.css("g.highcharts-axis-labels.highcharts-yaxis-labels text");

var graphXAxis = Css("g.highcharts-axis-labels.highcharts-xaxis-labels text");
var graphXAxisAll = by.css("g.highcharts-axis-labels.highcharts-xaxis-labels text");
//var currMonthDataCirPoint=Css("path[fill='rgb(0,168,200)'][d^='M 72']");
var firstForeCastPoint = Css("path.highcharts-point");
var allMonthsForeCastPoint = by.css("path.highcharts-point");
var mouseHoverGraphRateText = Css("g[class*='highcharts-label highcharts-tooltip']>text");
var dispForeCastLine = Css("path[stroke='white'][stroke-width='1']");
var marginErrorArea = Css('path.highcharts-area');
var dataEffectiveTxt = Css("div[class*='dataeffective']>span");
//var payRateAggregateTag=path.highcharts-point
function saveJob(callback) {
  keyword.performClick(saveJobBtn, function () {
    keyword.performClick(yesBtn, function () {
      keyword.expectVisible(savedJobTagIcon, function () {
        callback();
      });
    });
  });

}
function unTagJob(callback) {
  keyword.performClick(savedJobBtn, function () {
    keyword.performClick(yesBtn, function () {
      keyword.expectInvisible(savedJobTagIcon, function () {
        callback();

      });
    });
  });

}
function getCurMonthDateLocInXaxis(callback) {
  var curMonthDateInXaxis;

  keyword.getCurrMonth(function (month) {
    month = month.substr(0, 3);
    keyword.getCurrYear(function (year) {
      curMonthDateInXaxis = Xpath("//*[*[name()='tspan'] and *[contains(text(),'" + month + "')] and *[contains(text(),'" + year + "')]]");
      callback(curMonthDateInXaxis);
    });
  });
}
module.exports =
  {
    headerPage: headerPage,
    saveJob: saveJob,
    jobDescTxt: jobDescTxt,
    jobTitle: jobTitle,
    savedJobTagIcon: savedJobTagIcon,
    payRateCurrentMonth: payRateCurrentMonth,
    ratePerHourTxt: ratePerHourTxt,
    payRatePreviousMonth: payRatePreviousMonth,
    trajectoryIcon: trajectoryIcon,
    jobDescHeaderTxt: jobDescHeaderTxt,
    saveJobBtn: saveJobBtn,
    savedJobBtn: savedJobBtn,
    unTagJob: unTagJob,
    contractType: contractType,
    jobFamilyTxt: jobFamilyTxt,
    payRateOverTimeTxt: payRateOverTimeTxt,
    payRateGraphTracker: payRateGraphTracker,
    graphYAxis: graphYAxis,
    graphXAxis: graphXAxis,
    graphXAxisAll: graphXAxisAll,
    firstForeCastPoint: firstForeCastPoint,
    mouseHoverGraphRateText: mouseHoverGraphRateText,
    allMonthsForeCastPoint: allMonthsForeCastPoint,
    getCurMonthDateLocInXaxis: getCurMonthDateLocInXaxis,
    dispForeCastLine: dispForeCastLine,
    verticalPayRatesAllTxt: verticalPayRatesAllTxt,
    marginErrorArea: marginErrorArea,
    dataEffectiveTxt: dataEffectiveTxt
  }
