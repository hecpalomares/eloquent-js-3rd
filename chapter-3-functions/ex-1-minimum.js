function calcMinimum(a, b) {
  const areNumbers = (typeof a === "number") && (typeof b === "number");

  if (!areNumbers) {
    return "Arguments are not a number!";
  }

  if (a < b && areNumbers) {
    return a;
  } else if (a > b && areNumbers) {
    return b;
  } else {
    return "Numbers are equal";
  }
}

console.log(calcMinimum(-7, -7)); // Numbers are equal
console.log(calcMinimum(5, 3)); // 3
console.log(calcMinimum(0, -10)); // -10
console.log(calcMinimum(0, 3)); // 0
console.log(calcMinimum(3, -10)); // -10
console.log(calcMinimum(3, 3)); // Numbers are equal
console.log(calcMinimum("World", "Hello")); // Arguments are not a number!