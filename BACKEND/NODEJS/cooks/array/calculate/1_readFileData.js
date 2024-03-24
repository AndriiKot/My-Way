"use strict";

const fs = require("node:fs");

const calculate = () => {
  fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) throw new Error(err);
    console.log(data);
  });
};

calculate();
