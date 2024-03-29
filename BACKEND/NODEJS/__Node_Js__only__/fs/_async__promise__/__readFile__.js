'use strict';

const fs = require('node:fs').promises;

const fileNames = ['1_test.js', '2_test.js', '3_test.js'];
const promises = fileNames.map((fileName) => fs.lstat(fileName));
Promise.allSettled(promises).then(console.dir);

