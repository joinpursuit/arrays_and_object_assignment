// # Object Exercises
//
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
// c. Write code that logs whether or not `cat` has
//the property 'texture'.
// let cat = {
//   genus: 'Felis',
//   species: 'Catus'
// }
// //a)
// console.log(cat.species)
// //b)
// cat.color = 'Brown';
// console.log(cat.color);
// c)
//   if (cat.hasOwnProperty("texture")){
//     console.log("texture" + cat.texture);
// } else {
//   console.log("cat object does not contain a textur key")
// }
//======================================================
// ## Question 2=
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
// false
// For any variable of the object type,
//the quality operator (i.e. ===) will only return true
//if both sides refer to the exact same object.
//It's not enough for them to just look the same.
//because the first variable is P1 and
//the second variable is p2. so p1 is not equal to p2
//=====================================================================================
// ## Question 3
//
// Given the object variable `spanishNumbers` below:
//
// ```js
// let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}
// ```
//
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
//
// let spanishNumbers = {
//   1: "uno",
//   2: "dos",
//   3: "tres",
//   4: "quatro",
//   5: "cinco"
// }
//a)
// let spanishNumbersKeys = []
// for(let key in spanishNumbers){
//   spanishNumbersKeys.push(key);
// }
// console.log(spanishNumbersKeys)
// //b)
// let spanishNumbersValus = []
// for(let key in spanishNumbers){
//   spanishNumbersValus.push(spanishNumbers[key]);
// }
// console.log(spanishNumbersValus)
// ============================================================================
// ## Question 4
//Write a code block the logs the number of properties an object has.
// let cake= {
// name: " Mousse",
// type: "Chocolate",
// size: " 18 inches"
// }
// let cakeKeys = Object.keys(cake)
// console.log(cakeKeys.length);
// //
//
// ## Question 5
//
// Loop through the following object and log all of the directors.
//
// ``` js
//logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
//

//  using loop:
// /===========
// let films = [
//  {
//    name: 'Psycho',
//    director: 'Alfred Hitchcock',
//    released: 1960,
//  }, {
//    name: 'Citizen Kane',
//    director: 'Orson Welles',
//    released: 1941,
//  }, {
//    name: 'The Usual Suspects',
//    director: 'Bryan Singer',
//    released: 1995,
//  }
// ];
//a)
//let filmsDirector = []
// for (let i = 0; i < films.length; i++) {
//   filmsDirector.push(films[i].director);
// }
// console.log(filmsDirector)
//b)
// let filmsDirector = []
// for(let key in films){
// filmsDirector.push (films[key].director);
// }
// console.log(filmsDirector)
// ===========================================================================
// // ## Question 6
// //
// // You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
// //
// // a. Create an array of strings called `firstNames`
//that contains only the values for `“firstName”`
// //from each object.
//b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
// ====================================
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
// let firstNames = [];
// let fullNames = [];
//  for (i = 0; i < people.length; i++) {
//     firstNames.push(people[i].firstName);
//      }
//      for (i = 0; i < people.length; i++) {
//         fullNames.push(people[i].firstName+ ' ' + people[i].lastName);
//          }
//          console.log(firstNames);
//          console.log(fullNames);
// //
// //=======================================================================================
//let firstNames = [];
//let fulltNames = [];
 // for (i = 0; i < people.length; i++) {
 //    firstNames.push(people[i].firstName);
 //    fullNames.push(people[i].firstName+ ' ' + people[i].lastName);
 //     }
 //     console.log(fullNames);
 //     console.log(firstNames);

// ## Question 7
//===============
// Print the second most common letter in the string below:
//
// var myString = "We're flooding people with information.
//  We need to feed it through a processor.
//   A human must turn information into intelligence or knowledge.
//   We've tended to forget that no computer will ever ask a new question."
//------------------------------------------------------
// class note:
// Print the second most common letter in the string below:
// let obj2 = {
  // W: 1,
  // e: 2,
  // r: 1,
  // e: 100
