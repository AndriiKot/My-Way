﻿function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) return [];
  const arr = rangeOfNumbers(startNum, endNum - 1);
  arr.push(endNum);
  return arr;
}


console.log(rangeOfNumbers(2, 9));

console.log(rangeOfNumbers(1, 5));
