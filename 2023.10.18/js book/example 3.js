"use strict";

const myArray = [11, 22, 33, 44];

for(const element of myArray) {
    console.dir(element);
};


let amount = 0

for(const element of myArray){
    amount += element;
}

console.log(`amount: ${amount}`);

