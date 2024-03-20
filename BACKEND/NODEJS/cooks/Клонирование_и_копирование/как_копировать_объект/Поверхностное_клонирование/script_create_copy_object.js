'use strict';

const person = {
  name: 'Roma',
  age: 33,
}


const manager_1 = Object.create(person);
manager_1.age = 39;


console.dir({person});   // { person: { name: 'Roma', age: 33 } }
console.dir({manager_1}); // { manager_1_2: { name: 'Roma', age: 39 } }









