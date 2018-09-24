// Flattening Arrays
function flattening(arrayNum) {
  return arrayNum.reduce((flat, current) => {
      return flat.concat(current);
  }, []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays));

// Looping own array
function loop(start, test, update, body) {
  for(let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(10, n => n >= 0, n => n - 2, console.log);

// Every Method (loop)
function every(array, test) {
  for(let i = 0; i < array.length; i++) {
    if(!test(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));   // → true
console.log(every([2, 4, 16], n => n < 10));  // → false
console.log(every([], n => n < 10));          // → true

function everyWithSome(array, test) {
  let result = true;
  array.some(num => {
    if(!test(num)) {
      result = false;
    }
  });
  return result;
}

console.log(everyWithSome([11, 12, 13], n => n < 10));  // → false
console.log(everyWithSome([11, 19, 15], n => n > 10));  // → true