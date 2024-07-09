
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resovle Promise');
    reject(new Error('reject Promise'));
  }, 2000);
});

console.dir({ promise });   // { promise: Promise { <pending> } }

promise.then((value) => {
  console.log(value);
}, (error) => {
  console.error(error);
});                        // Error: reject Promise     !! 2 sec. !!



// { promise: Promise { <pending> } }
// Error: reject Promise
// ...
    