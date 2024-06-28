
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();

function uniTotal(string) {
  let sum = 0;
  for (let char of string) {
    sum += char.charCodeAt(0);
  }
  return sum;
}


const uniTotal1 = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);


