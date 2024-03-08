'use strict';

const welcome = (person) => {
  console.log(`Ave, ${person.name}!`);
};

const persons = {
  marcus: { name: 'Marcus Aurelius' },
  mao: { name: 'Mao Zedong' },
  rene: { name: 'Rene Descartes' },
};

for (const person in persons) {
  welcome(persons[person]);
}

