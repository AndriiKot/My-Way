function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([1, 2, 3, 4, 5], 2));
console.log(multiply([1, 2, 3, 4, 5], 3));
console.log(multiply([1, 2, 3, 4, 5], 4));
console.log(multiply([1, 2, 3, 4, 5], 5));