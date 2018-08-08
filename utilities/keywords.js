/**
 * Created by sudip-prasad on 7/17/2017.
 */
var parse = require('csv-parse');
var Excel = require('exceljs');
var fs = require("fs");
//var robot = require("robot-js");
var clipboard = require('copy-paste');


/*******************************************************************************
 * Function Description: getAllWindowHandles - this function used to click on the web element
 * Created Date : 07/03/2018
 * Created by : Narasimha Manthri
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/

function getAllWindowHandles(callback) {
  browser.getAllWindowHandles().then(function (handles) {
    callback(handles);
  });
}
/*******************************************************************************
 * Function Description: getUserHome - this function used to click on the web element
 * Created Date : 07/03/2018
 * Created by : Narasimha Manthri
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/

function getUserHome(callback) {

  return callback(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']);

};


/*******************************************************************************
 * Function Description: switchToWindow - this function used to click on the web element
 * Created Date : 07/03/2018
 * Created by : Narasimha Manthri
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/

function switchToWindow(newWindow, callback) {
  browser.switchTo().window(newWindow).then(function () {
    callback();
  });
}

/*******************************************************************************
 * Function Description: setText - this function used to click on the web element
 * Created Date : 07/15/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/

function click(locator, callback) {
  expectVisible(locator, function () {
    browser.wait(function () {
      return locator.isDisplayed();
    }, 15000).then(function () {
      locator.click().then(function () {
        callback();
      });
    });
  });
}

/*************************************************************************************
 *
 *
 */



function scrollToelementPosition(coordinate, callback) {
  browser.sleep(2000);
  browser.executeScript('window.scrollTo(0,700);').then(function () {
    console.log("Scrolled to the given position");
    callback();
  });
}
/*******************************************************************************
 * Function Description: setText - this function used to set the text into input box
 * Created Date : 07/15/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/

function setText(locator, data, callback) {
  expectVisible(locator, function () {
    browser.wait(function () {
      return locator.isDisplayed();
    }, 5000).then(function () {
      locator.sendKeys(data).then(function () {
        callback();
      });
    });
  });
}


/*******************************************************************************
 * Function Description: expectVisible -  An expected condition that returns a promise representing whether the element is visible.
 * Created Date : 07/15/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectVisible(locator, callback) {
  try {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(locator), 15000);
    return callback();
  }
  catch (E) {
    console.log(E);
    callback();
  }
}

/*******************************************************************************
 * Function Description: expectInVisible -  An expected condition that returns a promise representing whether the element is inVisible.
 * Created Date : 02/19/2018
 * Created by : Yugandhar Reddy
 * Input: locator in format "PageName|ObjectName"
 * Output: !function
 *********************************************************************************/
function expectInvisible(locator, callback) {
  try {
        var EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(locator), 15000);
    return callback();
    }
  catch (E) {
    console.log(E);
    callback();
  }
}
/*******************************************************************************
 * Function Description: elementClickable -  An expected condition that returns a promise representing whether the element is clickable.
 * Created Date : 02/19/2018
 * Created by : Yugandhar Reddy
 * Input: locator in format "PageName|ObjectName"
 * Output: !function
 *********************************************************************************/
function elementClickable(locator, callback) {
  try {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(locator), 15000);
    return callback();
  }
  catch (E) {
    console.log(E);
    callback();
  }
}

/*******************************************************************************
 * Function Description: ExpectNotPresent - this function used to verify web element shouldn't be present in the dom
 * Created Date : 10/13/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectNotPresent(locator, callback) {

    browser.wait(function () {
      return locator.isPresent();
    }, 5000).then(function (isPresent) {
      expect(!isPresent);
      callback();
    });
}

//
/*******************************************************************************
 * Function Description: ExpectPresent - this function used to verify web element should be present in the dom
 * Created Date : 10/13/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectPresent(locator, callback) {
    browser.wait(function () {
      return locator.isPresent();
    }, 7000).then(function (isPresent) {
      expect(isPresent);
      callback();
    });
}


/*******************************************************************************
 * Function Description: getDisplayStatus - this function used to check visibility of web element
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: boolean (True/False)
 *********************************************************************************/

function getDisplayStatus(locator, callback) {
  expectVisible(locator, function () {
    browser.wait(function () {
      return locator.isDisplayed();
    }, 5000).then(function (isVisible) {
      callback(isVisible);
    });
  });
}


