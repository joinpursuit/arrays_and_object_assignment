// ## Question 1
// Given the cat object below:
//  let cat = {
//    genus: 'Felis',
//    species: 'Catus'
// }
// a. Log the species of `cat`.
// b. Add a new key 'color' and give it a value.
// c. Write code that logs whether or not `cat` has the property 'texture'.

let cat = {
  genus: 'Felis',
  species: 'Catus'
  //,texture: 'soft'
}
console.log("species " + cat.species)

cat.color = 'Gray'
console.log("Color " + cat.color)

if(cat.texture){
  console.log("this is a property")
}else{
  console.log("this is not a property")
}

console.log("-----------------")
// ## Question 2
// What will the code below log?  Explain why.
// let p1 = {
//   name: 'Joe'
// }
// let p2 = {
//   name: 'Joe'
// }
// console.log(p1 === p2)
console.log("javascript will print out false because both sides don't refer to the exact same object.")
console.log("-----------------")
// ## Question 3
// Given the object variable `spanishNumbers` below:
// let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro",
// 5: "cinco"}
// a. Write a code block that takes an object variable and stores
// the *keys* in an array.  Then log the array.
// b. Write a code block that takes an object variable and stores
// the *values* in an array.  Then log the array.

let spanishNumbers = {1: "uno",
                      2: "dos",
                      3: "tres",
                      4: "quatro",
                      5: "cinco"}
let numberKeys = Object.keys(spanishNumbers)
console.log(numberKeys)

let numberValue = Object.values(spanishNumbers)
console.log(numberValue)
console.log("-----------------")

// ## Question 4
// Write a code block the logs the number of properties an object has.
let numKey =Object.keys(spanishNumbers)
console.log(numKey)


console.log("-----------------")
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
//logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
for(let w = 0; w < films.length; w++){
  console.log(films[w].director)
}

// ## Question 6
//
// You are given an array of objects. Each object in the array contains exactly
// 2 keys `“firstName”` and `“lastName”`
// let people = [
//     {
//         "firstName": "Calvin",
//         "lastName": "Newton"
//     },
//     {
//         "firstName": "Garry",
//         "lastName": "Mckenzie"
//     },
//     {
//         "firstName": "Leah",
//         "lastName": "Rivera"
//     },
//     {
//         "firstName": "Sonja",
//         "lastName": "Moreno"
//     },
//     {
//         "firstName": "Noel",
//         "lastName": "Bowen"
//     }
// ]
// a. Create an array of strings called `firstNames` that contains only the values
// for `“firstName”` from each object.
// b. Create an array of strings called `fullNames` that contains the
// values for `“firstName”` and `“lastName”` from the object separated by a space.
console.log("-----------------")
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
let names = []
for(let t = 0; t < people.length; t++){
  names.push(people[t].firstName)
}
console.log(names)

let fullNames = Object.values(people)
console.log(fullNames);

console.log("-----------------")

// ## Question 7
// Print the second most common letter in the string below:
var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
var stringLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var countList = []
for(let o = 0 ; o < myString.length; o++){
  stringLetter = o
if (countList.includes(myString[o])){
  
}
}
console.log(myString)

// ## Question 8
//
// You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//
// a) Write code to to print the name and total amount deposited of the person who received the most money.
//
// b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.
//
// c) How much money did you steal?
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


// ## Question 9
//
// * Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
// * Create a loop that logs the recipe information, so it looks like:
//
// ```javascript
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
// ```

console.log("-----------------")

let mole ={
  name: "Mole",
  servings: 2,
  ingredients: "cinnamon, cumin, cocoa"
}
let myRecipe = []
for (let values in mole) {
myRecipe = Object.values(mole)
}
console.log(myRecipe)
console.log("-----------------")

// ## Question 10
// * Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
// * Create a code block that iterates over the array and logs whether the film was watched or not. Examples:
//
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `

let filmss =[
  { watched: "Wonder Women",
   notWatched: "Lion King",
   watched: "Black Panther" }
 ]
 for(let p = 0; p < films.length; p++){
   if(Object.keys(filmss) === "watched"){
     console.log("you already watched " + filmss)
   }else{
     console.log("Still need to watch " )
   }

 }
