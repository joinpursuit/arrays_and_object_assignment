// # Object Exercises

// 1. Log the cats species.
// ```js
//  let cat = {
//    genus: 'Felis',
//    species: 'Catus'
// }
// ```
console.log("####### Prob 1 #######");

 let cat = {
   genus: 'Felis',
   species: 'Catus'
}

console.log(cat.species);

// 2. Add a color quality to the cat from the previous question.
console.log("####### Prob 2 #######");

cat.color = "black";
console.log(cat.color);

// 3. How do you check if our cat object has the propery texture?
console.log("####### Prob 3 #######");

console.log(cat.texture); //undefined means property doesn't exist

// 4. Loop through the following object and log all of directors.
// ``` js
console.log("####### Prob 4 #######");

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
  console.log(films[i].director)
}

// 5. What will this code log?
console.log("####### Prob 5 #######");

// let p1 = {
//   name: 'Joe'
// }

// let p2 = {
//   name: 'Joe'
// }

// console.log(p1 === p2)

console.log("the above code will log 'false'");
// ```


// #### Recipe

// * Create an object to hold information on your favorite recipe. 
//It should have the following properties: `name`, `servings`, and `ingredients` (an array).
console.log("####### Recipe Prob #######");

let recipe = {
  name: "Potato Salad",
  servings: 6,
  ingredients: ["potatos", "basil", "olive oil"]
}

// * Create a loop that logs the recipe information, so it looks like:

// ```javascript
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
// ```
  for(let i in recipe){
    console.log(i + ": " + recipe[i]);
  };

// #### getProps
// Write a code block that takes an object variable and logs all the keys as an array.
console.log("####### getProps Prob #######");

  let kitty = {
    name: 'Tom',
    type: 'Domestic',
    age: 23,
    tag: "red"
  }

  let keys = Object.keys(kitty);
  console.log(keys);

// #### getValues
// Write a code block that takes an object variable and logs all the values as an array.
console.log("####### getValues Prob #######");

let fruit = {
  apple: 28,
  orange: 17,
  pear: 54,
}

let values = Object.values(fruit);
console.log(values);

// #### getObjLength
// Write a code block the logs the number of properties an object has.
console.log("####### getObjLength Prob #######");

  let myObjName = {
    firstName: 'Erika',
    lastName: 'Kim',
    age: 25
  }

  let length = Object.keys(myObjName).length;
  console.log(length);

// #### WatchList
// Create an array of films, where each film has the following properties: title, 
//director, and a boolean indicating if you started watching it.

// Create a code block that iterates over the array and logs whether the film was 
//watched or not. If it was watched, log a string like
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// and if not, log
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `
console.log("####### WatchList Prob #######");

let movies = [{
  title: "No country for old men",
  director: "Ethan Coen",
  watched: false
},
{
  title: "Captain America",
  director: "Joe Johnston",
  watched: true
},
{
  title: "Inception",
  director: "Christopher Nolan",
  watched: false
}
]
console.log(movies[1].title)
for(i = 0; i < Object.keys(movies).length; i++){
  if(movies[i].watched){
    console.log(`You already watched '${movies[i].title}' directed by ${movies[i].director}`)
  }else{
    console.log(`You still need to watch '${movies[0].title}' directed by ${movies[0].director}`)
  }
}
// #### characterCount
// Write a block of code that takes a string varaible and counts the occurance of each 
//character in the string. Use an object to keep track of the counts.
console.log("####### characterCount Prob #######");

let str = "some random string";
str = str.replace(/\s/g, ''); //removing spaces
let splitStr = str.split('');
let chars = {
};

for(let i = 0; i < splitStr.length; i++){
  if(typeof chars[splitStr[i]] === "undefined"){
    chars[splitStr[i]] = 1;  
  }else{
    chars[splitStr[i]]++;
  }
}
console.log(chars);








