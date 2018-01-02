'use strict'

// function foo() {
//   console.log('hello world')
// }

let foo = () => console.log('hello world')
// no params, empty parens required
// return is implicit on one liner
// no curly brackets required on one liner

// old school way of function definition
// creates function scope
function sumTwoNums(one, two) {
  return one + two
}

let subTwoNums = (one, two) => one - two
// two or more params need parens
// return is implicit on one liner
// no curly brackets required on one liner

let multByTwo = num => num * 2
// only one param, no parens required
// return is implicit on one liner
// no curly brackets required on one liner

let multByThree = num => {
  let newVal = num * 3
  return newVal
}

// context of 'this' keyword effected by arrow functions
let obj = {
  name: 'Scott',
  whatIsThis: () => console.log(this), // => Window!
  speak: () => console.log(this.name), // => undefined
  speakThatWorks: function() {
    console.log(this.name)
  }
}
