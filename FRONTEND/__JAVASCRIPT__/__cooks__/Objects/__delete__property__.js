﻿// Setup
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line

delete myDog["tails"];


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

console.log(foods);      //  apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }

delete foods.oranges;
delete foods.plums;
delete foods['strawberries'];

console.log(foods);     //  apples: 25, bananas: 13, grapes: 35 }

