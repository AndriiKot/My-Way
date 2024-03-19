const fs = require('fs');
fs.readFile('../array/map_and_filter.js',
(err, text) => {
    console.log('Length: ', text.length)
});

fs.readFile('./test.txt',
(err, text) => {
    console.log('Length: ', text.length)
});