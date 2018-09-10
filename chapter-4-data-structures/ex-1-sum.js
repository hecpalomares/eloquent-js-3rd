function range(start, end) {
  let range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  return range;
}

function sum(arrayToSum) {
  return arrayToSum.reduce((a, b) => a + b);
}

function rangeStep(start, end, step = 1) {
  let rangeStep = [];
  if(start < end) {
    for (let i = start; i <= end; i += step) {
      rangeStep.push(i);
    }
  } else {
    step = Math.abs(step);
    for (let i = start; i >= end; i -= step) {
      rangeStep.push(i);
    }
  }
  return rangeStep;
}

console.log(range(2, 5));                // [2, 3, 4, 5]
console.log(sum(range(1, 10)));          // 14
console.log(rangeStep(2, 10, 2));        // [ 2, 4, 6, 8, 10 ]  
console.log(rangeStep(2, 8));            // [ 2, 3, 4, 5, 6, 7, 8 ]
console.log(rangeStep(8, 2, -2));        // [ 8, 6, 4, 2 ]
console.log(rangeStep(5, 2, -1));        // [ 5, 4, 3, 2 ]