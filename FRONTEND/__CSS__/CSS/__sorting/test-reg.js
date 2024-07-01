// Тестовое задание №1
const text = `
яблоки 5 штук
бананы 10 штук
помидоры 1 штука
мытая морковь 7 штук
огурцы 0 штук
`;

// Первая регулярка для изменения формата списка
const formattedText = text.replace(/(.+?) (\d+) штук/g, '$1;$2');

// Вторая регулярка для удаления строк, где количество больше нуля
const filteredText = formattedText.split('\n').filter(item => {
    const quantity = parseInt(item.split(';')[1]);
    return quantity === 0;
}).join('\n');

console.log(filteredText);

// Тестовое задание №2
const htmlCode = `
<html>
<body>
<div class="main">
<div class="block delete">удалить этот блок <div>X</div></div>
<div class="block">оставить этот блок <div>V</div></div>
<div class="block delete">удалить этот блок</div>
<div class="block">оставить этот блок</div>
<div class="block delete">удалить <div>этот</div> блок </div>
<div class="block">оставить <div>этот</div> блок</div>
</div>
</body>
</html>
`;

// Регулярка для удаления div блоков с классом "block delete"
const result = htmlCode.replace(/<div class="block delete">.*?<\/div>/g, '');

console.log(result);