const convert = require("./converter");
const reader = require ("readLine-sync");

let input = reader.questionInt("Please enter a number: ");

let ctb = convert.convertToBinary(input);
let cth = convert.convertToHexa(input);

console.log("Your number in binary is " + ctb);
console.log("Your number in hexadecimal is " + cth);       



