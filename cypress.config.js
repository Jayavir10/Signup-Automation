const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    video: true,
    env: {
      API_KEY: process.env.API_KEY,
    },
  },
});
