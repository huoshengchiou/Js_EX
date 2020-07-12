
//require
const child = require("./child");

// { sum: [Function: calculator] }
console.log("result", child);

const result = child.sum(3, 4);

console.log("result", result);

console.log(module);