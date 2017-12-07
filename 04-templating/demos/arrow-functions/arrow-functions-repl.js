// Function with one parameter
let logMessage = function(input) {
  console.log(input);
}

// Refactor into an arrow function
let logMessage = function(input) {
  console.log(input);
}

// Parentheses are not needed if there is only one parameter
// This can also be written on one line
let logMessage = input => console.log(input);

logMessage('hi');



// Function with more than one paramter
let adder = function(a, b) {
  return a + b;
}

// Refactor into an arrow functions
// Multiple paramters must be surrounded by parentheses
let adder = (a, b) => a + b;

adder(3, 7);



// Multi-line function
let multiLine = function(a, b) {
  console.log(a);
  console.log(b);
  return a * b;
}

// Refactor into an arrow function
// Curly brackets are needed for longer code blocks
let multiLine = (a, b) => {
  console.log(a);
  console.log(b);
  return a * b;
}

multiLine(3, 4);



// Function which returns an object literal
let returnObjLit = function() {
  return {
    key1: 1,
    key2: 2
  }
}

// Refactor into an arrow function
// The object literal must be surrounded by parentheses, otherwise is interpreted as a code block
let returnObjLit = () => ({key1: 1, key2: 2});

returnObjLit();
