//1. Log the cats species.
let cat = {
  genus: "Felis",
  species: "Catus"
};
console.log(cat.species, cat["species"]);

// 2. Add a color quality to the cat from the previous question.
cat.color = "calico";
console.log(cat.color, cat["color"]);

// 3. How do you check if our cat object has the propery texture?
console.log(cat.hasOwnProperty("teture"), cat.hasOwnProperty("species"));

// 4. Loop through the following object and log all of directors.
let films = [
  {
    name: "Psycho",
    director: "Alfred Hitchcock",
    released: 1960
  },
  {
    name: "Citizen Kane",
    director: "Orson Welles",
    released: 1941
  },
  {
    name: "The Usual Suspects",
    director: "Bryan Singer",
    released: 1995
  }
];
let directors = [];
for (let i = 0, len = films.length; i < len; i++) {
  directors.push(films[i].director);
}
console.log(directors);

// 5. What will this code log?
let p1 = {
  name: "Joe"
};

let p2 = {
  name: "Joe"
};

console.log(p1 === p2, " logs false per not same obj");

// Recipe
// Create an object to hold information on your favorite recipe. It should have the following properties: name, servings, and ingredients (an array).
// Create a loop that logs the recipe information, so it looks like:
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
let recipe = {
  name: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};
for (let key in recipe) {
  console.log(key + ": " + recipe[key]);
}

// getProps
// Write a code block that takes an object variable and logs all the keys as an array.
const getProps = function(obj) {
  let k = [];
  for (key in obj) {
    k.push(key);
  }
  return console.log(k);
};
getProps(recipe);
console.log(Object.keys(recipe));
//
// getValues
// Write a code block that takes an object variable and logs all the values as an array.
const getValues = function(obj) {
  let v = [];
  for (key in obj) {
    v.push(obj[key]);
  }
  return console.log(v);
};
getValues(recipe);
console.log(Object.values(recipe));
//
// getObjLength
// Write a code block the logs the number of properties an object has.
const getObjLength = function(obj) {
  let o = 0;
  for (key in obj) {
    o += 1;
  }
  console.log(o);
};
getObjLength(recipe);
//
// WatchList
// Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it. Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like
//
// You already watched "Wonder Woman" directed by Patty Jenkins and if not, log
//
// You still need to watch "Wonder Woman" by director Patty Jenkins.
let filmList = [
  {
    name: "Psycho",
    director: "Alfred Hitchcock",
    watched: false
  },
  {
    name: "Citizen Kane",
    director: "Orson Welles",
    watched: false
  },
  {
    name: "The Usual Suspects",
    director: "Bryan Singer",
    watched: true
  },
  {
    name: "Wonder Woman",
    director: "Patty Jenkins",
    watched: true
  }
];
let watchList = function(a) {
  for (let i = 0, len = a.length; i < len; i++) {
    let name = a[i].name,
      director = a[i].director;
    if (a[i].watched) {
      console.log(`You already watched ' ${name} directed by ${director}.`);
    } else {
      console.log(`You need to watch ' ${name} by director ${director}.`);
    }
  }
};
console.log(filmList);
watchList(filmList);

//
// characterCount
// Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.
const characterCount = function(str) {
  let obj = {};
  let a = str.split("");
  for (let i = 0, len = a.length; i < len; i++) {
    if (obj[a[i]]) {
      obj[a[i]] += 1;
      //console.log("add",obj);
    } else {
      obj[a[i]] = 1;
      //console.log("create",obj);
    }
  }
  return console.log(obj, a);
};
characterCount("testing");
