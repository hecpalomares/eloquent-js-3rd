function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

// The loop take the 'node' as the list, will run until 'null' (the end list), move to next iteration by moving the 'node' to the next element on the list.
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if(!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}

console.log(arrayToList([10, 20])); // { value: 10, rest: { value: 20, rest: null } }
console.log(listToArray(arrayToList([10, 15, 20])));  // [ 10, 15, 20 ]
console.log(prepend(0, arrayToList([10, 20]))); // { value: 0, rest: { value: 10, rest: { value: 20, rest: null } } }

console.log(nth(arrayToList([4, 5, 6, 7]), 2)); // 6
