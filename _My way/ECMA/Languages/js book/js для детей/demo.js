"use strict";

function аКакУзнатьЧтоМашина(цвет) {
  return (
    "Ну, если её двери -  " +
    цвет +
    ", капот - " +
    цвет +
    ", багажник - " +
    цвет +
    ", и весь кузов тоже " +
    цвет +
    ", то пожалуй, можно с уверенностью заключить, что эта машина - " +
    цвет +
    "."
  );
}

console.log(аКакУзнатьЧтоМашина("зелёный"));

function бросаемИгральныйКубик() {
  return Math.floor(Math.random() * 6) + 1;
}

function параИгральныхКубиков() {
  let кубик1 = бросаемИгральныйКубик();
  let кубик2 = бросаемИгральныйКубик();
  const сумма = кубик1 + кубик2;
  console.log("У вас выпало " + сумма + "! (" + кубик1 + " и " + кубик2 + ")");
  return сумма;
}

параИгральныхКубиков();

function найтиОстаток(делимое, делитель) {
  let сообщениеОбОстатке =
    "При евклидовом делении " +
    делимое +
    " на " +
    делитель +
    " мы имеем в осатке " +
    (делимое % делитель);
  return сообщениеОбОстатке;
}

найтиОстаток(10, 3);

// ОПЕРАТОР СРАВНЕНИЯ
// Тройное равно (===)
console.log('Тройное равно(===): ');
console.log("'мой дом' === 'мой дом' : " + ('мой дом' === 'мой дом') ); // true
console.log("1 === true : " + (1 === true));  // false
console.log(false === false); // true
console.log(false === 0); // false
console.log("Я запутался" === "Я запутался");  // true
console.log(3 === 3) // true
console.log(3 === '3'); // false
console.log('='.repeat(15));

// Двойное равно (==)
console.log('Двойное равно(==): ')
console.log(3 == 3) // true
console.log(3 == '3') // true
console.log(0 == 'ноль'); // false
console.log(1 == true); // true
console.log(5 == true); // false
console.log(false == 0); // true
console.log('='.repeat(15));

// Неравноравно (!==)
console.log('Неравноравно(!==): ')
console.log(5 !== 8); // true
console.log( true !== 1); // true
console.log(0 !== false); // true
console.log("Я запутался" !== 'Я запутался'); // false
console.log(3 !== 3); // false
console.log( 3 !== '3'); // true
console.log('='.repeat(15));

// Неравно (!=)
console.log('Неравно(!=): ')
console.log( 5 != 8);  // true
console.log(true != 1); // false
console.log(0 != false); //false
console.log( 3 != 3); // false
console.log( 3 != '3'); // false
console.log('='.repeat(15));

// Больше чем (>)
console.log('Больше чем(>): ')
console.log(8 > 5); // true
console.log(3 > 5); // false
console.log('8' > 5); // true
console.log(2 > 2); // false
console.log('='.repeat(15));

// Меньше чем (<)
console.log('Меньше чем(<): ');
console.log(8 < 5); // false
console.log(3 < 5); // true
console.log(2 < 2); // false
console.log(2 < '3'); // true
console.log('='.repeat(15));

// Больше или равно (>=)
console.log('Больше или равно(>=):');
console.log(8 >= 5); // true
console.log(3 >= 5); // false
console.log(2 >= 2); // true
console.log('='.repeat(15));

// Меньше или равно (<=)
console.log('Меньше или равно(<=)');
console.log(8 <= 5); // false
console.log(3 <= 5); // true
console.log(2 <= 2); // true


























