"use strict";
var first_var = 'I am string';
var second_var = 143;
var isOld = false;
var some_var3 = null;
var some_var4 = undefined;
var first_array = [
    first_var,
    second_var,
    isOld,
    some_var3,
    some_var4
];
for (var index in first_array) {
    console.dir(first_array[index]);
}
;
