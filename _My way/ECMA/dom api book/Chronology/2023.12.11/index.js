'use strict';

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const paragraphs = document.querySelectorAll('p');

const backgroundRED = (e) => {
    e.currentTarget.style.background = 'red'
}
const showCurrentTarget = (e) => {
    console.log(e.currentTarget)
}

p1.addEventListener('click',backgroundRED);
p1.addEventListener('click', showCurrentTarget)




