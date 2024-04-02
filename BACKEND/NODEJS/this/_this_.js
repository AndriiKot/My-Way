exports.default = {
  foo: () => {
    console.log(this); // Window
  },
};

// Node.js
console.log(this); // { default: { foo: [Function: foo] }
this.default.foo(); // { default: { foo: [Function: foo] }}
