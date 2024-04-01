﻿const createPersonOLD = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

const createPersonNEW = (name, age, gender) => ({
  name,
  age,
  gender,
});

console.log(createPersonOLD("Zodiac Hasbro", 56, "male"));
console.log(createPersonNEW("Erik Graf", 89, "male"));
