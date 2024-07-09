'use strict';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve Promise");
    // reject(new Error('Custom erro'));
    }, 0);
});

console.dir(promise);    // Promise { <pending> }


promise.then((value) => {
  console.log({ value });
}, (error) => {
  console.error(error);
});                      // { value: 'resolve Promise' }


// Out
// Promise { <pending> }
// { value: 'resolve Promise' }





