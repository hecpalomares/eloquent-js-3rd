// Higher-Order Functions: Functions that operate on other functions, either by taking them as arugments or by returning them. Abstractt over actions, not just values.
// Abstraction: hide details, give us the ability to see the problems at a higher level.
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Create new functions
function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(17));   // true
console.log(greaterThan10(8));    // false

// Change other functions
function noisy(f) {
  return(...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1, -3);
// calling with [ 3, 2, 1, -3 ]
// called with [ 3, 2, 1, -3 ] , returned -3

// functions to provide new types of control flow
function unless(test, then) {
  if(!test) then();
}

repeat(7, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// 0 'is even'
// 2 'is even'
// 4 'is even'
// 6 'is even'

// Filtering Arrays (logic of es6 .filter()): builds up a new array with the elements that pass the test. This is a 'pure' function since it doesn't mutate the given array.
function myFilter(array, test) {
  let passed = [];
  for(let element of array) {
    if(test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

let numbers = [5, 25, 12, 8, 2];

console.log(myFilter(numbers, number => number > 10));  //  [ 25, 12 ]

// Mapping Arrays (logic of es6 .map()): transform an array by applying a function to all its elements and building a new array from the returned values.
function myMap(array, transform) {
  let mapped = [];
  for(let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let persons = [{name: "Hector", age: 26}, {name: "Andrew", age:  28}];
let personNames = myMap(persons, person => person.name);
console.log(personNames);  //  [ 'Hector', 'Andrew' ]

// Reducing Arrays (logic of es6 .filter()): compute a single value from them. Parameters are the array, the combining function and start value.
function reduce(array, combine, start) {
  let current = start;
  for(let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// Composability
// Higher-order functions shine when composing operations is needed.
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// Recognizing Text
function countBy(items, groupName) {
  let counts = [];
  for(let item in items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name === name);
    if(known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 4));