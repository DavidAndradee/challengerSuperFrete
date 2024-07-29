const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://web.superfrete.com',
    defaultCommandTimeout: 10000,
  },
});
