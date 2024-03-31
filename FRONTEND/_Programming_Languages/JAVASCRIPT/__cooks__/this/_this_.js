// индетификатор this зависит только от формы вызова функции

// При вызове функции в доп нотации this всегда ссылается на объект перед точкой
function fn() {
  console.log(this);
}

const obj1 = {
  name: "Andrii",
};

obj1.fn = fn;
obj1.fn(); // { name: 'Andrii', fn: [Function] }
obj1['fn'](); // { name: 'Andrii', fn: [Function] }

// методы 'call' 'apply' 'bind' задают this

const obj2 = {
  name: "Oxi",
};

fn.call(obj2); // { name: 'Oxi'}
fn.apply(obj2); // { name: 'Oxi'}
fn.bind(obj2)(); // { name: 'Oxi'}

//alias
fn.call(obj1, 1, 2, "string 3"); // { name: 'Andrii', fn: [Function] }
fn.apply(obj1, [1, 2, "string 3"]); // { name: 'Andrii', fn: [Function] }
fn.bind(obj1, 1, 2, "string 3")(); // { name: 'Andrii', fn: [Function] }

// alias
const arr = [1, 2, 3];
fn.call(obj2, ...arr);

// вызов функции с помощью new
function fn2() {
  this;
}
console.log(new fn2()); // {}
console.log(new fn2()); // {}

// undefined если функции не была вызвана в доп нотации
// !!! В Браузере undefined !!!
const obj3 = {
  name: "Object 3",
  fn: function()  {
    console.log(this);
  },
};

const newFunction = obj3.fn;
newFunction(); // !!!  В Браузере undefined !!!
//  !!! в Node.js Object [global] {...} !!!
// !!! Если функция стрелочная то this в NodeJS будет равен {}

