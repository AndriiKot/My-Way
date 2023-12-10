'use strict';

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const paragraphs = document.querySelectorAll('p');

const len = paragraphs.length;

for(let i = 0; i < len; i++) {
    const el = paragraphs[i];
    const text = paragraphs[i].innerText;
    const addNewText = "Hello " + (i + 1) + '\n';
    el.innerText = addNewText + text;
    if ( i == 1) {
        el.style.background = 'blue';
    }
}





