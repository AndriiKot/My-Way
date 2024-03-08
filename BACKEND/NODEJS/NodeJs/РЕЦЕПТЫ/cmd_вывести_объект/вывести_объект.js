
// console.dir(obj, { depth: null });

//Example

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboadrd', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ],
  Textile: [
    { name: 'Bag', price: 50 },
  ],
 };


console.log(purchase);  // corect
console.dir(purchase);  // corect
console.dir(purchase, { depth: null });   // corect


console.log({ purchase }); // [Object] !!!!



