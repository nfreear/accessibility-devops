/**
 * Cypress configuration
 *
 * @see https://docs.cypress.io/guides/references/configuration
 */

// import { defineConfig } from 'cypress';
const { defineConfig } = require('cypress');

const ENV_SPEC = process.env._SPEC;
const PORT = 8080;

module.exports = defineConfig({
  // Re-enable if you want to see videos of the tests.
  video: false,
  videosFolder: 'cypress/results',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit.[hash].xml',
    toConsole: false
  },
  screenshotsFolder: 'cypress/results/screenshots',
  // Disable Google Analytics, tag manager, translation services.
  blockHosts: [
    '*googletagmanager.com',
    '*googleapis.com'
  ],
  e2e: {
    specPattern: specPatternFromEnv(ENV_SPEC),
    supportFile: 'cypress/support/e2e.js',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    /* setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }, */
    setupNodeEvents (on, config) {
      on('task', {
        log (message) {
          console.log(message);

          return null;
        },

        table (message) {
          console.table(message);

          return null;
        }
      });
    },
    baseUrl: `http://localhost:${PORT}`
  }
});

function specPatternFromEnv (_spec) {
  console.log('>> env._spec:', _spec);

  const SPEC = _spec && /^(PASS|FAIL)/i.test(_spec) ? _spec.toLowerCase() : '';

  return `cypress/e2e/**/${SPEC}*.cy.{js,jsx,ts,tsx}`;
}

// export default cypressConfig;
