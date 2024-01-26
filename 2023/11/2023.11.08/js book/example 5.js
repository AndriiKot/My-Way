"use strict";

const ArrayPricesTest = [11, 22, 55, 33];
const MAX_PURCHASE = 2000;

const calculateTotal = (prices) => {
  let amount = 0;
  if (!Array.isArray(prices)) throw "Array expected";
  for (const price of prices) {
    amount += price;
  }
  return amount;
};

console.dir(calculateTotal(ArrayPricesTest));

module.exports = { MAX_PURCHASE, calculateTotal };
