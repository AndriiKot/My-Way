"use strict";

function myFunc(arg1: string, arg2: { name: string; age: number }) {
  console.log(arg1, arg2);
  return [arg1, arg2];
}

const result = myFunc("123", { name: "Andrii", age: 37 });
console.log(result);

