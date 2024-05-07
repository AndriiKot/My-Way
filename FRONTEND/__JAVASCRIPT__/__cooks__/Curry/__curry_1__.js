function unCurried(x, y) {
  return x + y;
}

// example of currying 1
function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried = (x) => (y) => x + y;

curried(1)(2);
curried(1)(2);

const funcForY = curried(1);
console.log(funcForY(2)); // 3


// example of currying 2
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13


// example of currying 3
function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

add(10)(20)(30);

// example of currying 4
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
