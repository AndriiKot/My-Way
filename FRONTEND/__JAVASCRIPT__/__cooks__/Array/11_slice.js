const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Исходный массив не будет изменен.
const slice = arr.slice(2, 6);
console.log(slice);         //  [ 3, 4, 5, 6 ]
console.log(arr);           //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// возвращает неглубокую копию массива
const slice1 = arr.slice();
console.log(slice1);        //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

slice1[1] = 100;
console.log(arr);           //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(slice1);        //  [ 1, 100, 3, 4, 5, 6, 7, 8, 9, 10 ]

// возвращает копию массива начиная с определенного индекса
const slice2 = arr.slice(2);
console.log(slice2);        //  [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(arr);           //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// !!! изменения исходного массива !!! 
const slice3 = arr.slice();
console.log(slice3);        //  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

slice3.slice(2,6, 100, 111, 222);
console.log(slice3);

// SPREAD
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

const arr_spread = [111, 222, 333, 444];

numbers.splice(startIndex, amountToDelete, ...arr_spread);
console.log(numbers);

// [10, 11, 12, 111, 222, 333, 444, 15];


function forecast(arr) {
  arr = arr.slice(2, 4);
  return arr;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);  // [ 'warm', 'sunny' ]








