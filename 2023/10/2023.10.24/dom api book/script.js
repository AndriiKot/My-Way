'use strict';

const element_https = document.querySelectorAll('[href^="https:]');
console.dir({ element_https }); // Object
console.log(element_https);    // NodeList


const element_domen_ua = document.querySelectorAll('[href$=".ua"]');
console.dir({ element_domen_ua }); // Object
console.log(element_domen_ua)      // NodeList 

const elment_googl = document.querySelectorAll('[href*="googl"]');
console.dir({ elment_googl }); // Object
console.log(elment_googl);    // NodeList




