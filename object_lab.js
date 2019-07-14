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

let cat = {
   genus: 'Felis',
   species: 'Catus',
 }
 console.log(cat.species)



// b. Add a new key 'color' and give it a value.

let cat = {
   genus: 'Felis',
   species: 'Catus',
 }
 cat.color = "white"
 console.log(cat)



// c. Write code that logs whether or not `cat` has the property 'texture'.
let cat = {
   genus: 'Felis',
   species: 'Catus',
 }
if(cat.texture === true){
  console.log("Texture does exists")
}else{
  console.log("texture does not exists")
}



//
// ## Question 2
//
// What will the code below log?  Explain why.
//
// ```js
// let p1 = {
//   name: 'Joe'
// }
// //
// let p2 = {
//   name: 'Joe'
// }
//
// console.log(p1 === p2)
// ```
//


false, joe does not equal joe. Even though Joe and Joe are the same, p1 and p2 are not the same object thus the 'Joe' does not equal "Joe."



// ## Question 3
//
// Given the object variable `spanishNumbers` below:
//
// ```js
// let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}
// ```
//
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
// // b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
// //
//
let spanishNumbers = {
  1: "uno",
  2: "dos",
  3: "tres",
  4: "quatro",
  5: "cinco"
}

let spanishKeys = Object.keys(spanishNumbers)
console.log(spanishKeys)

let spanishValues= Object.values(spanishNumbers)
console.log(spanishValues)
//
//
//
//
//
// // ## Question 4
// //
// // Write a code block the logs the number of properties an object has.
//
let spanishKeysLength = (Object.keys(spanishNumbers).length)
console.log(spanishKeysLength)


//
// ## Question 5
//
// Loop through the following object and log all of the directors.
//
// // ``` js
let films = [
 {
   name : 'Psycho',
   director : 'Alfred Hitchcock',
   released : 1960
 }, {
   name : 'Citizen Kane',
   director : 'Orson Welles',
   released : 1941
 }, {
   name : 'The Usual Suspects',
   director : 'Bryan Singer',
   released : 1995
 }
]
// //
// // //logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
// // ```
//
for(let i = 0; i < films.length; i++)
console.log(films[i].director)
//
//
//
//
//
// ## Question 6
//
// You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
//
// // ```js
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
// ]
// // ```
// // a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.

let firstNames = [];
for(i = 0 ; i < people.length; i++){
  firstNames.push(people[i].firstName);
}
console.log(firstNames);

//
//
//
// b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
// // //
let fullNames = [];
for(i = 0 ; i < people.length; i++){
  fullNames.push(people[i].firstName + " " + people[i].lastName);
}
console.log(fullNames)




// ## Question 7
//
// Print the second most common letter in the string below:
//
// var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
//
//
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
//
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
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `
//
//
// ## Question 11
//
// Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.
//
// ```js
const declarationOfIndependence = `
When in the Course of human events, it becomes necessary for one people to dissolve the
political bands which have connected them with another, and to assume among the powers of the
earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle
them, a decent respect to the opinions of mankind requires that they should declare the causes
which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by
their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
of Happiness. That to secure these rights, Governments are instituted among Men, deriving
their just powers from the consent of the governed, That whenever any Form of Government
becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to
institute new Government, laying its foundation on such principles and organizing its powers in
such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence,
indeed, will dictate that Governments long established should not be changed for light and
transient causes; and accordingly all experience hath shewn, that mankind are more disposed to
suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they
are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same
Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
to throw off such Government, and to provide new Guards for their future security. Such has
been the patient sufferance of these Colonies; and such is now the necessity which constrains
them to alter their former Systems of Government. The history of the present King of Great
Britain is a history of repeated injuries and usurpations, all having in direct object the
establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a
candid world.
// `
// ```

let decOfIndep2 = declarationOfIndependence.split(" ")
let decGreThan5 = []
for(i = 0; i < decOfIndep2.length, i++){
  if (decOfIndep2.length > 5)
  decGreThan5.push(decOfIndep2[i])
}
console.log(decGreThan5)


Note: I tried to solve the problem but it did not work out.
I am not sure if I am missing something or if I made a mistake.
