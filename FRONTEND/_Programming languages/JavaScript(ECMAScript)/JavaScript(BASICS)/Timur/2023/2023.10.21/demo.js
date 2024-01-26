"use strict";

const fn1 = (fn) => {
    fn();
    console.log("Hello, fn1");
};

const fn2 = (fn) => {
    fn();
    console.log('Hello, fn2');
};

const fn3 = () => {
    console.log('Hello, fn3');
};

console.log('Old syntax: ');
fn1(fn2(fn3()));

console.log('New syntax: ');

await fn3();
await fn2();
await fn1();

function(){let a = 10;

}


