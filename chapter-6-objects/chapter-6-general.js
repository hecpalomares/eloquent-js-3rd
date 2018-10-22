/* ENCAPSULATION */
// Divide the program into smaller pieces, and make each piece responsible for managing its own state.
// Properties part of the interface are called public. Properties part of the implementation are called price.
// Separating interface from implemntation is a great idea.

/* METHODS */
// Properties that hold function values
let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says: ${line}`);
};

rabbit.speak("I'm fluffy!");

// Methods using the 'this' keyword. Passed implictly and automatically points to the object that it was called on (function is called as a method).
function bark(numberOfBarks) {
	let bark = "Woof! ";
	console.log(`${this.color} Dog says: ${bark.repeat(numberOfBarks)}`);
}
let redDog = {
	color: "Red",
	bark
};
let yellowDog = {
	color: "Yellow",
	bark
};

redDog.bark(1);
yellowDog.bark(5);

// Calling 'this' explictly via call / apply. 'this' value is the first parameter we are using, in this case the redDog object
bark.call(redDog, 2);

// Arrow function, bind the 'this' keyword to the scope around them
function normalize() {
	console.log(this.coords.map(n => n / this.length));
}
normalize.call({
	coords: [0, 2, 3],
	length: 5
}); // → [0, 0.4, 0.6]

/* PROTOTYPES */
// Another object (linked) to fall as a fallback source of properties.
let protoRabbit = {
	speak(line) {
		console.log(`The ${this.type} rabbit says '${line}'`);
	}
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("Yiaw"); // The killer rabbit says 'Yiaw'

let cuteRabbit = Object.create(protoRabbit);
killerRabbit.type = "cute";
killerRabbit.speak("Pew pew!"); // The cute rabbit says 'Pew pew!'

// The "proto" rabbit (object abstract) act as a container for all the properties shared by all rabbits (object instances)
// Each individual rabbit (object instance) can contain properties that apply to only themselves

/* CLASSES */
// JS prototype system can be interpreted as the object-oriented concept called classes.

// Under the hood of a 'constructor' function
function makeRabbit(type) {
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

let strangeRabbit = makeRabbit("strange");
strangeRabbit.speak("Meow meow"); // The strange rabbit says 'Meow meow'

// JS provides an easier way to define 'constructor' functions, by putting 'new' keyword in front of the function call.
// Pros: The right prototype is created, bound 'this' keyword to the function and returned at the end of the function
function Rabbit(type) {
	this.type = type;
}

// By default every constructor function gets a property named prototype that holds a plain, empty object
Rabbit.prototype.speak = function(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
};

let blueRabbit = new Rabbit("blue");
blueRabbit.speak("Blu Blu"); // The blue rabbit says 'Blu Blu'

// The actual prototype of the constructor is Function.prototype, since constructor are functions
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); // → true
// The prototype of an instance created via the constructor is the constructor.prototype
console.log(Object.getPrototypeOf(blueRabbit) == Rabbit.prototype); // → true

// Class Notation: the 'class' keyword starts a class declaration allowing to define a constructor and the methods in a single place. This is similar to the lines 78-88
class Bunny {
	constructor(type) {
		this.type = type;
	}
	speak(line) {
		console.log(`The ${this.type} rabbit says ${line}`);
	}
}

let blackBunny = new Bunny("black");
let funnyBunny = new Bunny("funny");

blackBunny.speak("ahoy"); // The black rabbit says ahoy
funnyBunny.speak("a joke"); // The funny rabbit says a joke

// Overriding Prototype Properties
Bunny.prototype.teeth = "small";
console.log(blackBunny.teeth); // small
funnyBunny.teeth = "no teeth";
console.log(funnyBunny.teeth); // no teeth
console.log(blackBunny.teeth, Bunny.prototype.teeth); // small small

/* Maps (noun): is a data structure that keys to values. */
// Similar to an object, but without all the default methods inherited by the Object.prototype alongside the restrictions to only use strings as keys and interface methods set, get and has
let ages = new Map();
ages.set("Andrew", 28);
ages.set("Tom", 40);
ages.set("Alice", 55);

console.log("Alice age is", ages.get("Alice")); // Alice age is 55
console.log("Do we know Mike's age?", ages.has("Mike")); // Do we know Mike's age? false
console.log(ages.has("toString")); // false

// Polymorphism: work with values of different sahpes, as long as the interface (methods) support it
Bunny.prototype.toString = function() {
	return `a ${this.type} bunny`;
};

console.log(String(funnyBunny)); // a funny bunny

// Symbols: symbols returns unique objects
let sym = Symbol("name");
console.log(sym == Symbol("name")); // false
Bunny.prototype[sym] = 55; // assign to the prototype of Bunny a Symbol with a value
console.log(funnyBunny[sym]); // 55

// Iterator Interface: Symbol has interator method. With property names 'next', 'value' and 'done' to interact with
let pieIterator = "PIE"[Symbol.iterator]();
console.log(pieIterator.next()); // { value: 'P', done: false }
console.log(pieIterator.next()); // { value: 'I', done: false }
console.log(pieIterator.next()); // { value: 'E', done: false }
console.log(pieIterator.next()); // { value: undefined, done: true }

class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}

	get(x, y) {
		return this.content[y * this.width + x];
	}

	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}
}

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}

	next() {
		if (this.y == this.matrix.height) {
			return {
				done: true
			};
		}

		let value = {
			x: this.x,
			y: this.y,
			value: this.matrix.get(this.x, this.y)
		};
		this.x++;
		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++;
		}
		return { value, done: false };
	}
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}

// Getters, Setters, Statics
// Getter: Properties that are accessed directly
let varyingSize = {
	get size() {
		return Math.floor(Math.random() * 100);
	}
};

console.log(varyingSize.size);	// random number between 0-100
console.log(varyingSize.size);	// random number between 0-100

class Temperature {
	constructor(celsius) {
		this.celsius = celsius;
	}
	get fahrenheit() {
		return this.celsius * 1.8 + 32;
	}
	set fahrenheit(value) {
		this.celsius = (value - 32) / 1.8;
	}

	static fromFahrenheit(value) {
		return new Temperature((value - 32) / 1.8 );
	}
}

let temp = new Temperature(23);
console.log(temp.fahrenheit); 				// 73.4
// Change fahrenheit temperature to 100, method setter line (225) triggers
temp.fahrenheit = 100;
// Internally returns the celsius 
console.log(temp.celsius);						// 37.77
// Static method are attached to the constructor, rather than the prototype. Wont hace access to the class instance but provide a way to create instances.
let tempFahrenheit = Temperature.fromFahrenheit(125);
console.log(tempFahrenheit.celsius);	// 51.66

// Inheritance
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	introduction() {
		return `Hello I'm ${this.name}, my name is ${this.age}`;
	}
}

class Employee extends Person {
	constructor(name, age, salary) {
		super(name, age);
		this.salary = salary;
	}

	getSalary() {
		return `Earning $${this.salary.toFixed(2)}`;
	}
}

class Kid extends Person {
	constructor(name, age, toys) {
		super(name, age);
		this.toys = toys;
	}

	getToys() {
		return this.toys;
	}
}

let randomDude = new Person("Mr. Irrelevant", 99);
let randomEmployee = new Employee("Mr. Peters", 25, 125000.00000);
let randomKid = new Kid("Bobby", 8, ["Cars", "Legos", "Dolls"]);

console.log(randomEmployee.getSalary());	// Earning $125000.00
console.log(randomKid.getToys());					// [ 'Cars', 'Legos', 'Dolls' ]