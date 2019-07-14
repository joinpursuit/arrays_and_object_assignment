// ## Question 1
// Given the cat object below

 let cat = {
   genus: 'Felis',
   species: 'Catus'
}

//a. Log the species of `cat`.
console.log(cat.genus);
// b. Add a new key 'color' and give it a value.
cat.color = "black"
console.log(cat);
// c. Write code that logs whether or not `cat` has the property 'texture'.
console.log(cat.texture);

// ## Question 2
// What will the code below log?  Explain why.

let p1 = {
  name: 'Joe'
}
let p2 = {
  name: 'Joe'
}
console.log(p1 === p2)

// this logs false.  two different objects will not be equal.

// ## Question 3
// Given the object variable `spanishNumbers` below:

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}

// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.

let spanishNumbersKeys = []
for (let keys in spanishNumbers){
  spanishNumbersKeys.push(keys)
}
console.log(spanishNumbersKeys);
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.

let spanishNumbersValues = []
for (let keys in spanishNumbers){
  spanishNumbersValues.push(spanishNumbers[keys])
}
console.log(spanishNumbersValues);

// ## Question 4
//
// Write a code block the logs the number of properties an object has.

console.log(Object.keys(spanishNumbers).length);

// ## Question 5
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

for(let i = 0; i < films.length; i++){
  console.log(films[i].director);
}

// ## Question 6
// You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`

let people = [
    {
        firstName: "Calvin",
        lastName: "Newton"
    },
    {
        firstName: "Garry",
        lastName: "Mckenzie"
    },
    {
        firstName: "Leah",
        lastName: "Rivera"
    },
    {
        firstName: "Sonja",
        lastName: "Moreno"
    },
    {
        firstName: "Noel",
        lastName: "Bowen"
    }
]

// a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.

let firstNames = []

for (let name in people){
  firstNames.push(people[name].firstName)
}
console.log(firstNames);
// b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.

let fullNames = []

for (let b in people){
  fullNames.push(people.firstName)

}
console.log(fullNames);
