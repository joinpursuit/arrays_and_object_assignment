
// 1. Log the cats species.
//  let cat = {
//    genus: 'Felis',
//    species: 'Catus', 'Tiger', 'Lion', 'Jaguar', 'Leopard', 'Snow leopard'
// }
//console.log(cat.species)
//
// 2. Add a color quality to the cat from the previous question.
//let cat = {
//   genus: 'Felis',
//   species: 'Catus', 'Tiger', 'Lion', 'Jaguar', 'Leopard', 'Snow leopard',
//   color: 'grey', 'black', 'snow white', 'purple'
// }
//3. How do you check if our cat object has the propery texture?
// you will console.log(cat.propertytexture)
// it will come back as undefined because it does not exist.

// 4. Loop through the following object and log all of directors.
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
  // for(let i = 0; i < films.length; i++){
  //   console.log(films[i].director)
  // }

// 5. What will this code log?
// let p1 = {
//   name: 'Joe'
// }
//
// let p2 = {
//   name: 'Joe'
// }
//
// console.log(p1 === p2)
//
// it will return as false because even though they carry the same values, they are not equal. They both have individual id's. Were you turn them into strings then you could get a true statement.

// #### Recipe ##########
//
// * Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
// * Create a loop that logs the recipe information, so it looks like:
//
// ```javascript
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
// ```
// let happyHour = [
//  {
//    drank: 'Chelada',
//    servings: 1 ,
//    ingredients: ["beer","lime", "salt","ice","mango"]
//  }
// console.log(happyHour.['ingredients'])
//
// for(let key in happyHour){
//   console.log(key)
// }

// let dish = {
//   name: 'Pasta',
//   servings: 2,
//   ingredients: ['linguine', 'tomato sauce', 'garlic', 'meatballs', 'onions', 'salt and pepper']
// }
// console.log(dish.['ingredients'])
//
// for(let key in dish){
//   console.log(key)
// }

// #### getProps
// Write a code block that takes an object variable and logs all the keys as an array.

// let films = [
//   {
//     name: 'Psycho',
//     director: 'Alfred Hitchcock',
//     released: 1960
//   },
//   {
//     name: 'Citizen Kane',
//     director: 'Orson Welles',
//     released: 1941
//   },
//   {
//     name: 'The Usual Suspects',
//     director: 'Bryan Singer',
//     released: 1995
//   }
// ]
// let filmKeys = Object.keys(films)
//   console.log(filmKeys) // => ['name', 'type']

// #### getValues
// Write a code block that takes an object variable and logs all the values as an array.
// let films = [
//   {
//     name: 'Psycho',
//     director: 'Alfred Hitchcock',
//     released: 1960
//   },
//   {
//     name: 'Citizen Kane',
//     director: 'Orson Welles',
//     released: 1941
//   },
//   {
//     name: 'The Usual Suspects',
//     director: 'Bryan Singer',
//     released: 1995
//   }
// ]
// let filmValues = Object.values(films)
//   console.log(filmValues) // => ['name', 'type']

//
// #### getObjLength
// Write a code block the logs the number of properties an object has.
// console.log(films.length)
//
// #### WatchList
// Create an array of films, where each film has the following properties: title, director,
// and a boolean indicating if you started watching it.
// Create a code block that iterates over the array and logs whether the film was watched or not.
// If it was watched, log a string like
//
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// and if not, log
//
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `
// let films =[
//   {
//   title: "Hateful Eight",
//   director: "Quentin Tarantino",
//   watched: true
// },
// {
//   title: "Pulp Fiction",
//   director:"Quentin Tarantino",
//   watched: true
// },
// {
//   title: "Inglorious Basterds",
//   director: "Quentin Tarantino",
//   watched: false
// }
// ]
//
// for (let i=0; i<films.length ;i++){
//   if(films[i].watched === true){
//     console.log("You already watched " + films[i].title + " by " + films[i].director);
//   } else {
//     console.log("You still need to watch " + films[i].title + " by " + films[i].director);
//   }
// }


// // #### characterCount
//  Write a block of code that takes a string varaible and counts the occurance of each character in the string.
//  Use an object to keep track of the counts.
I WAS ABLE TO GET THE ANSWER BUT I DONT UNDERSTAND IT.
//
// let str = "some random string";
// let splitStr = str.split('');
// let chars = [];
//  for(let i = 0; i < splitStr.length; i++){
//   if(typeof chars[splitStr[i]] === "undefined"){
//     chars[splitStr[i]] = 1;
//   }else{
//     chars[splitStr[i]]++;
//   }
// }
// console.log(chars);
