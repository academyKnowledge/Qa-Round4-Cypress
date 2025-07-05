const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
       on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com",
    // viewportHeight : 550,
    // viewportWidth: 550
    // watchForFileChanges : false,
    screenshotOnRunFailure : false,
    screenshotsFolder:"MyScreenshots",
    trashAssetsBeforeRuns:false,
    video:true,
    videosFolder:"MyVideos",
    videoCompression:0,
    reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    }
  },
});