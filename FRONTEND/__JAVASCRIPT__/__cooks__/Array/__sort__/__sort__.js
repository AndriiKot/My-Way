﻿Сортировка массива по алфавиту с помощью метода сортировки
Метод sortсортирует элементы массива в соответствии с функцией обратного вызова.

Например:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
Это вернет значение [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
Это вернет значение ['z', 's', 'l', 'h', 'b'].

Метод сортировки по умолчанию в JavaScript — по 
строковому значению точки в Юникоде, что может 
возвращать неожиданные результаты. Поэтому 
рекомендуется предоставить функцию обратного 
вызова, чтобы указать, как сортировать 
элементы массива. Когда предоставляется 
такая функция обратного вызова, обычно 
называемая compareFunction, элементы 
массива сортируются в соответствии с 
возвращаемым значением compareFunction: 
Если compareFunction(a,b)возвращает 
значение меньше 0 для двух элементов a и b, 
то aбудет перед b. Если compareFunction(a,b)возвращает 
значение больше 0 для двух элементов aи b, то b 
будет перед a. Если compareFunction(a,b)возвращает 
значение, равное 0 для двух элементов aи b, то aи bостанется неизменным.

Используйте sortметод в alphabeticalOrderфункции для 
сортировки элементов arrв алфавитном порядке. 
Функция должна возвращать отсортированный массив.

