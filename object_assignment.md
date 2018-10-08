# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
```js
console.log(cat.species)
```
2. Add a color quality to the cat from the previous question.
a)
```js
cat.color = 'blue'
```
b)
```js
cat["color"]='blue'
```
3. How do you check if our cat object has the property 'texture'?
type the following. if returns undefined, it means it doesn't have it.
```js
console.log(cat.texture)
```
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
```js
for(let i = 0; i < films.length; i++) {
    console.log(films[i].director);
  }
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

```
will log false, since each object receives different IDs.

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```
```js
let recipe = {
  name: 'Hummus',
  servings: 5,
  ingredients: ['chickpeas','water','lemon','sesame paste','salt','cumin']
}
for (let key in recipe) {
  console.log(key+": "+recipe[key]);
}
```

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.
```js
let recipe = {
  name: 'Hummus',
  servings: 5,
  ingredients: ['chickpeas','water','lemon','sesame paste','salt','cumin']
}
let keyArray=[];
for (let key in recipe) {
  keyArray.push(key);
}
console.log(keyArray);
```
#### getValues
Write a code block that takes an object variable and logs all the values as an array.
```js
let recipe = {
  name: 'Hummus',
  servings: 5,
  ingredients: ['chickpeas','water','lemon','sesame paste','salt','cumin']
}
let valuesArray=[];
for (let key in recipe) {
  valuesArray.push(recipe[key]);
}
console.log(valuesArray);
```
#### getObjLength
Write a code block that logs the number of properties an object has.
```js
let recipe = {
  name: 'Hummus',
  servings: 5,
  ingredients: ['chickpeas','water','lemon','sesame paste','salt','cumin']
}
let keyArray=[];
for (let key in recipe) {
  keyArray.push(key);
}
console.log(keyArray.length);
```

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

```js
let films = [
 {
   title: 'Psycho',
   director: 'Alfred Hitchcock',
   watched: true
 }, {
   title: 'Citizen Kane',
   director: 'Orson Welles',
   watched: false
 }, {
   title: 'The Usual Suspects',
   director: 'Bryan Singer',
   watched: true
 }
]
for (let i=0; i<films.length; i++) {
  if (films[i].watched) {
    console.log("You have already watched "+films[i].title+" by "+films[i].director)
  } else {
    console.log("You should watch "+films[i].title+" by "+films[i].director)
  }
}

```
#### characterCount
Write a block of code that takes a string variable and counts the occurrence of each character in the string. Use an object to keep track of the counts.
```js
let string = "woodchuck chucks wood"
let characters = {
}
for (let j = 0; j<string.length; j++) {
  let cl = string[j]
  let clc = 0;
  for (let i=0; i<string.length; i++){
    if (string[i] === string[j]) {
      clc += 1;
    }
  }
  characters[cl] = clc;
}
console.log(characters)
```
