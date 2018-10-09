# Object Exercises

1. Log the cats species.
//
let cat = {
   genus: 'Felis',
   species: 'Catus'
   }
console.log (cat.species)
//
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
2. Add a color quality to the cat from the previous question.
//
let cat = {
   genus: 'Felis',
   species: 'Catus',
   }
cat.color = "orange"
console.log (cat.color)
//

3. How do you check if our cat object has the propery texture?
//
let cat = {
   genus: 'Felis',
   species: 'Catus',
   }
cat.color = "orange"
console.log (typeof cat.texture)
//

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
//
for(let i = 0; i < films.length; i++) {
    console.log(films[i].name);
  }
//
```
5. What will this code log?
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
//
false
//
```


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
//
let recipe =

 {
   "name" : "shrimp alredo",
   "serving" : 3,
   "ingredients" : ["linguini", "shrimp", "alfredo sauce"]
 };
console.log (recipe.name)
console.log ("serving: " + recipe.serving)
console.log ("ingredients: " + recipe.ingredients)
for (let i = 0; i < recipe.length; i++){
  console.log(recipe.ingredients[i]);
}
//
```

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.
//
let state =
{
  name: "New York",
  region: "North East",
  population: "a lot"
}
let stateKeys = Object.keys(state)
console.log (stateKeys)
//

#### getValues
Write a code block that takes an object variable and logs all the values as an array.
//
let state =
{
  name: "New York",
  region: "North East",
  population: "a lot"
}
let stateValue = Object.values(state)
console.log (stateValue)
//

#### getObjLength
Write a code block the logs the number of properties an object has.

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `
//
let films = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   released: 1960,
   watched: true
 },
 {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   released: 1941,
   watched: false
 }
]
for(let i = 0; i < films.length; i++) {
 if (films[i].watched === true) {
   console.log ("You already watched Psycho by Alfred Hitchcock")
 }
 else (films[i].watched === false)
   console.log ("You still need to watch Citizen Kane by Orson Welles")

   console.log (films[i].watched)
}
//

#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.
