'use strict';

const MAX_VALUE = 10;
let count = 0;
const interval = 500;
let timer = null;

const event = () => {
  if (count === MAX_VALUE) {
    console.log('The End');
    clearInterval(timer);
    return;
  }
  console.dir({ count, date: new Date() });
  count++;
};

console.log('Begin');
timer = setInterval(event, interval);
