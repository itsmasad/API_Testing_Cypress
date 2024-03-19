module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
    // on('before:browser:launch', (browser, launchOptions) => {
    //     console.log('Cypress is launching the browser...');
    // });
};