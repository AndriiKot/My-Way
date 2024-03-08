"use strict";


const fn1 = async () => {
    console.log(`Hello I am function:\n ${fn1}!`)
};

const main = async () => {
    const res = await fn1();
    return res;
};


console.log(main());


