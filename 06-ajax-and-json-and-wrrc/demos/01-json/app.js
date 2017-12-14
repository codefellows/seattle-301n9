'use strict'

function Person(name, age, ninja) {
  this.name = name
  this.age = age
  this.ninja = ninja,
  this.speak = function() {
    return `Hello, my name is ${this.name}, and I'm ${this.age} years old.`
  }
}


let scott = new Person('Scott', 34, false)
let jsonScott = JSON.stringify(scott)
console.log('original instance', scott)
console.log('json instance', jsonScott) // note that the speak method is not stringified as json

let parsedScott = JSON.parse(jsonScott) // note that this is no longer a Person obj
console.log('parsed json', parsedScott)

let newScott = new Person(parsedScott.name, parsedScott.age, parsedScott.ninja);
console.log(newScott === scott) // => false; these are two completely separate instances, despite the same values
