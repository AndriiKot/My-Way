"use strict";

const fs = require("node:fs");

const calculate = () => {
  fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const arr = data
      .split("\r\n")
      .filter((e) => e)
      .map((e) => parseFloat(e))
      .reduce((curr, next) => curr + next)
      .toFixed(2);
    console.log(arr); // 138.35
  });
};

calculate();
