'use strict';

const {readFile} = require('node:fs/promises');

readFile(__filename, 'utf-8')
    .then((content) => console.log(content));

