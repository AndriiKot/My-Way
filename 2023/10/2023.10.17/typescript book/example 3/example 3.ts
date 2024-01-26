"use strict";

function myFirstFunction(arg1: string,arg2: { name: string, weight: number}): number {
    console.dir([arg1,arg2]);
    return arg2.weight;
};

const result = myFirstFunction('cat',{name: 'Lubchick',weight: 5})
console.dir(result);

