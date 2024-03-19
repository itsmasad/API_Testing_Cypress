module.exports = (on, config) => {
    on('before:browser:launch', (browser, launchOptions) => {
        console.log('Cypress is launching the browser...');
    });
};

setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
  }