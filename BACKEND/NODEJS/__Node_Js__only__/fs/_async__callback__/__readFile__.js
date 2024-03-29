'use strict';

const fs = require('node:fs');

const stats = (files, done) => {
  const result = {};
  for (const file of files) {
    fs.lstat(file, (err, stat) => {
      result[file] = { err, stat };
      const count = Object.keys(result).length;
      if (count === files.length) done(result);
    });
  }
};

const files = ['1_test.js', '2_test.js', '3_test.js'];
stats(files, console.dir);