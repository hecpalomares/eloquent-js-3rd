// Encapsulation
// Divide the program into smaller pieces, and make each piece responsible for managing its own state.
// Properties part of the interface are called public. Properties part of the implementation are called price.
// Separating interface from implemntation is a great idea.

// Methods: properties that hold function values
let rabbit = {};
rabbit.speak = function (line) {
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
