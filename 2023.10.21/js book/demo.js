"use strict";

// const fn1 = (text, (data) => {
//  const fn3 = (data,(newData) => {
//    const fn3 = (newData,() => {
//         console.log('fn3')
//     });
//   });
// }) => {};

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