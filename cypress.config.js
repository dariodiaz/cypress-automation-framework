const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "zoq1di",
  videos: false,
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require("./cypress/plugins/index.js")(on, config);
      allureWriter(on, config);
      return config;
    },
  },
});
