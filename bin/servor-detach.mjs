/**
 * Start "servor" process in detached mode.
 *
 * @copyright © Nick Freear, 30-July-2024.
 * @see https://opensource.com/article/23/2/automated-accessibility-testing
 * @see https://gitlab.com/civicactions/accessibility
 * @see https://stackoverflow.com/questions/12871740/how-to-detach-a-spawned-child-process-in-a-node-js-script
 * @see https://stackoverflow.com/questions/47881223/running-http-server-in-background-from-an-npm-script
 */

import * as FS from 'fs';
import * as CP from 'child_process';

const PORT = 8080;

const out = FS.openSync('./servor.log', 'w');
const err = FS.openSync('./servor.log', 'w');

const child = CP.spawn('servor', ['./pages', PORT], { detached: true, stdio: [ 'ignore', out, err ] });

child.unref();

sleep(1000);

function sleep (timeoutMS = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('foo'), timeoutMS);
  });
}

/* const servor = require('servor');

(async () => {
  const instance = await servor({
    root: './pages',
    fallback: 'index.html',
    module: false,
    static: false,
    reload: false,
    inject: '',
    credentials: null,
    port: 8080,
  });

  console.log(instance);
})();
*/
