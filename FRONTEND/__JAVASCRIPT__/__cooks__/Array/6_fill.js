﻿"use strict";

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  const failureItems = new Array(arr.length).fill('');     /// DANGER !!! not optimized ///

  arr.forEach((element,index) => {
    failureItems[index] =`<li class="text-warning">${element}</li>`;
  });

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

// оптимизация 
