
const obj_1 = {aa: 11, bb: 22, cc: 33} 
/*
const obj_1 : { 
    aa: number;
    bb: number;
    cc: number;
}
*/

console.log(obj_1);

type MyObject = {
    new_a: string;
    new_b: string;
    new_c: number
}

const obj_2 : MyObject = {
    new_a: 'sgring-1',
    new_b: 'string-2',
    new_c: 1112233,
}

console.log(obj_2);

interface MyObj {
    readonly a: number;
    b: number;
    c?: 'string';
    print?: () => number;
};

// const obj_3 : MyObj {

// }
