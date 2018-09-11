function reverseArray(array) {
  let reversedArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  let halfArray = Math.floor(array.length / 2);
  console.log(halfArray);
  for (let index = 0; index < halfArray; index++) {
    const firstElement = array[index];
    const secondElement = array[array.length - 1 - index];
    array[index] = secondElement;
    array[array.length - 1 - index] = firstElement;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C", "D"]));  // [ 'D', 'C', 'B', 'A' ]
console.log(reverseArrayInPlace(["A", "B", "C", "D", "E"]));  // [ 'E', 'D', 'C', 'B', 'A' ]