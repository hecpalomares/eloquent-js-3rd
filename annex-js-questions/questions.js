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

	console.log(a == c); // true
	console.log(b == c); // true
	console.log(a == b); // false

	// Convert the objects into strings to be compared
	let areTheyEqual = JSON.stringify(a) === JSON.stringify(b); // true
	let areTheyNotEqual = JSON.stringify(a) === JSON.stringify(d); // false
	console.log(areTheyEqual);
	console.log(areTheyNotEqual);
})();

/* Q14: Differences between ES5 and ES6? */
// Arrow functions + string interpolation
(function() {
	const greetings = name => {
		return `hello ${name}`;
	};

	const greetingsOneLine = name => `hello ${name}`;

	console.log(greetingsOneLine("Hector"));
	console.log(greetings("Andrew"));
})();

// Const
(function() {
	const NAMES = [];
	NAMES.push("Hector");
	console.log(NAMES.length === 1); // true

	NAMES.push("Mike");
	console.log(NAMES); // [ 'Hector', 'Mike' ]
	// NAMES = ['Poe', 'Jung'];          // error! TypeError: Assignment to constant variable.
})();

// Block-scoped variables (let, const)
(function() {
	let a = 2;
	if (a === 2) {
		let a = 5;
		console.log(a * 2); // 10
	}
	console.log(a * 2); // 4
})();

// Default Parameter Values, initialize functions with default values. A defualt value is used when an argument is omitted or undefined, null is a valid value.
(function() {
	function introduction(name = "Hector", age = 25, gender = "male") {
		console.log(`Hi I'm ${name}!, a ${age} old ${gender}`);
	}

	introduction(); // Hi I'm Hector!, a 25 old male
	introduction("Nina", 32, "female"); // Hi I'm Nina!, a 32 old female
})();

// Class Definition ('class' keyword) and Inheritence ('extends' keyword)
class Figure {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	getArea() {
		return this.height * this.width;
	}
}

class Square extends Figure {
	constructor(width, height) {
		super(width, height);
		this.sides = 4;
	}

	getSides() {
		return this.sides;
	}

	isSquare() {
		return this.width === this.height;
	}
}

const rectangle = new Figure(5, 7);
console.log(rectangle.getArea()); // 35

const smallSquare = new Square(8, 8);
console.log(smallSquare.getSides()); // 4
console.log(smallSquare.isSquare()); // true

const notSquare = new Square(6, 3);
console.log(notSquare.getSides()); // 4
console.log(notSquare.isSquare()); // false

// for-of operator
let scores = [17, 23, 41, 13, 28];

for (const score of scores) {
	if (score > 24) {
		console.log(`${score} is a high score`);
	} else {
		console.log(`${score} is a low score`);
	}
}

// spread operator
let teamA = { Mike: "active", Lauren: "active", Hugo: "inactive" };
let teamB = { Javier: "active", Alice: "inactive", Peter: "inactive" };

let fullTeam = { ...teamA, ...teamB };
console.log(fullTeam); // { Mike: 'active', Lauren: 'active', Hugo: 'inactive', Javier: 'active', Alice: 'inactive', Peter: 'inactive' };

// Promises
const isGreater = (a, b) => {
	return new Promise((resolve, reject) => {
		if (a > b) {
			resolve(true);
		} else {
			reject(false);
		}
	});
};

isGreater(1, 2)
	.then(result => {
		console.log("greater");
	})
	.catch(result => {
		console.log("smaller");
	});

// Module exporting & importing
// const myModule = { x: 1, y: () => { console.log('This is ES5') }}
// export default myModule;
// import myModule from './myModule';

/*Q15: Difference between 'undefined' and 'not defined'?  */
(function() {
	let x; // Declare x, not define its value
	console.log(x); // undefined
	let y = 2;
	console.log(y); // declare y, define its value
	let z; // A variable that is declared but not define and when we try to access it, It will result undefined.
	console.log(typeof z === "undefined"); // true
	// console.log(xyz);										// A variable that neither declared nor defined when we try to reference such variable then It result not defined.
})();

/* Q16: Difference between anonymous and named functions? */
let assignedFunction = function() {
	// anonymous function assigned to a variable 'assignedFunction'
	return 2 + 2;
};
console.log(2 + assignedFunction()); // 6

