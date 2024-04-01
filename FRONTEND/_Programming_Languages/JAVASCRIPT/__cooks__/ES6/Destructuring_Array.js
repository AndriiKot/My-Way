const [a, b] = [1, 2];

console.log(a); // 1
console.log(b); // 2

cosnt [x, y] = [1, 2, 3, 4, 5, 6];
console.log(x); // 1
console.log(y); // 2

const [ , , third, ...other] = [1, 2, 3, 4, 5, 6];
console.log(third); // 3
console.log(other); // [4, 5, 6]  

const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]



let value1 = 11;
let value2 = 22;

[value1, value2] = [value2, value1];
console.log(value1); // 22
console.log(value2); // 11