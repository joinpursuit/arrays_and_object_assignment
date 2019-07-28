// ## Question 1
//
// Given the cat object below:
//
// ```js
//  let cat = {
//    genus: 'Felis',
//    species: 'Catus'
// }
// ```
//
// a. Log the species of `cat`.
// b. Add a new key 'color' and give it a value.
// c. Write code that logs whether or not `cat` has the property 'texture'.
console.log('NUMBER 1a:')

 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
console.log(cat['species']);

console.log('NUMBER 1b:')
cat.color = 'Orange'
console.log(cat.color);

// console.log('Cat texture = ' + cat.texture)
console.log('NUMBER 1c:')
cat.texture = 'soft'

if(cat.texture) {
  console.log('Cat texture is ' + cat.texture)
} else {
  console.log('Texture does not exist')
}

console.log('--------------------------------------------------------------')
console.log('NUMBER 2:')
// What will the code below log?  Explain why.

let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
console.log('--------------------------------------------------------------')
console.log('NUMBER 3 ')
// The expression within the console.log is consisdered a boolean because you're asking
// if the object p1 is equal to the object p2. This will result in FALSE, because although
// they have the same keys and values, the objects are consisdered different. This can be
// changed to true if prior to the console.log, you set the objects to be equal to each other.

// Given the object variable `spanishNumbers` below:

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}

// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
console.log('NUMBER 3a:')
let spanishKeys = Object.keys(spanishNumbers)
console.log(spanishKeys);

// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
console.log('NUMBER 3b:')
let spanishValues = Object.values(spanishNumbers)
console.log(spanishValues);

console.log('--------------------------------------------------------------')
console.log('NUMBER 4: ')
// Write a code block the logs the number of properties an object has.
let dogTraits = {Size: 'small', Hair: 'fluffy', Ears: 'pointed'}
let number = Object.keys(dogTraits).length
console.log(`There are ${number} dog properties `)

console.log('--------------------------------------------------------------')
console.log('NUMBER 5: ')
// Loop through the following object and log all of the directors.
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
for(let i = 0; i < films.length; i++) {
  console.log(films[i].director)
}
console.log('--------------------------------------------------------------')
console.log('NUMBER 6: ')
// You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
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
// a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
console.log('NUMBER 6a: ')
let newArray = []
for(let i = 0; i < people.length; i++) {
  newArray.push(people[i].firstName)
}
console.log(newArray)

// b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
let newArray2 = []
for(let i = 0; i < people.length; i++) {
  newArray2.push(`${people[i].firstName} ${people[i].lastName}`)
}
console.log(newArray2)


console.log('--------------------------------------------------------------')
console.log('NUMBER 7: ')
// // Print the second most common letter in the string below:
var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
str = myString.toLowerCase()
let newObj = {}
for (let i = 0; i < str.length; i++) {
  let currChar = str[i]
  if(currChar !== ' ' && currChar !== '.' && currChar !== '\'') {
    if (newObj[currChar] === undefined) {
    newObj[currChar] = 1
    } else {
    newObj[currChar] ++
    }
  }
}
console.log(newObj)

let mostComm;
let mostCommCount = 0;
let secMostComm;
let secMostCommCount = 0;
for (let char in newObj) { // for in loop for objects is used here to compare the value of a
  if (newObj[char] > mostCommCount) { // key within the object (newObj[char]) to the mostCommCount (0)
    mostCommCount = newObj[char];
    mostComm = char
  } else if (secMostCommCount < newObj[char]) {
    secMostCommCount = newObj[char];
    secMostComm = char
  }
} console.log(`The most common letter is ${mostComm} with a count of: ${mostCommCount}`)
console.log(`The second most common count is ${secMostComm} with a count of: ${secMostCommCount}`)

console.log('--------------------------------------------------------------')
console.log('NUMBER 8: ')
