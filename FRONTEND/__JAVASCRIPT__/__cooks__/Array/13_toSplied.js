
const arrIntegers = Array.from({ length: 10 }, (v, k) => k);

console.log("toSpliced()" + "=".repeat(30));
console.log(arrIntegers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// toSpliced() - создает копию массива начиная с определенного индекса и обрезает до указанного числа

const copyArrayIntegers = arrIntegers.toSpliced(-2, 2)
console.log(`copyArrayIntegers: [${copyArrayIntegers}]`);                 // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(`arrIntegers: [${arrIntegers}]`);                            // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("splice()" + "=".repeat(30));


// splice() 
const copyArrayIntegers2 = arrIntegers.splice(-2, 2)
console.log(`copyArrayIntegers: [${copyArrayIntegers2}]`);                // [ 8, 9 ]
console.log(`arrIntegers: [${arrIntegers}]`);                            // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