// }
// Iterating over the string. To get individual chars
// Check current char to see if it's a key in obj2
//  -> if it's not then
//    -> create a key with the currChar in obj2
//    -> and set the value to one. Meaning we have seen the char
//  -> Otherwise
//    -> increase the value that the key (currChar) is holding
//
//
// let str = `We're flooding people with information.
// We need to feed it through a processor.
// A human must turn information into intelligence or knowledge.
// We've tended to forget that no computer will ever ask a new question.`
// str = str.toLocaleLowerCase()
// let obj = {
//   //crrChar: 4
// }
// // let arrStr = str.split('') //not necessary
// for (let i = 0; i < str.length; i++) {
//   let crrChar = str[i]
//   if ( crrChar !== ' '
//     && crrChar !== '.'
//     && crrChar !== '\n'
//     && crrChar !== '\''
//   ) {
//     if (obj[crrChar] === undefined) {
//       obj[crrChar] = 1;
//     } else {
//       obj[crrChar]++;
//     }
//   }
// }
// obj['c'] = 30;
// console.log(obj)
// let mostComm;
// let mostCommCount = 0;
// let secMostComm;
// let secMostCommCount = 0;
// for (let char in obj) {
//   if (obj[char] > mostCommCount) {
//     secMostCommCount = mostCommCount
//     secMostComm = mostComm
//     mostComm = char
//     mostCommCount = obj[char]
//   } else if (obj[char] > secMostCommCount) {
//     //secMostCommCount < mostCommCount) {
//     console.log(`${mostComm}: ${mostCommCount} | ${secMostComm}: ${secMostCommCount} `)
//
//     secMostCommCount = obj[char];
//     secMostComm = char
//     console.log(`=> ${mostComm}: ${mostCommCount} | ${secMostComm}: ${secMostCommCount} `)
//   }
// }
// console.log(mostComm)
// console.log(mostCommCount)
// console.log('===============')
// console.log(secMostComm)
// console.log(secMostCommCount)
// //for(let char of str)
//=====================================================================================
// ## Question 8
//===============
// You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//
// a) Write code to to print the name and total amount deposited of the person who received the most money.
//
//let deposit
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
let deposits = {
    "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
    "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
    "Davies" : [400.98, 56.98, 300.00],
    "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
    "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
};
// a)
let maxPerson = '';
let total = 0;
for (let key in deposits) {
    let sum = 0;
    for(num of deposits[key]) {
        sum += num; // Adds all the numbers in the current array
    }
    if (sum > total) { // Checks if current sum is > total and updates it
        maxPerson = key;
        total = sum;
    }
}
// 8b
let stolenCents = [];
for (let key in deposits) {
    for(num of deposits[key]) {
        let hold = num - Math.floor(num); // Takes current num from array and subtracts original by its floor so ex. 1.5 - 1
        stolenCents.push(hold); // After getting the change push into array
    }
}
for (let key in deposits) {
    let roundDown = [];
    for (num of deposits[key]) {
        num = Math.floor(num); // Rounds down
        roundDown.push(num); // Pushes roudned num in arr
    }
    deposits[key] = roundDown; // Updates current key with rounded value
}
// 8c
let stolenTotal = 0;
for (let num of stolenCents) {
    stolenTotal += num; // Totals all the change $$$
}
console.log(maxPerson);
console.log("8b) ", "Stolen: ", stolenCents , "\n\nOriginal Object Rounded Down: ", deposits);
console.log("8c) ", stolenTotal);
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
//
//
// ## Question 10
// * Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
// * Create a code block that iterates over the array and logs whether the film was watched or not. Examples:
//
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// // `You still need to watch "Wonder Woman" by director Patty Jenkins. `
// let filmsToWatch = [
//   {
//     title :'The Lion King',
//     directors: 'Jon Favreau',
//     watched : 'yes',
//   },
//   {
//     title :'Spider-Man: Far from Home',
//     directors: 'Jon Watts',
//     watched : 'yes',
//   },
//   {
//     title :'Five Feet Apart',
//     directors: 'Justin Baldoni ',
//     watched : 'no',
//   },
// ];
// for ( let value in filmsToWatch) {
//   if (filmsToWatch[value].watched === 'yes')
//   { console.log( 'you already watched \"'+ filmsToWatch[value].title + '\'" directed by' + filmsToWatch[value].director + "." );
// } else {
//   console.log('You still need to watch \"'+ filmsToWatch[value].title + '\'" by director ' + filmsToWatch[value].director + "." );
// }
// }
//
// //
// ## Question 11
//
// Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.
//
// ```js
// const declarationOfIndependence = `
// When in the Course of human events, it becomes necessary for one people to dissolve the
// political bands which have connected them with another, and to assume among the powers of the
// earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle
// them, a decent respect to the opinions of mankind requires that they should declare the causes
// which impel them to the separation.
//
// We hold these truths to be self-evident, that all men are created equal, that they are endowed by
// their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
// of Happiness. That to secure these rights, Governments are instituted among Men, deriving
// their just powers from the consent of the governed, That whenever any Form of Government
// becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to
// institute new Government, laying its foundation on such principles and organizing its powers in
// such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence,
// indeed, will dictate that Governments long established should not be changed for light and
// transient causes; and accordingly all experience hath shewn, that mankind are more disposed to
// suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they
// are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same
// Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
// to throw off such Government, and to provide new Guards for their future security. Such has
// been the patient sufferance of these Colonies; and such is now the necessity which constrains
// them to alter their former Systems of Government. The history of the present King of Great
// Britain is a history of repeated injuries and usurpations, all having in direct object the
// establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a
// candid world.
// `
// ```
