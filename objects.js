// // 1. Log the cats species.
//
//  let cat = {
//    genus: 'Felis',
//    species: 'Catus'
// }
// console.log(cat.species);
// console.log(cat);


// // 2. Add a color quality to the cat from the previous question.
// //
// let cat = {
//   genus: 'Felis',
//   species: 'Catus'
// }
//
//   cat.color= 'ginger'
//   console.log(cat);
//
// // 3. How do you check if our cat object has the propery texture?
//
// console.log(cat.texture);
// console.log(cat.color);

// // 4. Loop through the following object and log all of directors.
//
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
//
// for (let i = 0; i < films.length ; i++){
//   console.log(films[i].director);
// }


// // 5. What will this code log?
//
// let p1 = {
//   name: 'Joe'
// }
//
// let p2 = {
//   name: 'Joe'
// }
//
// console.log(p1 === p2)
// // answer: False


// #### Recipe

// * Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
// * Create a loop that logs the recipe information, so it looks like:

//
// let recipe = {
//   name: "Mole",
//   servings: 2,
//   ingredients: ["cinnamon", "cumin", "cocoa"]
// }
//
// for (let key in recipe){
//   console.log(key + ": " + recipe[key]);
// }


// // #### getProps
// // Write a code block that takes an object variable and logs all the keys as an array.
//
//
// let person = {
//    firstName: 'Erika',
//    lastName: 'Kim',
//    age: 25
//  }
//
// console.log(Object.keys(person));

// #### getValues
// Write a code block that takes an object variable and logs all the values as an array.

// let person = {
//    firstName: 'Erika',
//    lastName: 'Kim',
//    age: 25
//  }
//
//  console.log(Object.values(person));

// #### getObjLength
// Write a code block the logs the number of properties an object has.

// let person = {
//    firstName: 'Erika',
//    lastName: 'Kim',
//    age: 25
//  }
//
//  console.log(Object.keys(person).length);


// #### WatchList
// Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
// Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like
//
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// and if not, log
//
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `
//
//
// let films = [
//   {
//     title: 'Psycho',
//     director: 'Alfred Hitchcock',
//     status: false
//   },
//   {
//     title: 'Citizen Kane',
//     director: 'Orson Welles',
//     status: false
//   },
//   {
//     title: 'The Usual Suspects',
//     director: 'Bryan Singer',
//     status: true
//   }
// ]
//
// // for (let key in films){
// for (let i=0 ; i< films.length; i++){
//   if (films[i]["status"]){
//     console.log ("You already watched " + " " + films[i]["title"] + " directed by " + films[i]["director"]);
//   } else{
//     console.log("You still need to watch "+ " " + films[i]["title"] + " by director " + films[i]["director"]);
//   }
// }
// // console.log(films);


// #### characterCount
// Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.
//
let str = "lllllkdfjkii"
let films = {}

for(let i=0; i<str.length; i++){
  if(films[str[i]] === undefined){
    films[str[i]] = 1
  }else{
    films[str[i]] +=1;
  }
}
console.log(films);
