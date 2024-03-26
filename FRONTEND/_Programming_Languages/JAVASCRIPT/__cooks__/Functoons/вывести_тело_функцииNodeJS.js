function inc(a, b) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};

console.log(inc.toString());
console.log(sum.toString());
console.log(max.toString());
console.log(avg.toString());
