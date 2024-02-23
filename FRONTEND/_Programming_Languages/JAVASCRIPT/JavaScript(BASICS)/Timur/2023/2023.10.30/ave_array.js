"use strict";

const persons = [
  { name: "Marcus Aurelius" },
  { name: "Mao Zedong" },
  { name: "Rene Descartes" },
];

const welcome = (person) => {
  console.log(`Ave ${person.name}!`);
};

for (const person of persons) {
  welcome(person);
}