/*******************************************************************************
 * Function Description: expectEnabled - this function used to verify web element should be enabled in state
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectEnabled(locator, callback) {
  try {
    expectVisible(locator, function () {
      return locator.isEnabled();
    }, 10000).then(function (isEnabled) {
      expect(isEnabled);
      callback();
    });
  }
  catch (E) {
    expect(false);
    console.log(E);
    callback();
  }
}

/*******************************************************************************
 * Function Description: expectDisabled - this function used to verify web element shouldn't be enabled in state
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectDisabled(locator, callback) {
  try {
    expectVisible(locator, function () {
      return locator.isEnabled();
    }, 10000).then(function (isEnabled) {
      expect(!isEnabled);
      callback();
    });
  }
  catch (E) {
    expect(false);
    console.log(E);
    callback();
  }
}

/*******************************************************************************
 * Function Description: dragNdrop - this function used to drag and drop first web element over second web element
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName1|ObjectName1" and "PageName2|ObjectName2"
 * Output: pass the script if performed successfully
 *********************************************************************************/
function dragNdrop(locator1, locator2, callback) {
  try {
    expectVisible(locator1, function () {
      expectVisible(locator2, function () {
      }, 10000).then(function () {
        browser.actions().dragAndDrop(locator1, locator2).perform().then(function () {
          callback();
        });
      });
    });
  }
  catch (E) {
    expect(false);
    console.log(E);
    callback();
  }
}
/*******************************************************************************
 * Function Description: getEnabledStatus - this function get true in case of web element is enabled state and false if the web element is disabled
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: boolean
 *********************************************************************************/
function getEnabledStatus(locator, callback) {
  expectVisible(locator, function () {
    locatorects.getWebElement(locator, function (locator) {
      browser.wait(function () {
        return locator.isEnabled();
      }, 5000).then(function (isEnabled) {
        callback(isEnabled);
      });
    });
  });
}

/*******************************************************************************
 * Function Description: getElementsCount - this function get integer number dependence on how many element that locator corresponds to
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: Integer
 *********************************************************************************/
function getElementsCount(locator, callback) {
    browser.wait(function () {
      return element.all(locator);
    }, 5000).then(function (elements) {
      callback(elements.length);
    });
}


/*******************************************************************************
 * Function Description: selectList - this function get integer number dependence on how many element that locator corresponds to
 * Created Date : 07/18/2017
 * Created by : Arif Shaik
 * Input: locator in format "PageName|ObjectName"
 * Output: pass the script if performed successfully
 *********************************************************************************/
function selectByVisibleText(locator, data, callback) {
  try {
    expectVisible(locator, function (locator) {
      browser.wait(function () {
        return locator.isDisplayed();
      }, 5000).then(function () {
        locator.findElements(by.tagName('option')).then(function (options) {
          console.log(options);
          let counter = 0;
          options.forEach(function (option) {
            counter++;
            option.getText().toString().trim().then(function (text) {
              if (text.toString() === data) {
                option.click();
                callback();
              }
              if (counter === options.length) {
                expect(false);
                console.log('Error: No such text found in the select dropdown!!');
                callback();
              }
            });
          });
        });
      });
    });
  } catch (e) {
    console.log(e);
    expect(false);
    callback();
  }
}


/********************************************************************************************
 * Function Description: getRandom - it is used to get different types of random data like, date, phone number, number or text etc
 * Created Date : 07/18/2017
 * Created by : Sudip Prasad
 * Input: random type eg. "date", phone_number"
 * Output: pass the script if performed successfully
 ********************************************************************************************/
function getRandom(data, optArgs, callback) {
  let randomParameters = optArgs || 1;
  let randomValue = "";
  let possText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  switch (data) {
    case "text":
      for (let i = 0; i < randomParameters; i++) {
        randomValue += possText.charAt(Math.floor(Math.random() * possText.length));
      }
      break;
    case "integer":
      fnRandomInteger(function (integer) {
        callback(integer);
      });
      break;
    case "number":
      fnRandomNumber(randomParameters, function (rand_num) {
        callback(rand_num);
      });
      break;
    case "phone_number":
      fnRandomPhoneNumber(function (rand_number) {
        callback(rand_number);
      });
      break;
    case "date":
      fnRandomDate(function (date) {
        callback(date);
      });
      break;
    case "email":
      fnRandomEmailId(function (email) {
        callback(email);
      });
      break;
  }
}

function fnRandomEmailId(callback) {
  var max = 9, min = 0, str = "", i;
  for (i = 0; i < 5; i++) {
    str = str + Math.floor(Math.random() * (max - min) + min);
  }
  return callback('email' + str + '@mercer.com');
}

