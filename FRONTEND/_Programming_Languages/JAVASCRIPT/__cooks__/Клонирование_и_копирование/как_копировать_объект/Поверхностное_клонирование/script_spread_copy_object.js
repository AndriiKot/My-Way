'use strict';

const person = {
  name: 'Roma',
  age: 33,
}


const manager_1 = {...person};
manager_1.age = 39;

const manager_2 = {...person, name: 'Andrii', age: 38, height: 1.87 };

console.dir({person});   // { person: { name: 'Roma', age: 33 } }
console.dir({manager_1}); // { manager_1_2: { name: 'Roma', age: 39 } }
console.dir({manager_2}); // { manager: { name: 'Andrii', age: 38, heigth: 1.87 } }









