// Arrays:
let sequence = [1, 2, 3];
// 'push' adds an element to end of the array
sequence.push(4);
sequence.push(5);
console.log(sequence);  // [ 1, 2, 3, 4, 5 ]
// 'pop' removes an element to end of the array
sequence.pop();
console.log(sequence);  // [ 1, 2, 3, 4 ]

let todoList = [];

// Add tasks to the end of the todoList
function remember(task) {
  todoList.push(task);
}

// Get the task from the top of todoList
function getTask() {
  return todoList.shift();
}

// Add as task to the start of the todolist
function rememberUrgently(task) {
  todoList.unshift(task);
}
console.log(todoList);  // []
remember('Eat');
remember('Program');
remember('Play Piano');
console.log(todoList);  // [ 'Eat', 'Program', 'Play Piano' ]
rememberUrgently('Pay the bills!');
console.log(todoList);  // [ 'Pay the bills!', 'Eat', 'Program', 'Play Piano' ]