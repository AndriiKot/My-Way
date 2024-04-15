const arr1 = Array.from({ length: 5 }, (v, k) => k);
console.log(arr1); // [0, 1, 2, 3, 4]

const arr2 = Array.from([1, 2, 3], (x) => x + x);
console.log(arr2); // [2, 4, 6]

const arr3 = Array.from({ length: 5 }, () => "");
console.log(arr3); // ["", "", "", "", ""]

