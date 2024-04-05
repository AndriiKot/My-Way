'use sctrict';

const person = {
  name: 'Roma',
  age: 33,
}

const manager = person;
manager.age = 39;

console.dir({person});  // { person: { name: 'Roma', age: 39 } } !!!
console.dir({manager}); // { manager: { name: 'Roma', age: 39 } } !!!










