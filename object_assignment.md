# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
console.log(cat.species)

2. Add a color quality to the cat from the previous question.

let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: "grey"
}

3. How do you check if our cat object has the propery texture?

console.log(Object.keys(cat))

4. Loop through the following object and log all of directors.
``` js
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

let directors = [];
for ( let i = 0; i < films.length; i++) {
  directors.push(films[i].director)
}
console.log(directors)

5. What will this code log?

let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

false


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa

let recipe =
  {
    name: 'Mole',
    servings: 2,
    ingredients: ["cinnamon","cumin","cocoa"]
  }


  console.log(recipe)

  for(let i = 0; i < recipe.length; i++) {
    console.log(recipe[i]);
  }
```

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

 console.log(Object.keys(recipe))

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

console.log(Object.values(recipe))

#### getObjLength
Write a code block the logs the number of properties an object has.

console.log(Object.keys(recipe).length)



#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like
let films = [
{
  name: "Mean Girls",
  director: "Mark Waters",
  watched: "yes"
} , {
  name: "Taken",
  director: "Pierre Morel",
  watched: "yes"  
}, {
  name: "Black Panther",
  director: "Ryan Coogler",
  watched: "yes"
}
]

for ( let i = 0; i < films.length; i++) {
if ( films[i].watched === "yes") {
  console.log("You already watched " + films[i].name + " directed by " + films[i].director)
}  else {
  console.log("You still need to watch " + films[i].name + " by director " + films[i].director)
}
}
`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

#### characterCount
Write a block of code that takes a string varable and counts the occurance of each character in the string. Use an object to keep track of the counts.

let vara = "hello"
let str = vara.split("")
let result = {}

for (let i = 0; i < str.length; i++) {
  if (result[str[i]]) {
    result[str[i]] += 1;
    console.log(str[i], true);
  } else {
    result[str[i]] = 1;
    // console.log(str[i], result);
  }
}
console.log(result)
