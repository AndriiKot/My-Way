'use sctrict';

const managers =  ['Andrii', 'Roma', 'Dima', 'Nikita'];

const group = [...managers];

group[3] = 'Oksana';

console.log(managers); // !!!  ['Andrii', 'Roma', 'Dima', 'Nikita']
console.log(group);    // !!!  ['Andrii', 'Roma', 'Dima', 'Oksana']









