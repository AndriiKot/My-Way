'use strict';

let count1 = 0;
let count2 = 0;

function fn1() {
  console.log(this);
}

const fn2 = () => {
  console.log(this);
};

fn1();
fn2();

