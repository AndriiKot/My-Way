// 7. Создайте вайл js. В котором функция будет 
//     *создовать html елемент 
//     *затем довабете в этот эелемент строку
//     *строку образуйте при помоши преоброзования массива ['Hello','webpack'] межу елементами массива должен ити один пробел.
//     *функции должна вернуть новый html елемент

function myfn1() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],' ');
    return element;
}

document.body.appendElement(myfn1());


