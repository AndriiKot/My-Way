'use strict';

let name = 'Nikita';
const nameTwo = name;

name = 'Andrii';

console.log(name); // 'Andrii'
console.log(nameTwo); // 'Nikita'

let ageName = 25;
const ageNameTwo = ageName;

ageName = 38;

console.log(ageName); // 38
console.log(ageNameTwo); // 25
