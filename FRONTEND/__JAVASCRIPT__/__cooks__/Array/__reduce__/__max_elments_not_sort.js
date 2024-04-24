
const arr = Array.from({length: 1_000_000}, () => 0);

// console.log(arr);  test

arr[1_000_000] = 100;

// !!! const max = Math.max(...arr);   RangeError: Maximum call stack size exceeded   !!!

const max = arr.reduce((a,b) => (a > b ? a : b));
console.log(max);

