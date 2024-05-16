
setTimeout(() => console.log("hi"), 1000)  // 2
console.log("Bye!")                        // 4


setTimeout(() => console.log("Hi 2!"), 0); // 3
console.log("Bye 2!")                      // 2

