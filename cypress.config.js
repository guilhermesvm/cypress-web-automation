const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3nk9n8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
});
