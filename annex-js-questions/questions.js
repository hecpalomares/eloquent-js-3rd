/* Q1: What is coercion in JS? */
// Conversion between two build-in types.
// Explicit Coercion
let a = "53";
let b = Number(a);
console.log(typeof b);  // number

// Implicit Coercion
let c = a * 1;
console.log(typeof b);  // number

/* Q2: What is Scope in JS? */
// Each function gets its own scope. Is a collection of variables and rules that live in block of code.
(function () {
  let myName = "Hector";
  console.log(myName);
}());

(function () {
  let myName = "Gerardo";
  console.log(myName);
}());

/* Q3: Explain equality in JS */
// Strict comparison (===) checks for value without allowing coercion
let ten = "10";
let tenNumber = 10;
let myFlagNumber = 0;
let myFlagBoolean = false;

console.log(ten === tenNumber);                  // false
console.log(myFlagNumber === myFlagBoolean);     // false

// Abstract comparison (==) checks for value equality allowing coericon
let eleven = "11";
let elevenNumber = 11;

let myFlagNumber2 = 0;
let myFlagBoolean2 = false;

console.log(eleven == elevenNumber);               // true
console.log(myFlagNumber2 == myFlagBoolean2);      // true

/* Q4: Explain a callback function  */
// Is a function that is passed to another function as an argument.
function pushAndPrintArray(arr, cb) {
  arr.push("a");
  arr.push("z");
  cb(arr);
}

let arr = ["x", "c", "r"];

pushAndPrintArray(arr, console.log);  // [ 'x', 'c', 'r', 'a', 'z' ]

/* Q5: What does 'use strict' do? */
// Force JS program to throw errors for 'silent errors'. Disable the creation of global variables by mistake.
// Fix errors that made JS optimizations harder, allowing to faster code execution. Prohibits certain syntax that could be deprecated for future ECMA6.
(function () {
  "use strict";
  const myLuckyNumber = 13;                 // ReferenceError: myLuckyNumber is not defined (if removed the const)
  console.log(myLuckyNumber * 2); 
}());

(function () {
  const myLuckyNumber = 14;
  console.log(myLuckyNumber * 2);
}());