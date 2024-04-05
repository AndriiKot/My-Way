function checkScope() {
  var i = "function scope";
  // !!! BAG !!!!
  {
    var i = "block scope";
    console.log("Block scope i is: ", i);
  }
  // !!!! BAG !!!!
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();

// Block scope i is:  block scope
// Function scope i is:  block scope
