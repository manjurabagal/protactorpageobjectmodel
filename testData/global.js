module.exports = {
  TestingEnvironment: process.env.TEST_ENV || "QA",
  // isApplicationAngular: true,
  veryShortWait: 1500,
  shortWait: 4000,
  longWait: 7000,
  veryLongWait: 30000,
  rootElement: '.ctbm-app',

  appURL: {
    QA: 'https://usdfw14as184v.gisqa.mercer.com:10491',
    DEV: 'xxxx',
    PROD: 'xxxxxxx'
  },
  testData: {
    logoTitle:'MARKET PRICER',
    jobDetails: {
      jobFamilyName: 'Exploration and Production',
      jobSubFamilyName: 'Contract Administration',
      jobCurrency: '£',
      taggedJobRecord: "div[class^='showondesk holderdiv']",
      jobSearchKeyword: 'Analyst',
      jobSubFamilyList: ['PROJECT CONTROLS', 'COST ESTIMATING', 'PROJECT MANAGEMENT', 'SUPPLY & LOGISTICS', 'CONTRACT ADMINISTRATION', 'DOCUMENT CONTROL', 'HEALTH & SAFETY'],
      monthList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      yearList:['2017','2018','2019']
    }
  },
  webMailURL: 'http://mail_mercer.com/owa/5014/',

  users: {
    QA: {
      generalUser: {
        email: 'yugandhar.gorrepati@mercer.com',
      },


      specificUser: {
        username: 'xxxxxxxxxx',
        password: 'xxxxxxxxxx'
      },

 
     adminUser: {
        username: 'xx',
        password: 'xxx'
      }
    },

    DEV: {
      generalUser: {
        username: 'xxxxxxxxx',
        password: 'xxxxxxxxx'
      },

      specificUser: {
        username: 'xxxxxxxxxx',
        password: 'xxxxxxxxxxxx'
      }
    },

    PROD: {
      generalUser: {
        username: 'xxxxxxxxx',
        password: 'xxxxxxxxx'
      },

      specificUser: {
        username: 'xxxxxxxxxx',
        password: 'xxxxxxxxxxxx'
      }
    }
  }

};
