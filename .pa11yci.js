/**
 * Pa11y-ci configuration.
 *
 * @copyright © Nick Freear, 30-July-2024.
 * @see https://opensource.com/article/23/2/automated-accessibility-testing
 * @see https://gitlab.com/civicactions/accessibility
 */

const PORT = 8080;
const executablePath = process.env.CI ? '/usr/bin/google-chrome' : null;

module.exports = {
  defaults: {
    standard: 'WCAG2AA',
    chromeLaunchConfig: {
      executablePath,
      args: ['--disable-dev-shm-usage', '--no-sandbox', '--disable-gpu']
    },
    viewport: {
      width: 320,
      height: 480,
      deviceScaleFactor: 2,
      isMobile: true
    }
  },

  urls: [
    `http://127.0.0.1:${PORT}/pass.html`,
    `http://127.0.0.1:${PORT}/fail.html`
  ]
};
