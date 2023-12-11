'use strict';

function doLogThis() {
  console.log(this)
}


const thisArg = 5 ;

doLogThis(); // undefined
doLogThis.call(thisArg); // 5
doLogThis.apply(thisArg) // 5
doLogThis.bind(thisArg)() // 5








