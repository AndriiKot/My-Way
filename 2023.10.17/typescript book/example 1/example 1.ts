const first_var: string = 'I am string';
const second_var: number = 143;
const isOld: boolean = false;
const some_var3: null = null;
const some_var4: undefined = undefined;


const first_array: [string,number,boolean,null,undefined] = [
    first_var,
    second_var,
    isOld,
    some_var3,
    some_var4
];

for(const index in first_array) {
    console.dir(first_array[index]);
};


