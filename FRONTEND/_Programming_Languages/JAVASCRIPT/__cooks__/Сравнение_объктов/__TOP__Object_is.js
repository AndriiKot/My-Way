
// Object.is(value1, value2)
// Сравнение объектов приводится без приведение типов
// Можно сравнивать NaN
// Можно сравнить -0 и -0
// (-0, NaN, Infinity, -Infinity) это числа в плавающей точкой

Object.is("foo", "foo");        // true
Object.is(window, window);      // true
Object.is(false,false);         // true
Object.is(null,undefined);      // false
Object.is(undefined,null);      // false

Object.is("foo", "bar");        // false
Object.is([], []);              // false

var test = { a: 1 };
Object.is(test, test);          // true

Object.is(null, null);          // true

// Специальные случаи
Object.is(0, -0);               // false
Object.is(-0, -0);              // true
Object.is(NaN, 0 / 0);          // true
Object.is(NaN, NaN);            // true
Object.is(Infinity, Infinity);  // true
Object.is(-Infinity, -Infinity); // true
Object.is(Infinity,-Infinity)   // false
Object.is(-Infinity, Infinity)  // false

