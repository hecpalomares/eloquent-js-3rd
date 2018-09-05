function isEven(numberToCompare) {
  numberToCompare = Math.abs(numberToCompare);
  if (numberToCompare === 0) {
    return true;
  } else if (numberToCompare === 1) {
    return false;
  } else {
    return isEven(numberToCompare - 2)
  }
}

console.log(isEven(8)); // true
console.log(isEven(5)); // false
console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(-2)); // true
console.log(isEven(-7)); // false