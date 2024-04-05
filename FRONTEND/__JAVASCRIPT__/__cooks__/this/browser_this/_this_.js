// Browsers
// Example 1
console.log(this); // Window

// Example 2
function thisFn() {
  console.log(this);
}

thisFn(); //Window
window.thisFn(); // Window
// thisFn() аналогично window.thisFn() при вызове в допнотаци this равен
// объекту который стоит перед точкой вызова функции.

// Example 3
function thisFnCallback() {
  return testContext;
}

thisFnCallback()(); // Window
// функции testContext берёт 'this' из контекста вызова функции а 
// та в свою очередь берёт 'this' из контекста вызова функции.

function thisFnFn() { return thisFn() }

thisFnFn(); // Window

const xxx = { name: 'Andrii'}

function y() {
  console.log(this);
}

const bb = () => {
  console.log(this);
}
 const z = y.bind(xxx)
 const zz = bb.call(xxx)

 z()
 console.log(zz)