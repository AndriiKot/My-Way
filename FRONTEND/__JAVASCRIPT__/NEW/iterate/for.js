// Setup
const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// [1, 3, 5, 7, 9]
console.log(myArray);

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
// [0, 2, 4, 6, 8]
console.log(ourArray);


const myArray2 = [];

for (let i = 1; i < 10; ++i) {
  myArray2.push(i);
}
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myArray2);

const myArray3 = [];

for (let i = 9; i > 0; i -= 2) {
  myArray3.push(i)
}

// [9, 7, 5, 3, 1]
console.log(myArray3);
