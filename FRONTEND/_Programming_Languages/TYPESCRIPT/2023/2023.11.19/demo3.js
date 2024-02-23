"use strict";
function myFunc(arg1, arg2) {
    console.log(arg1, arg2);
    return [arg1, arg2];
}
var result = myFunc("123", { name: "Andrii", age: 37 });
console.log(result);
