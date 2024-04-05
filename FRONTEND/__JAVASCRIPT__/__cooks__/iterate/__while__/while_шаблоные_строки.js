const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  let i = 0
  while (arr.length > failureItems.length) {
    console.log("HI!");
    failureItems.push(`<li class="text-warning">${arr[i++]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);
