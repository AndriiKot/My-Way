"use strict";

const fs = require("node:fs");

fs.readFile("readFile_writeFile_Async.js", "utf8", (err, data) => {
  if (err) throw err;
  console.log("console.log  1");
  const lines = data.split("\r\n").filter((line) => !!line);
  const content = lines.join("\r\n");
  fs.writeFile("readFile_writeFile_Async.txt", content, (err) => {
    if (err) throw err;
    console.log("console.log  2");
  });
  console.log("console.log  3");
});

console.log("console.log  4");
