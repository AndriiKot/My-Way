'use strict';

function doLogThis() {
  console.log(this)
}


const thisArg = { name: 'This Arg'};

doLogThis(); // undefined
doLogThis.call(thisArg); // { name: 'This Arg'}
doLogThis.apply(thisArg) // { name: 'This Arg'}
doLogThis.bind(thisArg)() //{ name: 'This Arg'}