function fnRandomPhoneNumber(callback) {
  var max = 9, min = 0, str = "", i;
  for (i = 0; i < 10; i++) {
    str = str + Math.floor(Math.random() * (max - min) + min);
  }
  return callback(str);
}

function fnRandomInteger(min, max, callback) {
  return callback(min + Math.floor(Math.random() * (max - min + 1)));
}

function fnRandomNumber(no_of_digit, callback) {
  let number = "";
  let max = 9, min = 0;
  while (true) {
    number += min + Math.floor(Math.random() * (max - min + 1));
    no_of_digit--;
    if (no_of_digit !== 0) {
      callback(number);
    }
  }
}

var fnRandomDate = function (callback) {
  fnRandomInteger(1, 30, function (day) {
    fnRandomInteger(3, 12, function (month) {
      fnRandomInteger(1999, 2014, function (year) {
        if (parseInt(day) < 10) {
          day = '0' + day;
        }
        if (parseInt(month) < 10) {
          month = '0' + month;
        }
        var date = day + "/" + month + "/" + year;
        callback(date);
      })
    })
  })
}


/********************************************************************************************
 * Function Description: getCurrMonth - it is used to get current month in provided formate
 * Created Date : 03/27/2018
 * Created by : Yugandhar Reddy
 * Output: Month in string form ex :- Jan
 ********************************************************************************************/
function getCurrMonth(callback) {
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  callback(month[d.getMonth()]);
}

/********************************************************************************************
 * Function Description: getCurrMonthName - it is used to get current month in provided formate
 * Created Date : 03/27/2018
 * Created by : Yugandhar Reddy
 * Input : Month num b/n 0 to 11
 * Output: Month in string form ex :- January
 ********************************************************************************************/
function getCurrMonthName(monthNum, callback) {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  callback(month[monthNum]);
}

/********************************************************************************************
 * Function Description: getYear - it is used to get current year in YYYY
 * Created Date : 03/27/2018
 * Created by : Yugandhar Reddy
 * Output: Year in string form
 ********************************************************************************************/
function getCurrYear(callback) {
  var d = new Date();
  var year = new Date().getFullYear();
  callback(year);
}

/********************************************************************************************
 * Function Description: getTodaysDate - it is used to get today's date in provided formate
 * Created Date : 07/18/2017
 * Created by : Sudip prasad
 * Input: date format "dd/mm/yyyy"
 * Output: date in string form
 ********************************************************************************************/
function getTodaysDate(format, callback) {
  var day = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  var monthName;

  switch (parseInt(month) + 1) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "Febuary";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
  }
  if (format == 'DD/MM/YYYY') {
    month = (parseInt(month) + 1);
    if (parseInt(day) < 10) day = '0' + parseInt(day);
    if (parseInt(month) < 10) month = '0' + parseInt(month);
    callback(day + '/' + month + '/' + year);
  }
  else if (format == 'MM DD, YYYY') {
    if (parseInt(day) < 10) day = '0' + parseInt(day);
    callback(monthName.substring(0, 3) + ' ' + day + ', ' + year);
  } else {
    callback(day + ' ' + monthName + ', ' + year);
  }
}

/********************************************************************************************
 * Function Description: UploadFile - it is used to upload a file in page from physical drive path
 * Created Date : 07/18/2017
 * Created by : Sudip prasad
 * Input: file name along with the complete path in the physical driver
 * Output: pass the script if performed successfully
 ********************************************************************************************/
function uploadFile(file, callback) {
  file = file.replace('\\', '/');
  var slashIndex = file.lastIndexOf('/');
  var path = file.substring(0, slashIndex);
  var filename = file.substring(parseInt(slashIndex) + 1, file.length);
  clipboard.copy(path, function () {
    browser.pause(2000);
    NavigateToFolderLocation(function () {
      browser.pause(2000);
      TypeFileName(filename, function () {
        browser.pause(2000);
        callback('File uploading Completed!!');
      });
    });
  });
}

//********************************************************************************************/
function FocusOnFileNameInput(callback) {
  var Keyboard = robot.Keyboard;
  var k = Keyboard();
  var tabIndex = [];
  var times = 4;
  for (var i = 0; i < times; i++) {
    tabIndex.push(i + 1);
  }
  browser.pause(2000);
  k.click(robot.KEY_F3);
  k.click(robot.KEY_ENTER);
  browser.pause(1000);
  tabIndex.forEach(function (index) {
    setTimeout(function () {
      k.click(robot.KEY_TAB);
      browser.pause(1000);
      if (index == times) {
        k.click(robot.KEY_ENTER);
        browser.pause(4000);
        callback();
      }
    }, 2000);

  });
}

