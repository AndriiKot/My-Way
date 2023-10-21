"use strict";

const fn1 = () => {
    console.log("Hello, fn1");
};

const fn2 = () => {
    console.log('Hello, fn2');
};

const fn3 = () => {
    console.log('Hello, fn3');
};

fn1(fn2(fn3()));