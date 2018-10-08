// 1
console.log(cat["species"]);

// 2
cat["color"] = "black";

// 3
if ("texture" in cat) {
  console.log("The cat object has the texture property");
}

// 4
for (let key in films) {
  console.log(films["director"]);
}

for (let i = 0; i < films.length; i++) {
  console.log(films[i].director);
}

// 5
false;

// #### Recipe
let favoriteRecipe = {
  name: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};
for (let key in favoriteRecipe) {
  console.log(key + ": " + favoriteRecipe[key]);
}

// #### getProps
let objectVariable = {
  color: "green",
  age: 10,
  name: "Oscar",
  mood: "grouch"
};

let objectKeys = Object.keys(objectVariable);
console.log(objectKeys);

// #### getValues
let objectVariable = {
  color: "green",
  age: 10,
  name: "Oscar",
  mood: "grouch"
};

let objectValues = Object.values(objectVariable);
console.log(objectValues);

// #### getObjLength
let objectVariable = {
  color: "green",
  age: 10,
  name: "Oscar",
  mood: "grouch"
};

console.log(Object.keys(objectVariable).length);

// #### WatchList
let arrayFilms = [
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    viewed: false
  },
  {
    title: "Citizen Kane",
    director: "Orson Welles",
    viewed: false
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    viewed: true
  }
];

for (let i = 0; i < arrayFilms.length; i++) {
  if (arrayFilms[i].viewed === true) {
    console.log(
      "You already watched " +
        arrayFilms[i].title +
        " directed by " +
        arrayFilms[i].director
    );
  } else {
    console.log(
      "You still need to watch " +
        arrayFilms[i].title +
        " directed by " +
        arrayFilms[i].director
    );
  }
}

// #### characterCount
let stringVariable = "Hello Earthlings",
  counterObject = {
    count: 0
  };
for (let i = 0; i < stringVariable.length; i++) {
  counterObject.count++;
}
console.log(counterObject.count);
