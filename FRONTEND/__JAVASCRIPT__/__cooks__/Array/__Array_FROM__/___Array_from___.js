function countBy1(x, n) {
  const arr = Array.from({ length: n }, (_, i, step = x) => ((i * step) + x));
  return arr;
}

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)


const arr1 = Array.from({ length: 5 }, (v, k) => k);
console.log(arr1); // [0, 1, 2, 3, 4]


const reverseSeq = (n) => {
  return Array.from({length: n}, (v, k) => n - k);
}
console.log(reverseSeq(5)) // [5, 4, 3, 2, 1]


const arr2 = Array.from([1, 2, 3], (x) => x + x);
console.log(arr2); // [2, 4, 6]


const arr3 = Array.from({ length: 5 }, () => "");
console.log(arr3); // ["", "", "", "", ""]

