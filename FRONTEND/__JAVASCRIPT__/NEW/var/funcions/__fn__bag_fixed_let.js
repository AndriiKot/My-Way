﻿// let
function checkScope() {
  let i = "function scope";
  {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// Block scope i is:  block scope
// Function scope i is:  function scope

checkScope();
