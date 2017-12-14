'use strict'

if(true) {
  let x = 25
  console.log('inside the scope of the if block', x)
}
console.log('outside the scope of the if block', x)

for(var i = 0; i < 3; i++) {
  let y = 'Flibbity'
  console.log('inside the scope of the for loop', y)
}
console.log('outside the scope of the for loop', y)


const jibbit = 'hello world'
console.log(jibbit)
jibbit = 'goodbye world'
console.log(jibbit)

const newObj = {
  name: 'Scott'
}
console.log(newObj.name)
newObj.name = 'Dan'
console.log(newObj.name)
