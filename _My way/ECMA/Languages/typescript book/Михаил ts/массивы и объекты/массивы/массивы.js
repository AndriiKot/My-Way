var arr = []; // const arr: any[] = [];
var arr_string = ['aa', '22', 'bb'];
// !!! Error arr_string.push(2) !!! 
arr_string.push('33'); // Valid
var arr_string_defaul = ['new a', 'new bb', 'new cc'];
// !!! Error arr_string_defaul.push(22) !!!
arr_string_defaul.push('STRING');
var arr_number = []; // const arr_number: number[] = [];
var arr_number_v1 = [11, 22, 33];
var arr_number_v2 = [44, 55, 66];
var arr_array_string = [];
// !!! Error arr_array_string.push('33') !!!!
// !!! Error arr_array_string.push(33) !!!!
// !!! Error arr_array_string.push([33]) !!!!
arr_array_string.push(['ss']);
// union_array
var arr_union = [];
arr_union.push('union string');
arr_union.push(333);
var arr_type_union = [];
console.log(arr);
console.log(arr_string);
console.log(arr_string_defaul);
console.log(arr_number);
console.log(arr_number_v1);
console.log(arr_number_v2);
console.log(arr_array_string);
console.log(arr_union);
