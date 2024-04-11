let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);

let result1 = petString.match(petRegex);

console.log(result);   // true
console.log(result1);  // ['cat']


let petString2 = "Cat cat cat cat";
let result2 = petString.match(petRegex);
console.log(result2);   // ['cat']


petRegexGlobal = /dog|cat|bird|fish/g;
let petString3 = "Cat cat cat cat";
let result3 = petString3.match(petRegexGlobal);
console.log(result3);    // ['cat', 'cat', 'cat' ]




