// //QUESTION 1.
// let cat = {
//   genus: 'Felis',
//   species: 'Catus'
// }
//
//
// //a. Log the species of `cat`.
//   console.log(cat.species)
//
// //b. Add a new key 'color' and give it a value.
//   console.log(cat.color = 'Grey')
//
// //c. Write code that logs whether or not `cat` has the property 'texture'.
//   console.log(cat.texture = false)



// //QUESTION 2
//
//   //What will the code below log?  Explain why.
//
//   let p1 = {
//     name: 'Joe'
//   }
//
//   let p2 = {
//     name: 'Joe'
//   }
//
//   console.log(p1 === p2)

/*THE CODE BELOW WILL LOG FALSE BECAUSE THE CONSOLE IS COMPARING IF THE
TWO KEY VALUES ARE EQUAL TO EACH OTHER AS A BOOLEAN EXPRESSION. SINCE
THE TWO KEYS ARE NOT EQUAL THE OUTPUT WILL BE FALSE*/




// //QUESTION 3
// let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}
// //
//
// //a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
//   let spanishNumberKeys = []
//
//   spanishNumberKeys.push(Object.keys(spanishNumbers))
//   console.log(spanishNumberKeys)
// //
// // //b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
// //
//   let spanishNumberValues = []
//   spanishNumberValues.push(Object.values(spanishNumbers))
//     console.log(spanishNumberValues)






// //QUESTION 4
//
//   //Write a code block the logs the number of properties an object has.
//
//   let apple = {
//   color : 'red',
//   ripeness : 'ripe',
//   type : 'Gala',
//   qty : 2,
//   owner : 'Tomas'
//   }
//
// let appleKey = Object.keys(apple).length
// console.log(appleKey)



//QUESTION 5 still trying to make this into a list
//Loop through the following object and log all of the directors.

// let films = [
//  {
//    name: 'Psycho',
//    director: 'Alfred Hitchcock',
//    released: 1960
//  }, {
//    name: 'Citizen Kane',
//    director: 'Orson Welles',
//    released: 1941
//  }, {
//    name: 'The Usual Suspects',
//    director: 'Bryan Singer',
//    released: 1995
//  }
// ]
//  let filmDirect = []
//
//  for (let a = 0; a < films.length; a++) {
//    filmDirect.push(films[a].director)
//
//   console.log(filmDirect)
// }

//logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'






// //QUESTION 6
//
// //You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
//
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
//
// //a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
//
let firstNameArr = []
for (let i = 0; i < people.length; i++) {
   firstNameArr.push(people[i].firstName)
  console.log(firstNameArr)

}
//
// //b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
// let fullNames = []
// for (let j = 0; j < people.length; j++) {
//
//   fullNames.push(people[j].firstName + ', ' + people[j].lastName)
// }
// console.log(fullNames)

//QUESTION 7

//Print the second most common letter in the string below:

//var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
// let obj2 = {
  // W: 1
  // e: 2
  // r: 1
//}


//iterating over the strings. to get individual characters
//check current character to see if it is a key in obj2
//  -> if it's not then
//          ceate a key with the currChar in obj2
// ->       and set the value to one. meaning we have seen the char
// -> Otherwise
// - increase the value that the currChar
//QUESTION 8
//
// You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//
// a) Write code to to print the name and total amount deposited of the person who received the most money.
//
// // b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.
// //
// // c) How much money did you steal?
//
// let deposits = {
//  "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
//  "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
//  "Davies" : [400.98, 56.98, 300.00],
//  "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
//  "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
// }





//QUESTION 9

//Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
//Create a loop that logs the recipe information, so it looks like:

// let faveRecipes = {
//   name : 'cheescake',
//   servings : 10,
//   //ingredients : 'cream cheese', 'graham crackers', 'butter', 'sugar', 'eggs',
// }
//
// for (let key in faveRecipes) {
//   console.log(keys);
//}
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
