/**
 *
 * @copyright © Nick Freear, 30-July-2024.
 * @see https://opensource.com/article/23/2/automated-accessibility-testing
 * @see https://gitlab.com/civicactions/accessibility
 * @see https://stackoverflow.com/questions/12871740/how-to-detach-a-spawned-child-process-in-a-node-js-script
 * @see https://stackoverflow.com/questions/47881223/running-http-server-in-background-from-an-npm-script
 */

// #!/usr/bin/node

import * as FS from 'fs';
import * as CP from 'child_process';
// const FS = require('fs');
// const CP = require('child_process');

const out = FS.openSync('./out.log', 'a');
const err = FS.openSync('./out.log', 'a');

const child = CP.spawn('servor', ['./pages', 8080], { detached: true, stdio: [ 'ignore', out, err ] });
/*
var MANFILE='ALengthyNodeManual.pdf';
var child = cp.spawn('gnome-open', [MANFILE], { detached: true, stdio: [ 'ignore', out, err ] });
*/
child.unref();

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
