const fn1 = (num: number): string => {
  return String(num);
};

type Callback = (num: number) => string;

function fn2(cb?: Callback) {
    if (cb === undefined) {
        cb = String;
    };
    cb(12);
}

function createPoint(x: number = 0, y: number = 0): [number, number] {
    return [x,y]
};

createPoint(10,20);

function fn3(...nums: number[]): string {
    return nums.join('-');
}

