'use strict';

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};
// 7
const electronics = purchase.Electronics;
console.log(electronics);

const textile = purchase['Textile'];
console.log(textile);

//8
const bag = textile[0];
console.log(bag);

const price = electronics.at(-1).price;
console.log(price);

// 9
const json = JSON.stringify(purchase);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);


