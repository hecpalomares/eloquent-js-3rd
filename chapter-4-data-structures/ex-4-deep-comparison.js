function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a == null || typeof a != 'object' || b == null || typeof b != 'object') {
    return false;
  }

  // count the number of loops
  let propsInA = 0;
  let propsInB = 0;

  for (var prop in a) {
    propsInA++;
  }

  for (var prop in b) {
    propsInB++;
    // compare each property in b with all the properties in a object using this expression if (!(prop in a)
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }
  
  //  property in object a that equals to property in object b
  return propsInA == propsInB;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));