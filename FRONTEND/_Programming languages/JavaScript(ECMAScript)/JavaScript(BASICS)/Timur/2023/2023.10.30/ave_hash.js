"use strict";

const persons = {
  marcus: { name: "Marcus Aurelius" },
  mao: { name: "Mao Zedong" },
  rene: { name: "Rene Descartes" },
};

const welcome = (person) => {
  console.log(`Ave, ${person.name}!`);
};

for (const name in persons) {
  const person = persons[name];
  welcome(person);
}
