'use strict';

let my_first_paragraph = 13;
console.log(important_heading);

/* ERROR: 
!!! console.log(not-important-heading); !!!
*/

const not_commets = /*I am a comment*/'It is not a comments ' ;
console.log(not_commets); // 'It is not a comments '

console.log(my_first_paragraph); // 13

const my_paragraph = document.getElementById('my_first_paragraph');
console.dir({my_paragraph}); // Object HTMLParagraphElement

const element_h4 = document.getElementById('not-important-heading');
element_h4.style.background = 'blue';


let class_hello = document.querySelector('.class_hello');
const my_second_paragraph = document.getElementById('my_second_paragraph');
console.log(class_hello); // Hi !

class_hello = my_second_paragraph.querySelector('.class_hello');
console.log(class_hello); // Hello !

const any_paragraph = document.querySelector('p');
const em_hello = document.querySelector('.class_hello')
console.log(any_paragraph);

console.log(any_paragraph.contains(em_hello));

const my_p = document.querySelector('.big-div p');
const big_div = my_p.closest('.big-div');
console.log(big_div);




