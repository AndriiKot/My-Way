"use strict";
let x = JSON.parse('23'); // : any
console.log(x); // 
let y = JSON.parse('23'); // : number
console.log(y); // number
console.log(typeof (y)); // number
