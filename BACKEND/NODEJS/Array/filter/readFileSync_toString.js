"use strict";

const fs = require("node:fs");

const data = fs.readFileSync(__filename, "utf-8");
const lines = data.split("\r\n").filter(line => !!line);

console.log(lines);
