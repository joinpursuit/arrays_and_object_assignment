# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
let cat = {
  genus: 'felis',
  species: 'catus'
}
console.log(cat.species)



2. Add a color quality to the cat from the previous question.

let cat = {
  genus: 'felis',
  species: 'catus'
}
cat.color= 'black'
console.log(cat.color)



3. How do you check if our cat object has the property texture?

let cat = {
  genus: 'felis',
  species: 'catus'
}
cat.color= 'black'
console.log(cat.hasOwnProperty("texture"))


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
```
// the top would be the same before the backtics

let directors = [];

for (let i = 0; i < films.length; i++){
  directors.push(films[i].director)
}
console.log(directors);







5. What will this code log?
```js

let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

```
false

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).

let favRecipe = [
 {
   name: 'oatmeal',
   servings: 2,
   ingredients: 'oatmeal, water, milk, sugar'
 }
]


* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

let favRecipe = {
   name: 'oatmeal',
   servings: 2,
   ingredients: 'oatmeal, water, milk, sugar'
 }

 for (let key in favRecipe){
   console.log(key + ": " + favRecipe[key])

 }

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

let favRecipe = {
    name: 'oatmeal',
    servings: 2,
    ingredients: 'oatmeal, water, milk, sugar'
  }

  let favRecipeKeys = Object.keys(favRecipe)
  console.log(favRecipeKeys)



#### getValues
Write a code block that takes an object variable and logs all the values as an array.

let favRecipe = {
    name: 'oatmeal',
    servings: 2,
    ingredients: 'oatmeal, water, milk, sugar'
  }

  let favRecipeValues = Object.values(favRecipe)
  console.log(favRecipeValues)


#### getObjLength
Write a code block the logs the number of properties an object has.

let favRecipe = {
    name: 'oatmeal',
    servings: 2,
    ingredients: 'oatmeal, water, milk, sugar'
  }

  let favRecipeValues = Object.values(favRecipe)
  console.log(favRecipeValues.length)


#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

#### characterCount
Write a block of code that takes a string variable and counts the occurance of each character in the string. Use an object to keep track of the counts.
