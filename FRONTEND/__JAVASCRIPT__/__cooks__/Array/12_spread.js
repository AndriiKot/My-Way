
// 1
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];


// 2
const managers =  ['Andrii', 'Roma', 'Dima', 'Nikita'];
const group = [...managers];

group[3] = 'Olga';

console.log(managers); // !!!  ['Andrii', 'Roma', 'Dima', 'Nikita']
console.log(group);    // !!!  ['Andrii', 'Roma', 'Dima', 'Olga']



