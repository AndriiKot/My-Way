'use sctrict';

const managers =  ['Andrii', 'Roma', 'Dima', 'Nikita'];

const group = [...managers];

group[3] = 'Julia';

console.log(managers); // !!!  ['Andrii', 'Roma', 'Dima', 'Nikita']
console.log(group);    // !!!  ['Andrii', 'Roma', 'Dima', 'Julia']









