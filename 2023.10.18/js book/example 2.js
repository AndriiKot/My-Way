"use strict";

const fn1 = (a = 0,b = 0) => (a + b);
const fn2 = (a,b) => { 
    a = a || 0;
    b = b || 0;
    return a + b
};

const counter = 1_000_000;

const testTime = (n,fn) => {
    console.dir(fn);

    console.time();
        for(let i = 0; i < n; i++){
            fn();
        }
    console.timeEnd();
};

testTime(counter,fn1);
testTime(counter,fn2);