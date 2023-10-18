"use strict";

const fn1 = (a = 0,b = 0) => (a + b);
const fn2 = (a,b) => { 
    a = a || 0;
    b = b || 0;
    return a + b
};

console.dir(fn1(1,3));
console.dir(fn2(4,2));