const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'zoq1di',
  videos: false,
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
