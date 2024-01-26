'use strict';

const element_div = document.querySelector("#header");
const element_b = document.querySelector('div#header.centered p.marked > b');

console.log('.outerHTML: ');
console.log(element_div.outerHTML);
console.log(element_b.outerHTML);

console.log('\n\n.innerHTML: ');
console.log(element_div.innerHTML);
console.log(element_b.innerHTML);



console.log('\n\n.innerText: ');
console.log(element_div.innerText);
console.log(element_b.innerText);

const fruits = document.querySelector("#list_fruits");

console.dir(fruits);

const htmlCollection = fruits.children;
const htmlNodeListActive = fruits.childNodes;

// console.dir(htmlCollection);
// console.dir(htmlNodeListActive);

windows.$ = document.querySelector;
const fruits_copy = $("#list_fruits");
console.dir(fruits_copy);

