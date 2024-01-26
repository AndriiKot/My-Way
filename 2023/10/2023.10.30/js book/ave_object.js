'use strict';

const marcus = { name: 'Marcus Aurelius' };
const mao = { name: 'Mao Zedong' };
const cartesius = { name: 'Rene Descartes' };

const welcome = (person) => {
    console.log(`Ave, ${person.name}`);
};

welcome(marcus);
welcome(mao);
welcome(cartesius);

