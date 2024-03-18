const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Here you can set the default timeout
  defaultCommandTimeout:10000,
  // This will wait 10 seconds to load the page
  pageLoadTimeout:10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
