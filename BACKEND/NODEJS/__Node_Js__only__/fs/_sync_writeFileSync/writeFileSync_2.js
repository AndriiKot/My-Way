"use strict";

const fs = require("node:fs");

const data = fs.readFileSync("1_readFileSync.txt", "utf8");
const lines = data.split("\r\n").filter((line) => !!line);

fs.writeFileSync("1_readFileSync.txt", lines.join("\r\n"));
