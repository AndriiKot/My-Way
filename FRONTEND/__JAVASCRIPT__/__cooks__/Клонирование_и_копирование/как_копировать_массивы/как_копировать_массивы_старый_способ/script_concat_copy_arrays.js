'use sctrict';

const managers =  ['Andrii', 'Roma', 'Dima', 'Nikita'];

const group = [].concat(managers);

group[3] = 'Olga';

console.log(managers); // !!!  ['Andrii', 'Roma', 'Dima', 'Nikita']
console.log(group);    // !!!  ['Andrii', 'Roma', 'Dima', 'Olga']









