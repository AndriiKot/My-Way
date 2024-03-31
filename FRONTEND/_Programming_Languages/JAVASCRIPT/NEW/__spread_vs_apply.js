var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

console.log(maximus);

const maximusNewStyle = Math.max(...arr)

console.log(maximusNewStyle);