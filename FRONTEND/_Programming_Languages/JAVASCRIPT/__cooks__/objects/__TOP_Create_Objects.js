const anotherObject = {
  make: "string",
  5: "number",
  model: "string",
  model: "number",
};

//1. Свойство может иметь имя как строку, так и числовое значение
// 2.Свойство может иметь двух одинаковых имен тогда оно будет
//переписано на то значение которое указано вторым свойством

// Свойство не может быть объектом

console.dir(anotherObject);  // { '5': 'number', make: 'string', model: 'number' }

console.dir(anotherObject[5]); // "number"
console.dir(anotherObject["5"]); // "number"

console.dir(anotherObject.model); // "number"
console.dir(anotherObject["model"]); // "number"

console.dir(anotherObject.make);
console.dir(anotherObject["make"]);
