// Arrow Functions

// MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// caniuse.com: https://caniuse.com/#search=arrow%20functions

// Arrow functions are an alternate form of function notation that was added in ECMAScript 2015, otherwise known as ES6.

// In some ways the differences can be viewed as only an alternate syntax, but there one key technical difference to keep in mind: arrow functions do not create their own scope, so they get their contextual "this" from the parent context. That means arrow functions cannot be used for constructor functions or to add methods to a constructor's prototype property.

// Note that arrow functions also have notational variances based upon the number of arguments they receive and also the number of statements enclosed in them. Arrow functions are ideal for use in pure "one-liner" functions.

// One parameter

function logger(input) {
  return console.log('logger', input);
}

let logger1 = input => console.log('logger1', input); // In this case the right side of the arrow is an implicit return value that is assigned to the variable. This happens when there is only one statement in the function.

let logger2 = (input) => console.log('logger2', input); // Some like to use optional parentheses around the parameter

logger('Larry');
logger1('Curly');
logger2('Moe');

// Two+ parameters: these require parentheses

function adder(a, b, c){
  return console.log('adder', a + b + c);
}

let adder1 = (a, b, c) => console.log('adder1', a + b + c);

adder(10,10,10);
adder1(20,20,20);

// Multiple statements in the function requires curly braces for a code block AND a return statement.

function logAndAdd(x, y){
  console.log('logAndAdd x', x);
  console.log('logAndAdd y', y);
  return console.log('logAndAdd', x + y)
}

let logAndAddArrow = (x, y) => {
  console.log('logAndAddArrow x', x);
  console.log('logAndAddArrow y', y);
  return console.log('logAndAddArrow', x + y);
}

logAndAdd(2,3);
logAndAddArrow(6,7);
