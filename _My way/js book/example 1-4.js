'use strict';
// Example 1
console.log('\nExample 1\n');

const values = {
  name: 'Mouse',
  price: 25,
  stock: false,
  avg: (a, b) => (a + b) / 2n,
  reference: null,
  primitive: undefined,
  numbers: [NaN, Infinity],
};

for (const key in values) {
  console.log(`${key} type of: ${typeof values[key]}`);
}

// Example 2
console.log('\nExample 2');

const cnt = 1_000_000_000;

const fn1 = (a = 0, b = 0) => a + b;

const fn2 = (a, b) => {
  a = a || 0;
  b = b || 0;
  return a + b;
};

console.log(`\n${fn1}: `);
console.log(`repetitions: ${cnt}`);

console.time();
for (let i = 0; i < cnt; i++) {
  fn1(3, 4);
}
console.timeEnd();

console.log(`\n${fn2}: `);
console.log(`repetitions: ${cnt}`);

console.time();
for (let i = 0; i < cnt; i++) {
  fn2(3, 4);
}
console.timeEnd();

// Example 3
console.log('\nExample 3\n');

const myArray = [11, 22, 33, 44];

for (const element of myArray) {
  console.dir(element);
}

let count = 0;
for (const element of myArray) {
  count += element;
}
console.log(`Total: ${count}`);

// 4. Создайте асинхронную функцию, вызовете её и присвойте значение в переменную и напечатайте результат в консоль.
console.log('\nExample 4\n');
const fn3 = () => {
  console.log(`Hello I am not async function:\n ${fn3}!`);
};

console.log(fn3());

const fn4 = async () => {
  console.log(`Hello I am  async function:\n ${fn4}!`);
};

const main = async () => {
  const rest = await fn4();
  return rest;
};

console.log(main());