function pastePath(callback) {
  var Keyboard = robot.Keyboard;
  var k = Keyboard();
  k.press(robot.KEY_CONTROL);
  browser.pause(1000);
  k.click(robot.KEY_V);
  browser.pause(1000);
  k.release(robot.KEY_CONTROL);
  browser.pause(1000);
  k.click(robot.KEY_ENTER);
  browser.pause(2000);
  callback();
}

function NavigateToFolderLocation(callback) {
  browser.pause(2000);
  FocusOnTopFolderNavigator(function () {
    browser.pause(2000);
    pastePath(function () {
      callback();
    })
  })
}

function FocusOnTopFolderNavigator(callback) {
  var Keyboard = robot.Keyboard;
  var k = Keyboard();
  setTimeout(function () {
    k.click(robot.KEY_F4);
    browser.pause(1000);
    k.press(robot.KEY_CONTROL);
    browser.pause(1000);
    k.click(robot.KEY_A);
    browser.pause(1000);
    k.release(robot.KEY_CONTROL);
    browser.pause(1000);
    k.click(robot.KEY_BACKSPACE);
    browser.pause(2000);
    callback();
  }, 4000);
}

function TypeFileName(filename, callback) {
  var Keyboard = robot.Keyboard;
  var k = Keyboard();
  var keystoke = [];
  FocusOnFileNameInput(function () {
    browser.pause(2000);
    for (var i = 0, len = filename.length; i < len; i++) {
      if (filename[i] == '_') {
        keystoke.push("KEY_SLASH");
      } else if (filename[i] == '-') {
        keystoke.push("KEY_MINUS");
      } else {
        keystoke.push("KEY_" + filename[i].toUpperCase());
      }
    }
    var count = keystoke.length;
    keystoke.forEach(function (key) {
      k.click(robot[key]);
      count = count - 1;
      if (count < 1) {
        k.click(robot.KEY_ENTER);
        callback();
      }
    });
  })
}

//********************************************************************************************/

/********************************************************************************************
 * Function Description: getText - it is used to get the text of web element label div, span, link etc.
 * Created Date : 07/18/2017
 * Created by : Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: return a string value (text associated with the web element)
 ********************************************************************************************/
