﻿var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

console.log(maximus);

const maximusNewStyle = Math.max(...arr)

console.log(maximusNewStyle);


// SPLICE
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

const arr = [111, 222, 333, 444];

numbers.splice(startIndex, amountToDelete, ...arr);
console.log(numbers);

// [10, 11, 12, 111, 222, 333, 444, 15];
