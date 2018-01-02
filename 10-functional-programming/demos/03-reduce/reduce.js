'use strict'

const doctors = [
  { number: 20, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 30, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 }
];


// `.reduce()` => returns a new value; defaulting to integer values, but can also be a new array of values
var arr = [34, 55, 3, 23, 12, 7, 99]

let sumArray = arr.reduce((acc, current) => acc + current)
console.log(sumArray)
// => returns the total sum of the array, 233 (default accumulator is `0`)

let sumArrayPlusOne = arr.reduce((acc, current) => acc + current, 1)
console.log(sumArrayPlusOne)
// => returns the total sum of the array from the starting value, 234 (accumulator is `1`)


// Below passes an array as the accumulator.
let newArr = doctors.reduce((acc, curr) => {
  if (curr.number > 10) {
    acc.push({
      number: curr.number,
      name: curr.actor.split(' '),
      yearsPlayed: (curr.end - curr.begin) + 1
    })
  }
  return acc
}, [])
// .filter()
// .map()
// .reduce() // REVIEW: Reminder to students that they can continue to chain
              // these methods to continue their logic
console.log(newArr)
