const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Here you can set the default timeout
  defaultCommandTimeout:10000,
  // This will wait 10 seconds to load the page
  pageLoadTimeout:10000,
  // Setting viewport size
  viewportHeight:890,
  viewportWidth:424,

  // Mocha Reporter plugin configration
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  "retries":{
    "runMode":3,
    "openMode":2
},
"chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
