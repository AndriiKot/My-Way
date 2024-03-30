'use sctrict';

const person = ['andrii','oksana'];

const manager_1 = structuredClone(person);


console.log(person); // ['andrii','oksana']
console.log(manager_1); // ['andrii','oksana']

console.log(person === manager_1);              // false
console.log(person == manager_1);               // false
console.log(Object.is(person, manager_1));      // false








