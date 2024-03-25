"use strict";

const fs = require("node:fs");

const calculate = () => {
  fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) throw new Error(err);
    const arr = data.split("\r\n");
    console.log(arr); // [ '12', '13.05', '23.10', '56.15', '34.05', '' ]
  });
};

calculate();
