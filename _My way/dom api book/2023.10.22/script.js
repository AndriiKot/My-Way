"use strict";

const element = document.getElementById('caption');

console.log(element.innerHTML);
console.log(element.innerText);

element.addEventListener('click', (event) => {
    console.dir({event});
});

const staticCollectionFruits = document.querySelectorAll('.fruits');
const liveCollectionFruits = document.getElementsByClassName('fruits');

// Displays the static and live Collection to the console
console.dir({ staticCollectionFruits }); // NodeList
console.dir({ liveCollectionFruits });  // HTMLCollection

// Displays the first element to the console
console.log(staticCollectionFruits[0]);
console.log(liveCollectionFruits[0]);

// Displays the lement for nameId to the console
console.log(staticCollectionFruits['fruit_2']); // undefined

console.log(liveCollectionFruits['fruit_3']);
console.log(liveCollectionFruits.namedItem('fruit_3'));

//
console.log('Hi!');
const f = document.querySelectorAll('.fruits');
console.log(f); 
const fs = f.childNodes;
console.log(fs);











