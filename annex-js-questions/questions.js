/* Q1: What is coercion in JS? */
// Conversion between two build-in types.
// Explicit Coercion
let a = "53";
let b = Number(a);
console.log(typeof b); // number

// Implicit Coercion
let c = a * 1;
console.log(typeof b); // number

/* Q2: What is Scope in JS? */
// Each function gets its own scope. Is a collection of variables and rules that live in block of code.
(function() {
	let myName = "Hector";
	console.log(myName);
})();

(function() {
	let myName = "Gerardo";
	console.log(myName);
})();

/* Q3: Explain equality in JS */
// Strict comparison (===) checks for value without allowing coercion
let ten = "10";
let tenNumber = 10;
let myFlagNumber = 0;
let myFlagBoolean = false;

console.log(ten === tenNumber); // false
console.log(myFlagNumber === myFlagBoolean); // false

// Abstract comparison (==) checks for value equality allowing coericon
let eleven = "11";
let elevenNumber = 11;

let myFlagNumber2 = 0;
let myFlagBoolean2 = false;

console.log(eleven == elevenNumber); // true
console.log(myFlagNumber2 == myFlagBoolean2); // true

/* Q4: Explain a callback function  */
// Is a function that is passed to another function as an argument.
function pushAndPrintArray(arr, cb) {
	arr.push("a");
	arr.push("z");
	cb(arr);
}

let arr = ["x", "c", "r"];

pushAndPrintArray(arr, console.log); // [ 'x', 'c', 'r', 'a', 'z' ]

/* Q5: What does 'use strict' do? */
// Force JS program to throw errors for 'silent errors'. Disable the creation of global variables by mistake.
// Fix errors that made JS optimizations harder, allowing to faster code execution. Prohibits certain syntax that could be deprecated for future ECMA6.
(function() {
	"use strict";
	const myLuckyNumber = 13; // ReferenceError: myLuckyNumber is not defined (if removed the const)
	console.log(myLuckyNumber * 2);
})();

(function() {
	const myLuckyNumber = 14;
	console.log(myLuckyNumber * 2);
})();

/* Q6: null vs undefined in JavaScript */
// undefined -> something hasn't been initialized
// null -> something is currently unavailable
(function() {
	let a = { total: 3.5 };
	let b = {};

	console.log(a.total); // 3.5
	console.log(b.total); // undefined

	a.total = null;
	console.log(a.total); // null
})();

/* Q7: Closures functions */
function createBase(baseNumber) {
	return function(n) {
		return baseNumber + n;
	};
}

let addFive = createBase(5);
let addSeven = createBase(7);

console.log(addFive(10)); // 15
console.log(addSeven(12)); // 19

/* Q8: Types Values */
(function() {
	let stringValue = "Hello!";
	let numberValue = 84;
	let booleanValue = false;
	let nullValue = null;
	let objectValue = {};
	let symbolValue = Symbol("rxsda");

	console.log(
		typeof stringValue +
			" " +
			typeof numberValue +
			" " +
			typeof booleanValue +
			" " +
			typeof nullValue +
			" " +
			typeof objectValue +
			" " +
			typeof symbolValue
	);
	// string number boolean object object symbol
})();

/* Q9: Event bubbling */
// Event bubbling is when a event triggers at the deepest possible element, and triggers on parent elements in nesting order.//#endregion
(function(event) {
	// event.stopPropagation();
})();

/* Q10: What is 'let' keyword? */
// Declare variables under individual blocks of code ({...})
(function() {
	for (let i = 0; i <= 3; i++) {
		console.log(i); // 1, 2, 3
	}

	for (let i = 8; i <= 10; i++) {
		console.log(i); // 8, 9, 10
	}

	let i = 21;
	console.log(i); // 21
})();

/* Q11: Check if a number is an integer? */
(function() {
	function isInteger(number) {
		return number % 1 === 0;
	}

	console.log(isInteger(25)); // true
	console.log(isInteger(15.4)); // false
	console.log(isInteger(0.23)); // false
})();

/* Q12: What are IIFE's (Immediately Invoked Function Expressions) */
// Its a function that is executed immediately after is created. Used to create code modules (avoiding polluting the global namespace)
// All variables used inside the IIFe are not visible outside its scope.
(function() {
	let a = 2;
	let b = 4;

	console.log(a + b); // 6
})();

(function() {
	let a = 10;
	let b = 2;

	console.log(a - b); // 8
})();

/* Q13: How to compare two objects in Javascript? */
// Non-primitive values (objects, functions and arrays) are held by reference, not by values. So comparing them only matches the reference.
(function() {
	let a = [1, 2, 3];
	let b = [1, 2, 3];
  let c = "1,2,3";
  let d = [1, 2, 3, 4];

  console.log(a == c);  // true
  console.log(b == c);  // true
  console.log(a == b);  // false

  // Convert the objects into strings to be compared
  let areTheyEqual = JSON.stringify(a) === JSON.stringify(b);     // true
  let areTheyNotEqual = JSON.stringify(a) === JSON.stringify(d);  // false
  console.log(areTheyEqual);
  console.log(areTheyNotEqual);
})();

/* Q14: Differences between ES5 and ES6? */
// Arrow functions + string interpolation
(function() {
	const greetings = (name) => {
    return `hello ${name}`;
  }

  const greetingsOneLine = name => `hello ${name}`;

  console.log(greetingsOneLine('Hector'));
  console.log(greetings('Andrew'));
})();

// Const
(function() {
  const NAMES = [];
  NAMES.push('Hector');
  console.log(NAMES.length === 1);  // true

  NAMES.push('Mike');
  console.log(NAMES);               // [ 'Hector', 'Mike' ]
  // NAMES = ['Poe', 'Jung'];          // error! TypeError: Assignment to constant variable.
})();

// Block-scoped variables (let, const)
(function() {
  let a = 2;
  if(a === 2) {
    let a = 5;
    console.log(a * 2); // 10
  }
  console.log(a * 2);   // 4
})();

// Default Parameter Values, initialize functions with default values. A defualt value is used when an argument is omitted or undefined, null is a valid value.
(function() {
  function introduction(name = "Hector", age = 25, gender = "male") {
    console.log(`Hi I'm ${name}!, a ${age} old ${gender}`);
  }

  introduction();                       // Hi I'm Hector!, a 25 old male
  introduction('Nina', 32, "female");   // Hi I'm Nina!, a 32 old female
})();