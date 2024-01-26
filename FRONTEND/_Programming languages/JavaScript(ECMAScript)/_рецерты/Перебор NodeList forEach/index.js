'use strict';

const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')

const paragraphs = document.querySelectorAll('p')


paragraphs.forEach((p, i) => {
    p.innerText = ("Hello " + (i + 1) +'\n' + p.innerText);
    if (i === 1) {
        p.style.background = 'red';
    }
});


