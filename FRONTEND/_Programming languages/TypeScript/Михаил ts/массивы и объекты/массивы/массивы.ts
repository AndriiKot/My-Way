
const arr = [];  // const arr: any[] = [];

const arr_string: string[] = ['aa','22','bb'];
// !!! Error arr_string.push(2) !!! 
arr_string.push('33'); // Valid

const arr_string_defaul = ['new a','new bb','new cc'];
// !!! Error arr_string_defaul.push(22) !!!
arr_string_defaul.push('STRING');

const arr_number: Array<number> = []; // const arr_number: number[] = [];
const arr_number_v1: Array<number> = [11,22,33];
const arr_number_v2: number[] = [44,55,66];


const arr_array_string: string[][] = [];
// !!! Error arr_array_string.push('33') !!!!
// !!! Error arr_array_string.push(33) !!!!
// !!! Error arr_array_string.push([33]) !!!!
arr_array_string.push(['ss']);

// union_array
const arr_union: (string | number) [] = [];
arr_union.push('union string');
arr_union.push(333);

// type inion_array
type  MyTypeArray = (string | number);
const arr_type_union: MyTypeArray[] = [];


console.log(arr);
console.log(arr_string);
console.log(arr_string_defaul);
console.log(arr_number)
console.log(arr_number_v1);
console.log(arr_number_v2);
console.log(arr_array_string);
console.log(arr_union);





