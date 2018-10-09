// 1)

let cat = {
  genus: 'Felis',
  species: 'Catus'
}

console.log(cat.species);

// 2)

let cat = {
  genus: 'Felis',
  species: 'Catus'
}

cat.color = 'Rainbow';

console.log(cat);

// 3)

let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: 'Rainbow'
}

 console.log(cat.texture);

// 4)

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

for(let i = 0; i < films.length; i++) {
  console.log(films[i].director);
}

// 5)

false

// 5 Recipe)

let recipe = {
  name: 'deyvi',
  servings: 4,
  ingredients: ['tea', 'medicine', 'sleep', 'tylenol']
}

for(let key in recipe){
  console.log(key + ": " + recipe[key]);
};

// 5 getProps)

let recipe = {
  name: 'deyvi',
  servings: 4,
  ingredients: ['tea', 'medicine', 'sleep', 'tylenol']
}

let recipeKeys = Object.keys(recipe)
  console.log(recipeKeys)

  // 5 getValues )

  let recipe = {
    name: 'deyvi',
    servings: 4,
    ingredients: ['tea', 'medicine', 'sleep', 'tylenol']
  }

  let recipeValues = Object.values(recipe)
    console.log(recipeValues)

// 5 getObjLength)

let recipe = {
  name: 'deyvi',
  servings: 4,
  ingredients: ['tea', 'medicine', 'sleep', 'tylenol']
}

let recipeKeys = Object.keys(recipe)
  console.log(recipeKeys.length)

// 5 WatchList)

let films = [{
  title: "Wonder Woman",
  director: "deyvi",
  watched: true,
},
{
  title: "Batman",
  director: "Bruce Wayne",
  watched: false,
},
{
  title: "Superman",
  director: "Clark Kent",
  watched: true,
},
]

for(let i = 0; i < films.length; i++) {
  if (films[i].watched === true) {
    console.log(`You already watched ${films[i].title} directed by ${films[i].director}`);
  } else {
    console.log(`You still need to watch ${films[i].title} by director ${films[i].director}. `);
  }
}

// 5 characterCount)

let str = "Hello there sir";
let characterCount = {};
let counterCount = 0

for (let i = 0; i < str.length; i++) {
  let indvChar = str[i];
  for (let j = 0; i < str.length; i++) {
    if (str[j] === str[i]) {
      counterCount = counterCount + 1;
    }
  }
  characterCount[indvChar] = counterCount;
}
console.log(characterCount);
