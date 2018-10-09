/*
//Question 1
let cat = {
   genus: 'Felis',
   species: 'Catus'
}
console.log(cat.species);

//Question 2
let cat = {
   genus: 'Felis',
   species: 'Catus'
}
cat.color = 'Black';
console.table(cat);

//Question 3
let cat = {
   genus: 'Felis',
   species: 'Catus'
}
cat.color = 'Black';
console.log(cat.texture);

//Question 4
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
for (let i = 0; i < films.length; i++) {
  console.log(films[i].director);
}

//Question 5
false,they are refer to different objects.

//Question 6(Recipe)
let recipe = [
  {
  name: "Mole",
  servings:2,
  ingredients: ["cinnamon","cumin","cocoa"]
},
  {
  name: "Mooncake",
  servings:3,
  ingredients: ["powder","milk","cinnamon","cocoa"]
},
  {
  name: "chicken & broccoli"
  servings:4,
  ingredients: ["chicken","broccoli","salt"]
  }
]
for (let i = 0; i < recipe.length; i++ ) {
  console.log(recipe[i]);
}

//Question 7(getProps)
let films = {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }
let filmsKeys = Object.keys(films);
console.log(filmsKeys);

//Question 8(getValues)
let films = {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }
let filmsvalues = Object.values(films);
console.log(filmsvalues);

//Question 9(getObjLength)
let films = {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }
let getObjLength = Object.keys(films).length;
console.log(getObjLength);

//Question 10(WatchList)
let films = [
 {
   title: 'Psycho',
   director: 'Alfred Hitchcock',
   watchList: true
 },
 {
   title: 'Citizen Kane',
   director: 'Orson Welles',
   watchList: false
 },
 {
   title: 'The Usual Suspects',
   director: 'Bryan Singer',
   watchList: true
 }
]
for (let i = 0; i < films.length; i++) {
  if (films[i].watchList) {
    console.log ("You already watched " + films[i].title + "directed by " + films[i].director);
  } else {
    console.log ("You still need to watch " + films[i].title + "directed by " + films[i].director);
  }
}
*/
//Question 11(characterCount)
let arr = ["a","b","d","a","b","c"];
let chaCount = {}
for (let i = 0; i < arr.length; i++) {
  if (!chaCount[arr[i]]) {
    chaCount[arr[i]] = 1;
  } else {
    chaCount[arr[i]] += 1;
  }
}
console.log(chaCount);
