/**
 * 
 The node:worker_threads module enables the use of threads that execute JavaScript in parallel. To access it:

const worker = require('node:worker_threads');
Workers (threads) are useful for performing CPU-intensive JavaScript operations. They do not help much with I/O-intensive
 */

import { parentPort } from 'worker_threads';

let counter = 0;
for (let index = 0; index < 20_000_000_000; index++) {
  counter++;
}

parentPort.postMessage(counter);
