'use strict';

console.log('This is: ' + this); // node: [object Object}  ; browser: [object Window]

function doLogThis() {
  console.log('This is: ' + this);
}

const doLogThisRow = () => {
  console.log('This is: ' + this);
}

function doLogThis2() {
  const doLogThisRow = () => {
    console.log('This is: ' + this);
  }
  doLogThisRow();
}

doLogThis();     // undefined
doLogThisRow(); // node: [object Object}  ; browser: [object Window]
doLogThis2();   // undefined







