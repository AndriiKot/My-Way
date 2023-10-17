"use strict";
function myFirstFunction(arg1, arg2) {
    console.dir([arg1, arg2]);
    return arg2.weight;
}
;
var result = myFirstFunction('cat', { name: 'Lubchick', weight: 5 });
console.dir(result);
