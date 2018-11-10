let map = {
  one: true,
  two: true,
  hasOwnProperty: true
};
// 1. The Object.prototype.hasOwnProperty exists in every plain object
// 2. .call calls a function (hasOwnProperty) binded to a specific 'this' object
// 3. The second parameter of the call is the property to found on the object 
console.log(Object.prototype.hasOwnProperty.call(map, "one")); // → true