// # Object Exercises
//
// ## Question 1
//
// Given the cat object below:
//
// ```js
let cat = {
    genus: 'Felis',
    species: 'Catus'
}
// ```
//
// a. Log the species of `cat`.
console.log(cat['species'])
// b. Add a new key 'color' and give it a value.
cat.color = 'gray'
console.log(cat)
// c. Write code that logs whether or not `cat` has the property 'texture'.
cat.texture = 'soft'
let output = 'no texture'
for (key in cat) {
  if (key === 'texture') {
    output = 'has texture'
  }
}
console.log(output)

// ## Question 2
//
// What will the code below log?  Explain why.
//
// ```js
// let p1 = {
//   name: 'Joe'
// }
//
// let p2 = {
//   name: 'Joe'
// }
//
// console.log(p1 === p2)
// ```
let answer = "true, because it's a boolean expression that compares the contents of both objects and returns true if they're equal"

// ## Question 3
//
// Given the object variable `spanishNumbers` below:
//
// ```js
let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco"}
// ```
//
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
let numbers = []
for (a in spanishNumbers) {
  numbers.push(a)
}
console.log(numbers)
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
let letters = []
for (b in spanishNumbers) {
  letters.push(spanishNumbers[b])
}
console.log(letters)

// ## Question 4
//
// Write a code block the logs the number of properties an object has.
let shoe = {
  size: 12,
  color: 'brown',
  price: 59.99,
}
let properties = 0
for (c in shoe) {
  properties++
}
console.log(properties)

// ## Question 5
//
// Loop through the following object and log all of the directors.
//
// ``` js
let films = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   released: 1960
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   released: 1941
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   released: 1995
 }
]
let directors = []
for (d of films) {
  directors.push(d.director)
}
console.log(directors.join(', '))

// ## Question 6
//
// You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
//
// ```js
let people = [
    {
        "firstName": "Calvin",
        "lastName": "Newton"
    },
    {
        "firstName": "Garry",
        "lastName": "Mckenzie"
    },
    {
        "firstName": "Leah",
        "lastName": "Rivera"
    },
    {
        "firstName": "Sonja",
        "lastName": "Moreno"
    },
    {
        "firstName": "Noel",
        "lastName": "Bowen"
    }
]
// ```
// a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
let firstNames = []
for (e of people) {
  firstNames.push(e["firstName"])
  }
console.log(firstNames)
//b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
let fullNames = []
for (f of people) {
  fullNames.push(`${f.firstName} ${f.lastName}`)
}
console.log(fullNames)

//## Question 7
//
//Print the second most common letter in the string below:

var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
myString = myString.toLocaleLowerCase()
let container = {}
for (let g = 0; g < myString.length; g++) {
  let char = myString[g]
  if (char !== " " && char !== "." && char!=="'")
  if (container[char] === undefined) {
    container[char] = 1
  } else {
    container[char]++
  }
}
let common
let count = 0
for (let h in container) {
  if (container[h] > count) {
    count = container[h]
    common = h
  }
}
let second
count = 0
for (let i in container) {
  if (container[i] > count & container[i] < container[common]) {
    count = container[i]
    second = i
  }
}
console.log(second)

// ## Question 8
//
// You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//
// ```js
// let deposits = {
//  "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
//  "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
//  "Davies" : [400.98, 56.98, 300.00],
//  "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
//  "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
// }
// ```
// a) Write code to to print the name and total amount deposited of the person who received the most money.
//
// b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.
//
// c) How much money did you steal?
//
//
