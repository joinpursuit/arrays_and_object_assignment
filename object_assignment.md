# Object Exercises

1. Log the cats species.

 let cat = {
   genus: 'Felis',
   species: 'Catus'
}

console.log(cat.species);

2. Add a color quality to the cat from the previous question.

let cat = {
   genus: 'Felis',
   species: 'Catus',
}
cat.color = 'Black';


3. How do you check if our cat object has the property texture?

console.log(cat.texture)

//This will return "undefined" , which means that the property Texture doesn't exist

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

for (let i = 0; i < films.length; i++) {
  console.log(films[i].director);
}

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
// This will log `false` as the equality operator will only return `true` if both sides are referring to exact same object.

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```
let recipe = {
  name: 'Pancakes',
  servings: 4,
  ingredients: ['flour', ' baking powder', ' salt', ' sugar ', ' eggs', ' milk', ' butter'],
}
for (let key in recipe) {
  console.log(key + ": " + recipe[key])
}

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

for(let key in recipe) {
  console.log(key)
}

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

let recipeValues = Object.values(recipe)
console.log(recipeValues)

#### getObjLength
Write a code block the logs the number of properties an object has.

let recipeLength = Object.keys(recipe).length;
console.log(recipeLength)

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

let films = [
 {
   title: 'Avengers',
   director: 'Joss Whedon',
   watched: false
 }, {
   title: 'Avatar',
   director: 'James Cameron',
   watched: true
 }, {
   title: 'Kill Bill',
   director: 'Quentin Tarantino',
   watched: true
 }
]
for(let i = 0; i < films.length; i++) {
  if(films[i].watched === false) {
    console.log('You still need to watch ' + films[i].title + ' by director ' +  films[i].director)
  } else {
    console.log('You already watched ' + films[i].title + ' by director ' + films[i].director)
  }
}


#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.

let str = "How deep is your love";
let counts = {};

for (i = 0; i < str.length; i++) {

    character = str.charAt(i);  
    count = counts[character];
    counts[character] = count ? count + 1 : 1;

}

for (character in counts) {
    console.log(character + " count: " + counts[character]);
}