let assignedFunctionTwo = function sumThreePlusThree() {
	// named function (sumThreePlusThree) assigned to variable a'ssignedFunctionTwo' (better for debugging, can see the call stack on developer tools)
	return 3 + 3;
};
console.log(3 + assignedFunctionTwo()); // 9

/* Q17: What is “closure” in javascript? */
// A closure is a function defined inside another function; that has access (and saves its lexical scope) to the variables declared in it and the parent function scope.
// Lexical Scoping: displayName() function has access to its parent function (init()).
(function() {
	function init() {
		let name = "Hector";
		function displayName() {
			let lastName = "Palomares";
			console.log(`${name} ${lastName}`); // Hector Palomares
		}
		displayName();
	}
	init();
})();

// Closure: displayNumberDoubled() inner function is retuned from the other function. Mantains its reference to its lexical enviroment.
function makeFunction(number) {
	let numberDoubled = number * 2;
	function displayNumberDoubled() {
		console.log(numberDoubled);
	}
	return displayNumberDoubled;
}

let threeDoubled = makeFunction(3);
let sevenDoubled = makeFunction(7);

threeDoubled(); // 6
sevenDoubled(); // 14

// makeFunction is a function factory - it create different functions.
// Both threeDoubled() and sevenDoubled() share function body definition, but store different lexical enviroments.

/* Q18: Create a private variable */
// Create it as a local variable within a function, even with the function executed the variable cannot be accesed outside of the function.
function privatePerson() {
	let name = "Héctor";
	let age = 15;
	let skills = ["Programming", "Piano", "Trading"];

	function showAgeIfAdult() {
		return age >= 21 ? age : "N/A";
	}

	return (privateObject = {
		name: name,
		age: showAgeIfAdult(),
		skills: skills
	});
}

// console.log(name, age, skills);	// ReferenceError: name, age, skills is not defined
let me = privatePerson();
console.log(me); // { name: 'Héctor', age: 'N/A', skills: [ 'Programming', 'Piano', 'Trading' ] }

/* Q19: Explain the Protortpe Design Pattern */
// Relies on the JS prototypical inheritance.
function Car(manufacturer, color) {
	this.manufacturer = manufacturer;
	this.color = color;
	this.wheels = 4;
}

Car.prototype.go = function() {
	console.log(`Moving my ${this.wheels} wheels.`);
};

Car.prototype.stop = function() {
	console.log(`Stopping my ${this.wheels} wheels.`);
};

Car.prototype.repaint = function(newColor) {
	console.log(`Painting my old ${this.color} into ${newColor}.`);
	this.color = newColor;
};

Car.prototype.showColor = function(newColor) {
	console.log(`My current color is: ${this.color}.`);
};

let sonic = new Car("Chevrolet", "Blue");
sonic.go();
sonic.stop();
sonic.showColor();		// My current color is: Blue.
sonic.repaint("Red");	// Painting my old Blue into Red.
sonic.showColor();		// My current color is: Red.

let sandero = new Car("Renault", "Black");
sandero.go();
sandero.stop();
sandero.showColor();			// My current color is: Black.
sandero.repaint("White");	// Painting my old Black into White.
sandero.showColor();			// My current color is: White.

/* Q20: What does the term "Transpiling" stand for? */
// Combination of "transforming" + "compiling", transform newer code into older code equivalents. Examples Babel (ES6 to ES5), Traceur (ES6, ES7 to ES5).
// Main purpose is to give support to older applications and browsers

/* Q21: 'this' keyword  */
// the object where 'this' refers change depending the execution context (how is called)
// global 'this'
function simpleGlobal() {
	console.log('Simple function call');
	console.log(this === global);	// true
};

simpleGlobal();								// -> true
console.log(this === global);	// -> true

// 'this' in a method of an object, refers to the parent object
let myComputer = {
	ram: 4096,
	clock: 1075,
	calculateOverclock: function() {
		return (this.clock * 1.12).toFixed(2);
	}
};

console.log("MyComputer Specs:", myComputer.calculateOverclock(), "overclocked.");

// 'this' refering to new instance: when called with 'new' keyword, 'this' is bound to the new instance
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.displayName = function() {
		console.log(`Name: ${this.firstName} ${this.lastName}`);
	}
}

let alice = new Person("Alice", "Saz");			// 'this' refers to alice object that is an instance of Person
alice.displayName();	
let bob = new Person("Roberto", "Perez");		// 'this' refers to bob object that is an instance of Person
bob.displayName();