function getText(locator, callback) {
  try {
    expectVisible(locator, function () {
      browser.wait(function () {
        return locator.getText();
      }, 8000).then(function (text) {
        callback(text);
      });
    });
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: getAttribute - it is used to get any attribute of web element like class, background, color, font size etc.
 * Created Date: 07/18/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName" , "attribute_name"
 * Output: return a string value (attribute value associated with the web element)
 ********************************************************************************************/
function verifyAttributeByLoc(locator, attr_name, expValue, callback) {
  try {
    expectVisible(locator, function () {
      return locator.getAttribute(attr_name);
    }, 10000).then(function (actValue) {
      expect(expValue === actValue);
      callback();
    });
  }
  catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: getAttribute - it is used to get any css attribute of web element like class, background, color, font size etc.
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName" , "css_attribute_name"
 * Output: return a string value (css attribute value associated with the web element)
 ********************************************************************************************/
function getCss(locator, attr_name, callback) {
  try {
    expectVisible(locator, function (locator) {
      browser.wait(function () {
        return locator.getCssValue(attr_name);
      }, 5000).then(function (text) {
        callback(text);
      });
    });
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: expectSelected - it is used to verify radio or check box is selected
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: pass the script if check box is selected else it will fail the script
 ********************************************************************************************/
function expectSelected(locator, callback) {
  try {
    expectVisible(locator, function (locator) {
      browser.wait(function () {
        return locator.isSelected();
      }, 5000).then(function (isSelected) {
        expect(isSelected);
        callback();
      });
    });
  }
  catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}
//
/********************************************************************************************
 * Function Description: getSelectedStatus - it is used to get boolean on radio or check box is selected or not
 * Created Date: 07/20/2017
 * Created by: Sudip Prasad
 * Input: "PageName|ObjectName"
 * Output: boolean
 ********************************************************************************************/
function getSelectedStatus(locator, callback) {
  try {
    expectVisible(locator, function (locator) {
      browser.wait(function () {
        return locator.isSelected();
      }, 5000).then(function (isSelected) {
        callback(isSelected);
      });
    });
  }
  catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: getInputBoxText - it is used to get the text of a input box or a text box or text area
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: return a string
 ********************************************************************************************/
function getInputBoxText(locator, callback) {
  try {
    expectVisible(locator, function (locator) {
      browser.wait(function () {
        return locator.getAttribute('value');
      }, 5000).then(function (txt) {
        callback(txt);
      });
    });
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: verifyText - it is used to verify the text equals in the web element locator provided
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script
 ********************************************************************************************/
function verifyText(locator, expected, callback) {
  try {
    expectVisible(locator, function () {
      browser.wait(function () {
        return locator.getText();

      }, 10000).then(function (actual) {
        expect(actual === expected);
        callback();
      });
    })
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: verifyTextNotPresent - it is used to verify the text is not presented in the web element locator provided
 * Created Date: 04/05/2018
 * Created by: Yugandhar Reddy
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script
 ********************************************************************************************/
function verifyTextNotPresent(locator, expected, callback) {
  try {
    expectVisible(locator, function () {
      browser.wait(function () {
        return locator.getText();

      }, 10000).then(function (actual) {
        expect(actual).not.contains(expected);
        callback();
      });
    })
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}
/********************************************************************************************
 * Function Description: verifyText - it is used to verify the text contains in the web element locator provided
 * Created Date: 02/28/2018
 * Created by: Yugandhar Reddy
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script..
 ********************************************************************************************/
function verifyTextContains(locator, expected, callback) {
  try {
    expectVisible(locator, function () {
      browser.wait(function () {
        return locator.getText();

      }, 10000).then(function (actual) {
        expect(actual.toLowerCase().trim()).contains(expected);
        callback();
      });
    })
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/********************************************************************************************
 * Function Description: verifyText - it is used to verify the text contains in the web element locator provided
 * Created Date: 03/19/2018
 * Created by: Narasimha Manthri
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script..
 ********************************************************************************************/
function verifyTagName(locator, expected, callback) {
  try {
    expectVisible(locator, function () {
      browser.wait(function () {
        return locator.getTagName();

      }, 10000).then(function (actual) {
        expect(actual === expected);
        callback();
      });
    })
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}
/********************************************************************************************
 * Function Description: verifyText - it is used to verify the input box text contains in the web element locator provided
 * Created Date: 07/19/2017
 * Created by: Sudip Prasad
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script
 ********************************************************************************************/
function verifyInputBoxText(locator, data, callback) {
  try {
    expectVisible(locator, function () {
      browser.wait(function () {
        return locator.getAttribute('value');
      }, 5000).then(function (txt) {
        expect(txt === data);
        callback();
      });
    });
  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}

/*******************************************************************************
 * Function Description: getElement - this function returns all WebElements
 * Created Date : 02/21/2018
 * Created by : Yugandhar Reddy
 * Input: locator in format "PageName|ObjectName"
 * Output: ElementArrayFinder
 *********************************************************************************/
function getElements(locator, callback) {
    browser.wait(function () {
      return element.all(locator);
    }, 5000).then(function (elements) {
      callback(elements);
    });

}


// /* Function to verify link----Gaurav Saikia-----*/
// function verifyLink(data, callback) {
//   try {
//     /*locatorects.getWebElement(locator, function (locator) {*/
//     //browser.getCurrentUrl().then(function(){
//     browser.wait(function () {
//       return browser.getCurrentUrl();
//     }, 5000).then(function (txt) {
//       console.log(txt);
//       expect(txt === data);
//       // callback();---on writting callback, it is giving error as callback is not a function
//     });
//     //});
//   } catch (e) {
//     expect(false);
//     console.log(e);
//     callback();
//   }
// }
var readCSV = function (filepath, callback) {
  var csvData = [];
  fs.createReadStream(filepath)
    .pipe(parse({delimiter: ':'}))
    .on('data', function (csvrow) {
      //do something with csvrow

      csvData.push(csvrow);
    })
    .on('end', function () {
      //do something wiht csvData
      callback(csvData);
    });
};
var readCSVByrow = function (filepath, rownum, callback) {
  var csvData = [];
  var count = 1;
  fs.createReadStream(filepath)
    .pipe(parse({delimiter: ':'}))
    .on('data', function (csvrow) {
      //do something with csvrow
      if (rownum == count) {
        callback(csvrow);

      }
      count++;
      // csvData.push(csvrow);
    });

};
function uploadFile(file, callback) {
  try {
    console.log("get file path : " + file);
    robot.setKeyboardDelay(500);
    /*robot.typeStringDelayed("\\", 40);
     robot.typeStringDelayed("\\", 40);*/
    browser.pause(2000);
    robot.typeString(file);
    robot.keyTap("enter");
    browser.pause(5000);


  } catch (e) {
    expect(false);
    console.log(e);
    callback();
  }
}
var fnRandomDate = function (callback) {
  fnRandomInteger(1, 30, function (day) {
    fnRandomInteger(3, 12, function (month) {
      fnRandomInteger(1999, 2014, function (year) {
        if (parseInt(day) < 10) {
          day = '0' + day;
        }
        if (parseInt(month) < 10) {
          month = '0' + month;
        }
        var date = day + "/" + month + "/" + year;
        callback(date);
      })
    })
  })
}
var readCSV = function (filepath, callback) {
  var csvData = [];
  fs.createReadStream(filepath)
    .pipe(parse({delimiter: ':'}))
    .on('data', function (csvrow) {
      //do something with csvrow

      csvData.push(csvrow);
    })
    .on('end', function () {
      //do something wiht csvData
      callback(csvData);
    });
};
var readCSVByrow = function (filepath, rownum, callback) {
  var csvData = [];
  var count = 1;
  fs.createReadStream(filepath)
    .pipe(parse({delimiter: ':'}))
    .on('data', function (csvrow) {
      //do something with csvrow
      if (rownum == count) {
        callback(csvrow);

      }
      count++;
      // csvData.push(csvrow);
    });

};
var getFileDataJSON = function (filepath, callback) {
  var jsonDataMap = {};
  var headerArray = [];
  readCSV(filepath, function (resultset) {
    console.log("the value of row from result set is  " + resultset.length);
    for (var i = 1; i < resultset.length; i++) {
      var temp = resultset.toString() === "" ? "" : (resultset[i].toString()).split(",");
      for (var j = 0; j < temp.length; j++) {
        if (i == 1) {
          jsonDataMap[temp[j]] = new Array();
          headerArray[j] = temp[j];
        } else {
          if (i != 1)                          //on the first row there is some question data
            jsonDataMap[headerArray[j]].push(temp[j]);
        }
      }
    }
    callback(jsonDataMap);
  });
}
/**************************************************/

/********************************************************************************************
 * Function Description: isInteger - it is used to check whether the supplied argument is integer or not - return boolean
 * Created Date: 07/19/2017
 * Created by: Sudip Prasad
 * Input: string value
 * Output: boolean
 ********************************************************************************************/
function isInteger(str, callback) {
  callback(/^\+?(0|[1-9]\d*)$/.test(str));
}


/*******************************************************************************
 * Description: Exporting available keyword to be used in the testing
 *******************************************************************************/
module.exports = {
  getElements: getElements,
  performClick: click,
  setText: setText,
  expectVisible: expectVisible,
  //expectNotVisible: expectNotVisible,
  getDisplayStatus: getDisplayStatus,
  expectEnabled: expectEnabled,
  expectDisabled: expectDisabled,
  dragNdrop: dragNdrop,
  getEnabledStatus: getEnabledStatus,
  getElementsCount: getElementsCount,
  selectByVisibleText: selectByVisibleText,
  getRandom: getRandom,
  getText: getText,
  verifyAttributeByLoc: verifyAttributeByLoc,
  getCss: getCss,
  expectSelected: expectSelected,
  getInputBoxText: getInputBoxText,
  verifyText: verifyText,
  verifyInputBoxText: verifyInputBoxText,
  getSelectedStatus: getSelectedStatus,
  uploadFile: uploadFile,
  getTodaysDate: getTodaysDate,
  isInteger: isInteger,
  //verifyLink: verifyLink,
  expectInvisible: expectInvisible,
  expectNotPresent: expectNotPresent,
  expectPresent: expectPresent,
  scrollToelementPosition: scrollToelementPosition,
  getFileDataJSON: getFileDataJSON,
  //readDataFromExcel: readDataFromExcel,
  //readExcelSheetName: readExcelSheetName,
  readCSVByrow: readCSVByrow,
  verifyTextContains, verifyTextContains,
  elementClickable: elementClickable,
  getAllWindowHandles: getAllWindowHandles,
  switchToWindow: switchToWindow,
  getUserHome: getUserHome,
  verifyTagName: verifyTagName,
  getCurrMonth: getCurrMonth,
  getCurrYear: getCurrYear,
  getCurrMonthName: getCurrMonthName,
  verifyTextNotPresent:verifyTextNotPresent
};
