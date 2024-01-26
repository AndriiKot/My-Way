'use strict';

const person = {
    name: 'Andrii',
    age: 38,
}

const manager = structuredClone(person);
manager.age = 29;

console.log(person); // { name: 'Andrii', age: 38 }
console.log(manager); // { name: 'Andrii', age: 29 } 




