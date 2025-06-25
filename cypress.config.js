const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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