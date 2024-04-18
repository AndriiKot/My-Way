"use strict";

const fs = require("node:fs");

const calculate = () => {
  fs.readFile("./__data__.txt", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const arr = data
      .split("\r\n")
      .filter((e) => e)
      .map((e) => parseFloat(e))
      .reduce((curr, next) => curr + next);
    console.log(arr); // 138.35000000000002
  });
};

calculate();


function findLongestWordLength(str) {
  const arr = str.split(" ").map((str) => str.length);
  const maxString = arr.reduce((a, b) => Math.max(a, b));
  console.log("MAX LENGTH: " + maxString);
  return maxString;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
