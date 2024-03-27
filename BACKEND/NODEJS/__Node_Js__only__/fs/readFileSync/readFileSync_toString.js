"use strict";

const fs = require("node:fs");

const data = fs.readFileSync("readFileSync.js", "utf-8");

console.log(data.split("\r\n").filter(line => !!line));
