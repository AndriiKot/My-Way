"use strict";

const fs = require("node:fs");

// Alias 1
// const data = fs.readFileSync('1_readFileSyncExample.txt','utf-8');
// console.log(`Data length: ${data.length}`);
// console.log(data);

// $:
//Data length: 13
// ...

// Alias 2
// const data = fs.readFileSync('./1_readFileSyncExample.txt','utf-8');
// console.log(`Data length: ${data.length}`);
// console.log(data);

const data = fs.readFileSync('readFileSync.js', "utf-8");
console.log(`Data length: ${data.length}`);
console.log(data);
